---
aliases:
  - DFS
tags:
  - Computing/Algorithms
---

alg. **Depth First Search.** DFS, but also record the preand post-times as it is convenient. [From Class](x-devonthink-item://00F714C9-0F47-41A8-BB1B-CDE7C8703CC7?page=26):
- Time Complexity: $O(V+E)$
- DFS is useful in most graph tasks except [[Shortest Path]] (that's for BFS)
![[Screenshot 2023-10-21 at 21.05.54.png]]

thm. Identifying [[Directed Acyclical Graph|DAG]]s. If there is no back edge, the graph is a [[Directed Acyclical Graph|DAG]].

alg. [[Directed Acyclical Graph|DAG]] Topological Ordering. Perform DFS with postand pre-time. Check there are no back edges (i.e. no cycle)
