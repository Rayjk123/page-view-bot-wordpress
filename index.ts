const chromium = require('chrome-aws-lambda');


export const handler = async (event: any) => {
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
        'https://faith4.net/2020/08/14/%ec%95%a0%ed%8b%80%eb%9e%9c%ed%83%80%ec%a1%b0%ec%a7%80%ec%95%84-%ed%95%9c%ec%9d%b8%ec%83%81%ea%b3%b5%ed%9a%8c%ec%9d%98%ec%86%8c-%ea%b7%80%eb%84%b7%ec%83%81%ea%b3%b5%ed%9a%8c%ec%9d%98%ec%86%8c%ec%99%80/',
        {waitUntil : 'networkidle0'}
    );

    await page.screenshot();

    await browser.close();
};