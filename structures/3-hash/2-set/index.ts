// Set using functions
export function createSet<T>(items: T[]) {
  return new Set(items);
}

export function addToSet<T>(set: Set<T>, item: T) {
  set.add(item);
}

export function removeFromSet<T>(set: Set<T>, item: T) {
  set.delete(item);
}