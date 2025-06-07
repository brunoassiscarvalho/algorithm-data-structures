// Min Heap using functions
export function createMinHeap() {
  return [] as number[];
}

export function insertHeap(heap: number[], val: number) {
  heap.push(val);
  let idx = heap.length - 1;
  while (idx > 0) {
    let parent = Math.floor((idx - 1) / 2);
    if (heap[parent] <= heap[idx]) break;
    [heap[parent], heap[idx]] = [heap[idx], heap[parent]];
    idx = parent;
  }
}