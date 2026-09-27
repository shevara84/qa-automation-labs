import { test } from "@fixtures/test";
import { productSearchData, invalidProductSearchData } from "@test-data/products";

test.describe('Product search tests', () => {
  // Iterate through each product category and perform search tests
  for (const productData of productSearchData) {
    test(`Search and verify product details - ${productData.product}`, async ({
      productsPage,
    }) => {
      await productsPage.navigateTo('/shop.php');
      // Select the product category before searching
      await productsPage.selectCategory(productData.category);
      // Search for the product within the selected category
      await productsPage.searchProduct(productData.product);
      // Verify that the product is visible in the search results
      await productsPage.verifyProductVisible(productData.product);
      // Open the product details page
      await productsPage.openProduct(productData.product);
      // Verify the product details on the product page
      await productsPage.verifyProductDetails(
        productData.product,
        productData.price,
      );
      // Navigate back to the main products page
      await productsPage.goBackToProducts();
    });
  }
});
