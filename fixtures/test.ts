import { test as base  } from '@playwright/test';
import { LoginPage } from '@pages/login.page';
import { ProductsPage } from '@pages/products.page';

type TestFixtures = {
  // Define your custom fixtures here
  loginPage: LoginPage;
  productsPage: ProductsPage;
 
};

export const test = base.extend<TestFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  productsPage: async ({ page }, use) => {
    const productsPage = new ProductsPage(page);
    await use(productsPage);
  },
});

export { expect } from '@playwright/test';