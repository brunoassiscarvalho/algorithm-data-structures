export function createQuickUnion(n: number): number[] {
  // Each element is its own root initially
  return Array.from({ length: n }, (_, i) => i);
}

export function root(id: number[], i: number): number {
  while (i !== id[i]) {
    i = id[i];
  }
  return i;
}

export function rootPathCompression(id: number[], i: number): number {
  while (i !== id[i]) {
    id[i] = id[id[i]]; // Path compression: point to grandparent
    i = id[i];
  }
  return i;
}

export function connected(id: number[], p: number, q: number): boolean {
  return root(id, p) === root(id, q);
}

export function union(id: number[], p: number, q: number): void {
  const i = root(id, p);
  const j = root(id, q);
  id[i] = j;
}

export function weightedUnion(wqu: { id: number[]; sz: number[] }, p: number, q: number): void {
  const { id, sz } = wqu;
  const i = root(id, p);
  const j = root(id, q);
  if (i === j) return;
  if (sz[i] < sz[j]) {
    id[i] = j;
    sz[j] += sz[i];
  } else {
    id[j] = i;
    sz[i] += sz[j];
  }
}