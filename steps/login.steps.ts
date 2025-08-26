import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

let loginPage: LoginPage;
let productsPage: ProductsPage;

Given('I am on the login page', async function (this: CustomWorld) {
  loginPage = new LoginPage(this.page);
  await loginPage.goto();
});

When('I login with {string} and {string}', async function (this: CustomWorld, username: string, password: string) {
  await loginPage.login(username, password);
});

Then('I should see {string}', async function (this: CustomWorld, expectedTitle: string) {
  productsPage = new ProductsPage(this.page);

  // Wait for either title or error message to appear
  const title = await productsPage.getTitle();
  const error = await loginPage.getErrorMessage();

  if (title) {
    expect(title).toContain(expectedTitle);
  } else if (error) {
    expect(error).toContain(expectedTitle);
  }
});
