// Suffix Array using functions
export function buildSuffixArray(str: string): string[] {
  const suffixes = [];
  for (let i = 0; i < str.length; i++) {
    suffixes.push(str.slice(i));
  }
  return suffixes.sort((a: string, b: string) => a.localeCompare(b));
}