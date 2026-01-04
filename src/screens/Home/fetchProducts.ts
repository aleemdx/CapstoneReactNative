import { PRODUCTS_DATA_URL } from 'constants/index';
import { ProductType } from 'interfaces/index';

export const fetchProducts = async (): Promise<ProductType[]> => {
  const response = await fetch(PRODUCTS_DATA_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await response.json();
  return data.menu;
};

export const getProductImage = (image: string) =>
  `https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/${image}?raw=true`;
