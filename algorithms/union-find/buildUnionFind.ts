// Union-Find (Disjoint Set) as a design pattern using a builder function

export type UnionFind = {
  connected: (p: number, q: number) => boolean;
  union: (p: number, q: number) => void;
  root: (i: number) => number;
  id: readonly number[];
  sz: readonly number[];
};

export function buildUnionFind(n: number): UnionFind {
  const id = Array.from({ length: n }, (_, i) => i);
  const sz = Array.from({ length: n }, () => 1);

  function root(i: number): number {
    while (i !== id[i]) {
      id[i] = id[id[i]]; // Path compression
      i = id[i];
    }
    return i;
  }

  function connected(p: number, q: number): boolean {
    return root(p) === root(q);
  }

  function union(p: number, q: number): void {
    const i = root(p);
    const j = root(q);
    if (i === j) return;
    if (sz[i] < sz[j]) {
      id[i] = j;
      sz[j] += sz[i];
    } else {
      id[j] = i;
      sz[i] += sz[j];
    }
  }

  return { connected, union, root, id, sz };
}