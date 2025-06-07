// Singly Linked List using functions
export type ListNode = {
  value: any;
  next: ListNode | null;
};

export function createNode(value: any): ListNode {
  return { value, next: null };
}

export function appendNode(head: ListNode | null, value: any): ListNode {
  const newNode = createNode(value);
  if (!head) return newNode;
  let current = head;
  while (current.next) current = current.next;
  current.next = newNode;
  return head;
}