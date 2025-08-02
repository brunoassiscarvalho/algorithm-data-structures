/**
 * Performs Dijkstra's 3-way partitioning QuickSort on an array in-place.
 * Efficient for arrays with many duplicate keys.
 * @param arr Array of numbers to sort.
 * @param low Starting index (default 0).
 * @param high Ending index (default arr.length - 1).
 * @returns The sorted array.
 */
export function dijkstra3WayPartitioning(
  arr: number[],
  low = 0,
  high = arr.length - 1
): number[] {
  if (low >= high) return arr;

  let lt = low;
  let gt = high;
  const pivot = arr[low];
  let i = low + 1;

  while (i <= gt) {
    if (arr[i] < pivot) {
      [arr[lt], arr[i]] = [arr[i], arr[lt]];
      lt++;
      i++;
    } else if (arr[i] > pivot) {
      [arr[i], arr[gt]] = [arr[gt], arr[i]];
      gt--;
    } else {
      i++;
    }
  }

  dijkstra3WayPartitioning(arr, low, lt - 1);
  dijkstra3WayPartitioning(arr, gt + 1, high);
  return arr;
}

// Example usage:
// const sorted = dijkstra3WayPartitioning([3, 5, 2, 3, 3, 1, 5, 2]);
// console.log(sorted); // [1, 2, 2, 3, 3, 3, 5, 5]