import { createQuickFind, connected, union } from './index';



const n = 10; // Number of elements
const id = createQuickFind(n);
union(id, 1, 2);
union(id, 3, 4);
console.log(connected(id, 1, 2)); // true
console.log(connected(id, 1, 3)); // false

