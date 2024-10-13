---
aliases: []
tags:
  - Math
  - Computing
---
def. **Graph**. A Graph is defined as:
- Ordered pair $(V,E)$ where
	- $V$ is the set of all vertices
	- $E=\{ {x,y} |x,y\in V \text{ and }x\neq y\}$
### Types of Graphs
- Variations on:
	- Directed or Undirected
	- Connected or Not Connected
		- In directed graph, strongly connected means following direction; weakly connected means ignoring direction.
	- Cyclical or Acyclical
- Common types:
	- [[Tree]] is a connected undirected acyclical graph
		- Forest is a set of trees
	- [[Directed Graph]]
		- [[Directed Acyclical Graph]]
### Properties of Graphs
- **Degree** of a vertex $v \in V$: number of edges that connect to $v$
- **Loop**: an edge that connects a vertex to itself
- **Cycle**: a path that starts and ends with the same vertex

### Representation of Graphs in Memory
1. Adjacency Matrix
	1. 2D table of all nodes: Store a 1 if the edge between two nodes exists, 0 otherwise. [[Screenshot 2023-10-25 at 21.15.21.png|Example]]
2. Adjacency List
	1. Array of all vertices, which are also linked list that list all reachable neighbors. [[Screenshot 2023-10-25 at 21.14.48.png|Example]]
- Complexities for the two types of representations: ![[Screenshot 2023-10-25 at 21.15.44.png]]
### Paths
- $v_{1}\to v_{2}\to\dots\to v_{k}$
- A **Simple Path** is one that does not repeat verticies

### Special Variants
- A _Metric_ weighted graph is where the edge weights satisfy the triangle inequality; i.e. the vertices lie on a surface, and the edges are Euler distances of the verteces
