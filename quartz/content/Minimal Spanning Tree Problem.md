---
aliases:
  - MST
tags:
  - Computing/Data-Structures
  - Computing/Algorithms
---
Q. **Minimum Spanning Tree.** From a connected, undirected, edge-weighted [[Graph]], make a subset graph that:
- connects all vertices together
- minimum possible total edge weight
- ⇒ will always be a [[Tree]]
- → there could be multiple spanning tree (MST is not unique)

alg. **Prim's Algorithm**
- Idea: Gradually build one big tree
	1. Choose random vertex, then add all edges connected to it to a [[Priority Queue]].
	2. Use the lightest edge in the priority queue and connect to that vertex.

alg. **Kruskal's Algorithm.**
- Idea: Build many trees, and gradually combine them.
	1. Choose lightest edge, then create a tree with that (using a [[Disjoint Set]])
	2. If the vertices are already part of a small tree…
		1. if they're different trees, combine the two trees with that edge
		2. if they're same trees, don't connect.
- Time complexity: $O(E\log V)$

lem. **Exchange Argument.** Correctness proof for both Prim's and Kruskal's algorithm.
- Idea: If we have MST, choosing the lightest edge to connect them (greedily) is MST.
	1. Assume MST $T^*$.
	2. Split into two components $C_{1},C_{2}$.
	3. Among edges that connect $C_{1},C_{2}$ you choose the lightest edge $e^*$.
	4. ⇒ Then, $C_{1},C_{2},e$ is a minimum spanning tree.

## Discussion

- Prim's and Kruska's algorithms are both [[Greedy Algorithm]]s
- If edge weights are distinct, there is a _unique_ minimum spanning tree
- Doesn't have anything to do with [[Shortest Path]] algorithms.

### Applications

Q. **Minimal Edge Removal to Acyclic Graph.** Given a connected, undirected, weighted graph $G=V,E$ we will remove edges $F$ such that the remaining graph will have no cycles. What is $F$ with the minimum total weight sum?
1. Compute maximum spanning tree on $G$
	1. this can be done by modifying Prim's or Kruskal's algorithm…
	2….or by running minimum spanning tree on a new graph with negated edge weights
2. $F$ is the set of edges not contained by this MST
