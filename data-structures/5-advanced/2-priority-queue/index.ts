// Priority Queue using functions
export type PQItem<T> = { element: T; priority: number };

export function createPriorityQueue<T>() {
  return [] as PQItem<T>[];
}

export function enqueue<T>(pq: PQItem<T>[], element: T, priority: number) {
  pq.push({ element, priority });
  pq.sort((a, b) => a.priority - b.priority);
}

export function dequeue<T>(pq: PQItem<T>[]) {
  return pq.shift();
}