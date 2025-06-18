/**
 * Evaluates a string arithmetic expression using Dijkstra's two-stack algorithm.
 * Supports +, -, *, /, and parentheses.
 */
export function dijkstraTwoStackEval(expr: string): number {
  const ops: string[] = [];
  const vals: number[] = [];
  const tokens = expr.replace(/\(/g, ' ( ').replace(/\)/g, ' ) ').split(/\s+/).filter(Boolean);

  for (const token of tokens) {
    if (token === '(') {
      // Do nothing
    } else if (token === '+' || token === '-' || token === '*' || token === '/') {
      ops.push(token);
    } else if (token === ')') {
      const op = ops.pop();
      let v = vals.pop()!;
      if (op === '+') v = vals.pop()! + v;
      else if (op === '-') v = vals.pop()! - v;
      else if (op === '*') v = vals.pop()! * v;
      else if (op === '/') v = vals.pop()! / v;
      vals.push(v);
    } else {
      vals.push(Number(token));
    }
  }
  return vals.pop()!;
}