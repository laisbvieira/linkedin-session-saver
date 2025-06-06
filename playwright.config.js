// playwright.config.js
import { defineConfig } from "@playwright/test";

export default defineConfig({
  use: {
    //abre o nevegador visualmente
    headless: false,
    //garante que será o chrome
    browserName: "chromium",
  },
});
