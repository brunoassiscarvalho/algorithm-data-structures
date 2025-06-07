// Binary Tree using functions
export type TreeNode<T> = {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
};

export function createTreeNode<T>(value: T): TreeNode<T> {
  return { value, left: null, right: null };
}

export function insertNode<T>(root: TreeNode<T> | null, value: T): TreeNode<T> {
  if (!root) return createTreeNode(value);
  if (value < root.value) root.left = insertNode(root.left, value);
  else root.right = insertNode(root.right, value);
  return root;
}