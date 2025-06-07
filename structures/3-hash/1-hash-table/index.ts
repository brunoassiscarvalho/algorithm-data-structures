// Hash Table using functions
export type HashTable = Record<string, any>;

export function createHashTable(): HashTable {
  return {};
}

export function setItem(table: HashTable, key: string, value: any) {
  table[key] = value;
}

export function getItem(table: HashTable, key: string) {
  return table[key];
}