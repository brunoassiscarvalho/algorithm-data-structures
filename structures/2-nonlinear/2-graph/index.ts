// Graph using functions
export type Graph = Map<string, string[]>;

export function createGraph(): Graph {
  return new Map();
}

export function addVertex(graph: Graph, v: string) {
  if (!graph.has(v)) graph.set(v, []);
}

export function addEdge(graph: Graph, v: string, w: string) {
  addVertex(graph, v);
  addVertex(graph, w);
  graph.get(v)!.push(w);
  graph.get(w)!.push(v); // For undirected graph
}