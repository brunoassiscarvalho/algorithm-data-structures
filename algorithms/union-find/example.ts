import { createUnionFind, union, connected } from '.';
import { buildUnionFind } from './buildUnionFind';

// Example usage:
const uf = createUnionFind(10);

union(uf, 1, 2);
union(uf, 3, 4);
union(uf, 2, 4);

console.log(connected(uf, 1, 3)); // true
console.log(connected(uf, 1, 5)); // false




// Example usage with build pattern:
const builduf = buildUnionFind(10);

builduf.union(1, 2);
builduf.union(3, 4);
builduf.union(2, 4);

console.log(builduf.connected(1, 3)); // true
console.log(builduf.connected(1, 5)); // false