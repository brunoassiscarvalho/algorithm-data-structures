// Stack using functions
export function createStack<T>() {
  return [] as T[];
}

export function push<T>(stack: T[], item: T) {
  stack.push(item);
}

export function pop<T>(stack: T[]) {
  return stack.pop();
}

export function peek<T>(stack: T[]) {
  return stack[stack.length - 1];
}