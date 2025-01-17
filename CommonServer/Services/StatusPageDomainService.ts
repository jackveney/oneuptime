import PostgresDatabase from "../Infrastructure/PostgresDatabase";
import CreateBy from "../Types/Database/CreateBy";
import DeleteBy from "../Types/Database/DeleteBy";
import { OnCreate, OnDelete } from "../Types/Database/Hooks";
import GreenlockUtil from "../Utils/Greenlock/Greenlock";
import logger from "../Utils/Logger";
import DatabaseService from "./DatabaseService";
import DomainService from "./DomainService";
import HTTPErrorResponse from "Common/Types/API/HTTPErrorResponse";
import HTTPResponse from "Common/Types/API/HTTPResponse";
import URL from "Common/Types/API/URL";
import LIMIT_MAX from "Common/Types/Database/LimitMax";
import BadDataException from "Common/Types/Exception/BadDataException";
import { JSONObject } from "Common/Types/JSON";
import ObjectID from "Common/Types/ObjectID";
import API from "Common/Utils/API";
import Domain from "Model/Models/Domain";
import StatusPageDomain from "Model/Models/StatusPageDomain";

export class Service extends DatabaseService<StatusPageDomain> {
  public constructor(postgresDatabase?: PostgresDatabase) {
    super(StatusPageDomain, postgresDatabase);
  }

  protected override async onBeforeCreate(
    createBy: CreateBy<StatusPageDomain>,
  ): Promise<OnCreate<StatusPageDomain>> {
    const domain: Domain | null = await DomainService.findOneBy({
      query: {
        _id:
          createBy.data.domainId?.toString() || createBy.data.domain?._id || "",
      },
      select: { domain: true, isVerified: true },
      props: {
        isRoot: true,
      },
    });

    if (!domain?.isVerified) {
      throw new BadDataException(
        "This domain is not verified. Please verify it by going to Settings > Domains",
      );
    }

    if (domain) {
      createBy.data.fullDomain = createBy.data.subdomain + "." + domain.domain;
    }

    createBy.data.cnameVerificationToken = ObjectID.generate().toString();

    return { createBy, carryForward: null };
  }

  protected override async onBeforeDelete(
    deleteBy: DeleteBy<StatusPageDomain>,
  ): Promise<OnDelete<StatusPageDomain>> {
    const domains: Array<StatusPageDomain> = await this.findBy({
      query: {
        ...deleteBy.query,
      },
      skip: 0,
      limit: LIMIT_MAX,
      select: { fullDomain: true },
      props: {
        isRoot: true,
      },
    });

    return { deleteBy, carryForward: domains };
  }

  protected override async onDeleteSuccess(
    onDelete: OnDelete<StatusPageDomain>,
    _itemIdsBeforeDelete: ObjectID[],
  ): Promise<OnDelete<StatusPageDomain>> {
    for (const domain of onDelete.carryForward) {
      await this.removeDomainFromGreenlock(domain.fullDomain as string);
    }

    return onDelete;
  }

  public async removeDomainFromGreenlock(domain: string): Promise<void> {
    await GreenlockUtil.removeDomain(domain);
  }

  public async orderCert(statusPageDomain: StatusPageDomain): Promise<void> {
    if (!statusPageDomain.fullDomain) {
      const fetchedStatusPageDomain: StatusPageDomain | null =
        await this.findOneBy({
          query: {
            _id: statusPageDomain.id!.toString(),
          },
          select: {
            _id: true,
            fullDomain: true,
          },
          props: {
            isRoot: true,
          },
        });

      if (!fetchedStatusPageDomain) {
        throw new BadDataException("Domain not found");
      }

      statusPageDomain = fetchedStatusPageDomain;
    }

    if (!statusPageDomain.fullDomain) {
      throw new BadDataException(
        "Unable to order certificate because domain is null",
      );
    }

    await GreenlockUtil.orderCert({
      domain: statusPageDomain.fullDomain as string,
      validateCname: async (fullDomain: string) => {
        return await this.isCnameValid(fullDomain);
      },
    });

    // update the order.
    await this.updateOneById({
      id: statusPageDomain.id!,
      data: {
        isSslOrdered: true,
      },
      props: {
        isRoot: true,
      },
    });
  }

  public async updateSslProvisioningStatusForAllDomains(): Promise<void> {
    const domains: Array<StatusPageDomain> = await this.findBy({
      query: {
        isSslOrdered: true,
      },
      select: {
        _id: true,
      },
      limit: LIMIT_MAX,
      skip: 0,
      props: {
        isRoot: true,
      },
    });

    for (const domain of domains) {
      await this.updateSslProvisioningStatus(domain);
    }
  }

  private async isSSLProvisioned(
    fulldomain: string,
    token: string,
  ): Promise<boolean> {
    try {
      const result: HTTPErrorResponse | HTTPResponse<JSONObject> =
        await API.get(
          URL.fromString(
            "https://" +
              fulldomain +
              "/status-page-api/cname-verification/" +
              token,
          ),
        );

      if (result.isFailure()) {
        return false;
      }

      return true;
    } catch (err) {
      return false;
    }
  }

