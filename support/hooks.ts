// support/hooks.ts
import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { CustomWorld } from './world';

// Increase default timeout to 60s
setDefaultTimeout(60 * 1000);

Before(async function (this: CustomWorld) {
  await this.openBrowser();
});

After(async function (this: CustomWorld) {
  await this.closeBrowser();
});
