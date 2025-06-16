import { connected, createQuickUnion, union, weightedUnion } from ".";

const id = createQuickUnion(10);
union(id, 1, 2);
union(id, 3, 4);
console.log(connected(id, 1, 2)); // true
console.log(connected(id, 1, 3)); // false

const n = 10;
const wqu = {
  id: Array.from({ length: n }, (_, i) => i),
  sz: Array.from({ length: n }, () => 1),
};

weightedUnion(wqu, 1, 2);
weightedUnion(wqu, 3, 4);
weightedUnion(wqu, 1, 4);

console.log(wqu.id); // Shows the parent links after unions
console.log(connected(wqu.id, 1, 4)); // true
console.log(connected(wqu.id, 1, 5));