import express, {
    ExpressRequest,
    ExpressResponse,
} from 'CommonServer/utils/Express';

const router = express.getRouter();
import FileService from '../services/fileService';
import { sendErrorResponse } from 'CommonServer/utils/response';
import Exception from 'Common/Types/Exception/Exception';

import { sendFileResponse } from 'CommonServer/utils/response';

// Route Description: Getting uploaded files stored in mongodb.
// Params:
// Param1: req.params-> {filename};
// Returns: response uploaded files, error message

router.get('/:filename', async (req: ExpressRequest, res: ExpressResponse) => {
    try {
        const file = await FileService.findOneBy({
            filename: req.params.filename,
        });
        return sendFileResponse(req, res, file);
    } catch (error) {
        return sendErrorResponse(req, res, error as Exception);
    }
});

export default router;
