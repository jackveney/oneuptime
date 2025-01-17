import URL from "Common/Types/API/URL";

type GetStringFunction = () => string;
type GetStringOrNullFunction = () => string | null;
type GetURLFunction = () => URL;

export const GetOneUptimeURL: GetURLFunction = () => {
  return URL.fromString(
    process.env["ONEUPTIME_URL"] || "https://oneuptime.com",
  );
};

export const GetRepositorySecretKey: GetStringOrNullFunction = ():
  | string
  | null => {
  return process.env["ONEUPTIME_REPOSITORY_SECRET_KEY"] || null;
};

export const GetLocalRepositoryPath: GetStringFunction = (): string => {
  return process.env["ONEUPTIME_LOCAL_REPOSITORY_PATH"] || "/repository";
};

export const GetGitHubToken: GetStringOrNullFunction = (): string | null => {
  const token: string | null = process.env["GITHUB_TOKEN"] || null;
  return token;
};

export const GetGitHubUsername: GetStringOrNullFunction = (): string | null => {
  const username: string | null = process.env["GITHUB_USERNAME"] || null;
  return username;
};
