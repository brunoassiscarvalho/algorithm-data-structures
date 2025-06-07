// Suffix Tree Node using functions (conceptual)
export type SuffixTreeNode = {
  children: Record<string, SuffixTreeNode>;
};

export function createSuffixTreeNode(): SuffixTreeNode {
  return { children: {} };
}