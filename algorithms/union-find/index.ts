export function createUnionFind(n: number) {
  return {
    id: Array.from({ length: n }, (_, i) => i),
    sz: Array.from({ length: n }, () => 1),
  };
}

export function root(uf: { id: number[] }, i: number): number {
  while (i !== uf.id[i]) {
    uf.id[i] = uf.id[uf.id[i]]; // Path compression
    i = uf.id[i];
  }
  return i;
}

export function connected(uf: { id: number[] }, p: number, q: number): boolean {
  return root(uf, p) === root(uf, q);
}

export function union(uf: { id: number[]; sz: number[] }, p: number, q: number): void {
  const i = root(uf, p);
  const j = root(uf, q);
  if (i === j) return;
  if (uf.sz[i] < uf.sz[j]) {
    uf.id[i] = j;
    uf.sz[j] += uf.sz[i];
  } else {
    uf.id[j] = i;
    uf.sz[i] += uf.sz[j];
  }
}