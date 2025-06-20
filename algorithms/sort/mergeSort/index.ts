/**
 * Performs merge sort on an array and returns a new sorted array (functional, non-mutating).
 * @param arr Array of numbers to sort.
 * @returns A new sorted array.
 */
export function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

 /**
 * Performs bottom-up (iterative) merge sort on an array and returns a new sorted array.
 * @param arr Array of numbers to sort.
 * @returns A new sorted array.
 */
export function bottomUpMergeSort(arr: number[]): number[] {
  const n = arr.length;
  let aux = arr.slice();
  let src = arr.slice();
  let dest = aux;

  for (let sz = 1; sz < n; sz = sz * 2) {
    for (let lo = 0; lo < n - sz; lo += sz * 2) {
      const mid = lo + sz - 1;
      const hi = Math.min(lo + sz * 2 - 1, n - 1);
      mergeBU(src, dest, lo, mid, hi);
    }
    // Swap src and dest for next pass
    [src, dest] = [dest, src];
  }
  // If the last swap put the sorted array in aux, copy it back
  return src;
}

function mergeBU(src: number[], dest: number[], lo: number, mid: number, hi: number): void {
  let i = lo, j = mid + 1;
  for (let k = lo; k <= hi; k++) {
    if (i > mid) dest[k] = src[j++];
    else if (j > hi) dest[k] = src[i++];
    else if (src[j] < src[i]) dest[k] = src[j++];
    else dest[k] = src[i++];
  }
}