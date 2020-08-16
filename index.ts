import { getAllWordpressPostsOnPage } from "./service/wordpressService";

const chromium = require('chrome-aws-lambda');


export const handler = async (event: any) => {
    let count = 1;
    const wordpressPostUrls = await getAllWordpressPostsOnPage('faith4.net', event.page);

    for (const postUrl of wordpressPostUrls) {
        console.log(`Navigating to the following URL: ${postUrl}`);
        const browser = await chromium.puppeteer.launch({
            args: chromium.args,
            defaultViewport: chromium.defaultViewport,
            executablePath: await chromium.executablePath,
            headless: chromium.headless,
            ignoreHTTPSErrors: true,
        });
        const page = await browser.newPage();
        await page.setJavaScriptEnabled(true);
        await page.goto(
            postUrl,
            { waitUntil: 'networkidle0' }
        );

        await browser.close();

        console.log(`Completed ${count} out of ${wordpressPostUrls.length}`);
        count++;
    }

    return `Completed a total of ${wordpressPostUrls.length} posts`;
};
