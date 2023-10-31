export const setLocalStorage = (key: string, value: any) => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error(`Error setting localStorage item for key: ${key}`, error);
  }
};

export const getLocalStorage = <T>(key: string, defaultValue?: T): T | null => {
  try {
    const serializedValue = localStorage.getItem(key);
    if (serializedValue !== null) {
      return JSON.parse(serializedValue);
    }
  } catch (error) {
    console.error(`Error getting localStorage item for key: ${key}`, error);
  }

  return defaultValue !== undefined ? defaultValue : null;
};

export const clearLocalStorage = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error clearing localStorage item for key: ${key}`, error);
  }
};
