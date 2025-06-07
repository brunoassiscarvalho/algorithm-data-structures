// Skip List Node using functions (conceptual)
export type SkipListNode = {
  value: any;
  forward: (SkipListNode | null)[];
};

export function createSkipListNode(value: any, level: number): SkipListNode {
  return { value, forward: new Array(level + 1).fill(null) };
}