/**
 * Performs a Fisher-Yates shuffle (random shuffle) on an array in-place.
 * @param arr Array of numbers to shuffle.
 * @returns The shuffled array.
 */
export function shuffleSort(arr: number[]): number[] {
  const n = arr.length;
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

