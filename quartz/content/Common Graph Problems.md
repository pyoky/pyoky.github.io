---
aliases:
  - Vertex Cover
  - Clique Problem
  - Independent Set
  - Triangle Cover
tags:
  - Computing/Algorithms
---
See also:
- [[Traveling Salesperson Problem]]
- [[Minimal Spanning Tree Problem]]

Q. **Clique Problem.** Given a graph $G=(V,E)$ what is the maximum set of vertices $C$ such that all vertices $v$ in $C$ are fully connected, i.e. for every $u,v \in C$, there exists edge $(u,v) \in E$
![[Clique Problem-20231202170000798.webp]]

- NP-complete problem

Q. **Independent Set Problem.** (=Stable set =anti-clique) Given a graph $G=(V,E)$ what is the maximum set of vertices $C$ such that no edges connect any two vertices in this set? ![[Clique Problem-20231202165618399.webp|248]]
- Complement with vertex cover.
	- $C$ is an maximal independent set ⇔ $V-C$ is a minimal vertex cover
	- Reduction both ways is trivial
thm. **3-SAT $\leq_{p}$ Independent Set**
	1. Construction: each clause to a fully connected tri-vertex component, and connect the variable and its negations between tri-vertex components. ![[Common Graph Problems-20231203155854906.png|418]]
	2. $\exists x_{1}\dots x_{n}$ that satisfies $Q$ where $Q$ _has $k$ clauses_ ⇔ $\exists$ Independent Set of _size $k$._

Q. **Vertex Cover.** Given $G=(V,E)$ find the minimal subset $C \subseteq V$ such that it covers all edges in the graph.

![[Vertex Cover-20231202164958170.webp|326]]
- e.g. graph that has a vertex cover comprising 2 vertices (bottom), but none with fewer.
- NP-complete problem
- $C$ is a minimal vertex cover ⇔ $V-C$ is a maximal [[Common Graph Problems|Independent Set]]
	- Red is vertex cover, and white is independent set: ![[Common Graph Problems-20231203160039421.png|248]]

alg. **Approximate Vertex Cover**.
1. Choose any edge $e$ that connects vertices $u,v$
2. remove edge $e$ from graph, as well as any edges that connected to $u$ and $v$
	1. $u,v$ are added to the vertex cover set
3. Repeat until no edges remain
- Is a 2-approximation

alg. **Approximate Greedy Vertex Cover.**
1. Choose vertex with maximum degree
2. Add this as part of vertex cover. Remove edges connected to this vertex
3. Repeat until no edges remain
- Is _not_ optimal.

Q. **Triangle Cover.** Given $G=(V,E)$ find the minial subset of vertices that it covers at least one vertex per triangle, for every triangle in graph.
- Triangle Cover is NP-complete (reduce from vertex cover)

Q. **Dominating Set.** Given $G=(V,E)$ find the minial subset $S$ of vertices such that, every vertex in $G$ is either in $S$ or is a neighbor of $S$

Q. **Critical Vertices.** Given connected graph $G=(V,E)$ find all vertices that when removed will disconnect the graph.
