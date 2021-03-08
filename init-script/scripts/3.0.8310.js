const { find, update } = require('../util/db');

const statusPageCollection = 'statuspages';

async function run() {
    const statusPages = await find(statusPageCollection, {
        deleted: false,
        theme: { $exists: false },
    });

    for (let i = 0; i < statusPages.length; i++) {
        const statusPage = statusPages[i];
        await update(
            statusPageCollection,
            { _id: statusPage._id },
            { theme: 'Classic Theme' }
        );
    }
}

module.exports = run;