  public async updateCnameStatusForStatusPageDomain(data: {
    domain: string;
    cnameStatus: boolean;
  }): Promise<void> {
    if (!data.cnameStatus) {
      await this.updateOneBy({
        query: {
          fullDomain: data.domain,
        },
        data: {
          isCnameVerified: false,
          isSslOrdered: false,
          isSslProvisioned: false,
        },
        props: {
          isRoot: true,
        },
      });
    } else {
      await this.updateOneBy({
        query: {
          fullDomain: data.domain,
        },
        data: {
          isCnameVerified: true,
        },
        props: {
          isRoot: true,
        },
      });
    }
  }

  public async isCnameValid(fullDomain: string): Promise<boolean> {
    try {
      // get the token from the domain.

      const statusPageDomain: StatusPageDomain | null = await this.findOneBy({
        query: {
          fullDomain: fullDomain,
        },
        select: {
          _id: true,
          cnameVerificationToken: true,
        },
        props: {
          isRoot: true,
        },
      });

      if (!statusPageDomain) {
        return false;
      }

      const token: string = statusPageDomain.cnameVerificationToken!;

      const result: HTTPErrorResponse | HTTPResponse<JSONObject> =
        await API.get(
          URL.fromString(
            "http://" +
              fullDomain +
              "/status-page-api/cname-verification/" +
              token,
          ),
        );

      if (result.isSuccess()) {
        await this.updateCnameStatusForStatusPageDomain({
          domain: fullDomain,
          cnameStatus: true,
        });

        return true;
      }

      // try with https

      const resultHttps: HTTPErrorResponse | HTTPResponse<JSONObject> =
        await API.get(
          URL.fromString(
            "https://" +
              fullDomain +
              "/status-page-api/cname-verification/" +
              token,
          ),
        );

      if (resultHttps.isSuccess()) {
        await this.updateCnameStatusForStatusPageDomain({
          domain: fullDomain,
          cnameStatus: true,
        });

        return true;
      }

      await this.updateCnameStatusForStatusPageDomain({
        domain: fullDomain,
        cnameStatus: false,
      });

      return false;
    } catch (err) {
      logger.debug("Failed checking for CNAME " + fullDomain);
      logger.debug(err);

      await this.updateCnameStatusForStatusPageDomain({
        domain: fullDomain,
        cnameStatus: false,
      });

      return false;
    }
  }

  public async updateSslProvisioningStatus(
    domain: StatusPageDomain,
  ): Promise<void> {
    if (!domain.id) {
      throw new BadDataException("Domain ID is required");
    }

    const statusPageDomain: StatusPageDomain | null = await this.findOneBy({
      query: {
        _id: domain.id?.toString(),
      },
      select: {
        _id: true,
        fullDomain: true,
        cnameVerificationToken: true,
      },
      props: {
        isRoot: true,
      },
    });

    if (!statusPageDomain) {
      throw new BadDataException("Domain not found");
    }

    logger.debug(
      `StatusPageCerts:RemoveCerts - Checking CNAME ${statusPageDomain.fullDomain}`,
    );

    // Check CNAME validation and if that fails. Remove certs from Greenlock.
    const isValid: boolean = await this.isSSLProvisioned(
      statusPageDomain.fullDomain!,
      statusPageDomain.cnameVerificationToken!,
    );

    if (!isValid) {
      // check if cname is valid.

      await this.isCnameValid(statusPageDomain.fullDomain!);

      await this.updateOneById({
        id: statusPageDomain.id!,
        data: {
          isSslProvisioned: false,
        },
        props: {
          isRoot: true,
        },
      });
    } else {
      await this.updateOneById({
        id: statusPageDomain.id!,
        data: {
          isSslProvisioned: true,
        },
        props: {
          isRoot: true,
        },
      });
    }
  }

  public async orderSSLForDomainsWhichAreNotOrderedYet(): Promise<void> {
    const domains: Array<StatusPageDomain> = await this.findBy({
      query: {
        isSslOrdered: false,
      },
      select: {
        _id: true,
        fullDomain: true,
      },
      limit: LIMIT_MAX,
      skip: 0,
      props: {
        isRoot: true,
      },
    });

    for (const domain of domains) {
      try {
        await this.orderCert(domain);
      } catch (e) {
        logger.error(e);
      }
    }
  }

  public async verifyCnameWhoseCnameisNotVerified(): Promise<void> {
    const domains: Array<StatusPageDomain> = await this.findBy({
      query: {
        isCnameVerified: false,
      },
      select: {
        _id: true,
        fullDomain: true,
      },
      limit: LIMIT_MAX,
      skip: 0,
      props: {
        isRoot: true,
      },
    });

    for (const domain of domains) {
      try {
        await this.isCnameValid(domain.fullDomain as string); // this will also upate the status.
      } catch (e) {
        logger.error(e);
      }
    }
  }

  public async renewCertsWhichAreExpiringSoon(): Promise<void> {
    await GreenlockUtil.renewAllCertsWhichAreExpiringSoon({
      validateCname: async (fullDomain: string) => {
        return await this.isCnameValid(fullDomain);
      },
      notifyDomainRemoved: async (domain: string) => {
        logger.debug(`Domain removed from greenlock: ${domain}`);
      },
    });
  }
}
export default new Service();
