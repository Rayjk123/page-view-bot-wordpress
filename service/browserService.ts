const chromium = require('chrome-aws-lambda');

export const visitBrowser = async (url: string) => {
    const browser = await chromium.puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath,
        headless: chromium.headless,
        ignoreHTTPSErrors: true,
        isMobile: true
    });
    const page = await browser.newPage();
    await page.setJavaScriptEnabled(true);
    await page.goto(
        url,
        { waitUntil: 'networkidle0' }
    );

    await browser.close();
}
