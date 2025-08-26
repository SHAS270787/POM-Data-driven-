// support/world.ts
import { setWorldConstructor, IWorldOptions } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from 'playwright';

export class CustomWorld {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  constructor(options?: IWorldOptions) {
    // optional cucumber options
  }

  async openBrowser(): Promise<void> {
    this.browser = await chromium.launch({ headless: true });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async closeBrowser(): Promise<void> {
    if (this.page) await this.page.close();
    if (this.context) await this.context.close();
    if (this.browser) await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);
