import { Page } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  private title = '.title';

  async getTitle() {
    try {
      await this.page.waitForSelector(this.title, { timeout: 3000 });
      return this.page.textContent(this.title);
    } catch {
      return null;
    }
  }
}
