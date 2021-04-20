const puppeteer = require('puppeteer-extra');
const pluginStealth = require('puppeteer-extra-plugin-stealth');
puppeteer.use(pluginStealth());

async function main() {
const browser = await puppeteer.launch({
headless: true, args: ['--no-sandbox']
});
const page = await browser.newPage();
await page.goto('https://popcat.click/');

console.log('POPCAT CHEESE made by Trimpsuz#8569');

async function get() {
    const [el] = await page.$x('//*[@id="app"]/div/div')
    const txt = await el.getProperty('textContent');
    const popsAmount = await txt.jsonValue();

    console.log({popsAmount});
}


setInterval(async () => { 
    get();
}, 300);

for (let i = 0; i < 1;) {
    
    await page.keyboard.press('Enter')

}

await browser.close();
}

// Start the script
main();

//,args: ['--no-sandbox']