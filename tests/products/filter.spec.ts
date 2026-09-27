import { test } from '@fixtures/test';
import { productFilterData } from '@test-data/products';

test.describe('Product filter tests', () => {
  // Iterate through the products and filter by size
  for (const filterData of productFilterData) {
    test(`Filter products by size - ${filterData.category}`, async ({ productsPage }) => {
      // Navigate to the url of the category page
      await productsPage.navigateTo(filterData.url);
      // Select the size filter based on test data
      await productsPage.selectSize(filterData.size);
      // Verify that the size filter is checked
      await productsPage.verifySizeFilterChecked(filterData.size);
      // Verify that the products displayed match the selected size filter
      await productsPage.verifyProductsBySize(filterData.expectedSize);
      // Clear the size filter
      await productsPage.clearSize(filterData.size);
      // Verify that the size filter is unchecked
      await productsPage.verifySizeFilterUnchecked(filterData.size);
    });
  }
});