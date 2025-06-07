// Disjoint Set (Union-Find) using functions
export function createDisjointSet(n: number) {
  return Array.from({ length: n }, (_, i) => i);
}

export function find(parent: number[], x: number): number {
  if (parent[x] !== x) parent[x] = find(parent, parent[x]);
  return parent[x];
}

export function union(parent: number[], x: number, y: number) {
  parent[find(parent, x)] = find(parent, y);
}