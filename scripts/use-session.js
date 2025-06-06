import { chromium } from "playwright";

(async () => {
  const browser = await chromium.launch({ headless: false });

  const context = await browser.newContext({
    storageState: "./storage/state.json", 
  });

  const page = await context.newPage();
  await page.goto("https://www.linkedin.com/feed/"); 

  const title = await page.title();

})();
