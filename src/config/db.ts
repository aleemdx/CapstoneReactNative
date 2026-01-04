import { Nullable, ProductType } from 'interfaces/index';
import { open, QueryResult, NitroSQLiteConnection } from 'react-native-nitro-sqlite';

let db: Nullable<NitroSQLiteConnection> = null;

const getDatabase = (): NitroSQLiteConnection => {
  if (!db) {
    db = open({ name: 'little_lemon.sqlite' });
  }
  return db;
};

export const executeMigration = async () => {
  const database = getDatabase();
  database.execute(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      price REAL NOT NULL,
      image TEXT NOT NULL,
      description TEXT NOT NULL,
      category TEXT NOT NULL
    )
  `);

  database.execute(`
      CREATE TABLE IF NOT EXISTS categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
      )
    `);
};

export const fetchDbProducts = async (selectedCategory: string[], search: string): Promise<QueryResult> => {
  const database = getDatabase();

  const conditions: string[] = [];
  const params: string[] = [];

  // Add search condition
  if (search) {
    conditions.push('name LIKE ?');
    params.push(`%${search}%`);
  }

  // Add category condition
  if (selectedCategory?.length) {
    const placeholders = selectedCategory.map(() => '?').join(', ');
    conditions.push(`category IN (${placeholders})`);
    params.push(...selectedCategory);
  }

  // Build query
  const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

  const query = `SELECT * FROM products ${whereClause}`;

  return await database.executeAsync(query, params);
};

export const removeAllDbProducts = async (): Promise<void> => {
  const database = getDatabase();
  await database.executeAsync(`DELETE FROM products`);
};

export const insertDbProducts = async (products: ProductType[]): Promise<void> => {
  if (products.length === 0) return;

  const database = getDatabase();
  const placeholders = products.map(() => '(?, ?, ?, ?, ?)').join(', ');
  const values = products.flatMap((product) => [
    product.name,
    product.price,
    product.image,
    product.description,
    product.category,
  ]);

  const response = await database.executeAsync(
    `INSERT INTO products (name, price, image, description, category) VALUES ${placeholders}`,
    values,
  );

  console.log(response);
};

export const closeDatabase = () => {
  if (db) {
    db.close();
  }
};
