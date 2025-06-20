/**
 * Performs insertion sort on an array in-place.
 * @param arr Array of numbers to sort.
 * @returns The sorted array.
 */
export function insertionSort(arr: number[]): number[] {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}