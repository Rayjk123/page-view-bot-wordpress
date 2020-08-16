import { getAllWordpressPosts } from "./service/wordpressService";

const chromium = require('chrome-aws-lambda');


export const handler = async (event: any) => {
    let count = 1;
    const wordpressPostUrls = await getAllWordpressPosts('faith4.net');

    for (const postUrl in wordpressPostUrls) {
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
    }

    return `Completed a total of ${wordpressPostUrls.length} posts`;
};
