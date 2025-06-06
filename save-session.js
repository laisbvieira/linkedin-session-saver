import { chromium } from "playwright";
import fs from "fs";

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://www.linkedin.com/login");
  console.log("Faça login manualmente (você tem 60 segundos)...");

  await page.waitForTimeout(60000); 

  const storage = await context.storageState();
  fs.writeFileSync("storage/state.json", JSON.stringify(storage, null, 2));

  await browser.close();
})();
