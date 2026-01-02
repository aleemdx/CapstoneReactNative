import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Delete the Item/Value from the async storage against provided key
 * @param {string} key - Key to search in async storage
 */
export const clearAsyncStorage = async (key: string): Promise<void> => {
  await AsyncStorage.removeItem(key);
};

/**
 * Getting Item/value from async storage against provided key
 * @param {string} key - Key to search in async storage
 * @returns {Promise<string>} Returning updated storage/item value
 */
export const getAsyncStorageValue = async (key: string): Promise<string> => {
  const result = await AsyncStorage.getItem(key);
  return result || '';
};

/**
 * Saving Item/value to async storage against provided key
 * @param {string} key - Key to search in async storage
 * @param {string} item - Item/Value will be a type provided at the time of function call
 * @returns {Promise<void>}
 */
export const setAsyncStorageValue = async (key: string, item: string): Promise<void> => {
  await AsyncStorage.setItem(key, item);
};
