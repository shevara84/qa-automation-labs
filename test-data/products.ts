export interface ProductSearchData {
  category: string;
  product: string;
  price: string;
}

export const productSearchData: ProductSearchData[] = [
  {
    category: 'Shop Women Fashion',
    product: 'White T-Shirt',
    price: '$500',
  },
  {
    category: 'Shop Men Fashion',
    product: 'Black T-Shirt',
    price: '$150',
  },
  {
    category: 'Kids Fashion',
    product: 'Pink Shoes',
    price: '$250',
  },
  {
    category: 'Electronics',
    product: 'Samsung Mobile',
    price: '$150',
  },
];

export interface InvalidProductSearchData {
  category: string;
  product: string;
}

export const invalidProductSearchData: InvalidProductSearchData = {
  category: 'Shop Women Fashion',
  product: 'Jacket',
};