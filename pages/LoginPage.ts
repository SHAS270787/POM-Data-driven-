import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  private usernameField = '#user-name';
  private passwordField = '#password';
  private loginButton = '#login-button';
  private errorMessage = '[data-test="error"]';

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
    await this.page.waitForSelector(this.usernameField);
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameField, username);
    await this.page.fill(this.passwordField, password);
    await this.page.click(this.loginButton);
  }

  async getErrorMessage() {
    try {
      await this.page.waitForSelector(this.errorMessage, { timeout: 3000 });
      return this.page.textContent(this.errorMessage);
    } catch {
      return null;
    }
  }
}
