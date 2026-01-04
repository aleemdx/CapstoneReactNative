import { ProductType } from 'interfaces/index';
import { PRODUCTS_DATA_URL } from 'constants/index';
import { fetchDbProducts, insertDbProducts } from 'config/db';

export const fetchProducts = async (selectedCategory: string[], search: string): Promise<ProductType[]> => {
  const dbProducts = await fetchDbProducts(selectedCategory, search);
  if (dbProducts?.rows?.length) {
    return dbProducts.rows?._array as unknown as ProductType[];
  }
  if (selectedCategory.length || search) {
    return [];
  }

  const response = await fetch(PRODUCTS_DATA_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await response.json();
  if (data.menu?.length) {
    await insertDbProducts(data.menu as ProductType[]);
    return data.menu as ProductType[];
  }
  return [];
};

export const getProductImage = (image: string) =>
  `https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/${image}?raw=true`;
