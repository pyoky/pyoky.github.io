---
aliases: []
tags:
  - Computing/Data-Structures
  - Computing/Algorithms
---
Terminology
- $G^T$: Transpose of directed graph; $G$ with all the directions of edges reversed
- Source vertex: outgoing edges only
- Sync vertex: incoming edges only
- Strongly connected directed graph: all edges can reach all other edges
	- Source Component: only outgoing edges to any vertex of component
	- Sync Component: only incoming edges to any vertex of component
- If directed graph has no cycles, it is a [[Directed Acyclical Graph|DAG]]

alg. **Kosaraju's Algorithm** for Finding **Strongly Connected Components**.
- Idea: after performing a [[Depth First Search|DFS]] on graph $G$, the
	1. let $v$ be the component with the maximum post-time
	2. Reverse edges of $G$ to get $G^T$.
	3. let $V_{C}$ be a sync component of $G^T$
	4. **$v$ must be an element of some sync component $V_{C}$
- See also: [course](x-devonthink-item://E1171DB5-EAE1-4A7E-B76F-AA1D1CFB358B?page=24)
1. DFS on $G$
2. DFS on $G^T$ but…
	1. when you run out of reachable components…
	2. cut off the DFS tree; **that's a strongly connected component**; then
	3. go in the next maximum unvisited post-time vertex

thm. **(no cycles implies no zero-degree vertex)** Let $G$ be a directed graph. If every vertex of $G$ has one or more outgoing edges, the graph is cyclic.
*Proof.* [graph theory - Having No Directed Cycles Guarantees a Vertex of Zero Outdegree - Mathematics Stack Exchange](https://math.stackexchange.com/a/3013698) ^7207a7