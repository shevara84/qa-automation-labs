import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';


export class ProductsPage extends BasePage {
    readonly searchInput: Locator;
    readonly productName: Locator;
    readonly productPrice: Locator;

    constructor(page: Page) {
        super(page);
        this.searchInput = page.locator('[data-testid="search-input"]');
        this.productName = page.locator('[data-testid="product-name"]');
        this.productPrice = page.locator('[data-testid="product-price"]');
    }

    // Select a category from the product page
    async selectCategory(categoryName: string) {
        await this.page.getByRole('link', { name: categoryName }).click();
    }
    // Search for a product by name
    async searchProduct(productName: string) {
        await this.searchInput.fill(productName);
    }
    // Verify that a product is visible on the product page
    async verifyProductVisible(productName: string) {
        await expect(this.page.getByRole('link', { name: productName }).first(),
        ).toBeVisible();
    }
    // Verify that no products are found on the product page
    async verifyNoProductsFound() {
        await expect(
            this.page.getByText('No products found', { exact: true }),
        ).toBeVisible();
    }
    // Navigate back to the main products page
    async goBackToProducts() {
        await this.page.getByRole('link', { name: 'Go To Back' }).click();
    }
    // Open the product details page
    async openProduct(productName: string) {
        await this.page.getByRole('link', { name: productName }).first().click();
    }
    // Verify the product details on the product page
    async verifyProductDetails(productName: string, price: string) {
        await expect(
            this.page.getByRole('heading', {
                name: productName,
                level: 3,
            }),
        ).toBeVisible();

        await expect(
            this.page.getByRole('heading', {
                name: price,
                level: 3,
            }),
        ).toBeVisible();
    }
    // Select a size filter on the product page
    async selectSize(value: string) {
        await this.page.getByTestId(`filter-size-${value}`).check({ force: true });
    }
    // Clear a size filter on the product page
    async clearSize(value: string) {
        await this.page.getByTestId(`filter-size-${value}`).uncheck({ force: true });
    }
    // Verify that a size filter is checked on the product page
    async verifySizeFilterChecked(value: string) {
        await expect(
            this.page.getByTestId(`filter-size-${value}`),
        ).toBeChecked();
    }
    // Verify that a size filter is unchecked on the product page
    async verifySizeFilterUnchecked(value: string) {
        await expect(
            this.page.getByTestId(`filter-size-${value}`),
        ).not.toBeChecked();
    }
    // Verify that products displayed match the selected size filter
    async verifyProductsBySize(value: string) {
        await expect(
            this.page.getByText(`Size: ${value.toUpperCase()}`, { exact: false }).first(),
        ).toBeVisible();
    }

}