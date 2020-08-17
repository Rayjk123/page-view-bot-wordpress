import { getAllWordpressPostsOnPage } from "./service/wordpressService";
import { visitBrowser } from "./service/browserService";

const chromium = require('chrome-aws-lambda');


export const handler = async (event: any) => {
    let count = 1;
    const wordpressPostUrls = await getAllWordpressPostsOnPage('faith4.net', event.page);

    for (const postUrl of wordpressPostUrls) {
        console.log(`Navigating to the following URL: ${postUrl}`);

        for (let i = 0; i < 2; i++) {
            await visitBrowser(postUrl);
        }

        console.log(`Completed ${count} out of ${wordpressPostUrls.length}`);
        count++;
    }

    return `Completed a total of ${wordpressPostUrls.length} posts`;
};
