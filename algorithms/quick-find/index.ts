// Quick Find algorithm implementation in TypeScript
export function createQuickFind(n: number): number[] {
  // Each element is its own root initially
  return Array.from({ length: n }, (_, i) => i);
}

export function connected(id: number[], p: number, q: number): boolean {
  return id[p] === id[q];
}

export function union(id: number[], p: number, q: number): void {
  const pid = id[p];
  const qid = id[q];
  for (let i = 0; i < id.length; i++) {
    if (id[i] === pid) {
      id[i] = qid;
    }
  }
}

// Example usage:
