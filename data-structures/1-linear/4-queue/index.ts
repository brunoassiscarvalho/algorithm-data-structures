// Queue using functions
export function createQueue<T>() {
  return [] as T[];
}

export function enqueue<T>(queue: T[], item: T) {
  queue.push(item);
}

export function dequeue<T>(queue: T[]) {
  return queue.shift();
}