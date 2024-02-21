---
aliases:
  - DAG
tags:
  - Computing/Data-Structures
---
def. Directed Acyclical Graph (DAG). No shit.
- Directed Trees are (obviously) DAGs.
	- It also has a topological ordering

[[Algorithm Problem Tips]]. Detecting if a [[Directed Graph]] is Acyclic.
- **Idea**: DFS with tree. If there is no back edge, it is a DAG.

alg. **Topological Sort (DFS).** [[Depth First Search|DFS]] with preand post-times. Order by **decreasing** post-time.
- See Also [course](x-devonthink-item://00F714C9-0F47-41A8-BB1B-CDE7C8703CC7?page=29)
- Topological Sort may not be unique

alg. [[Shortest Path|Shortest Path]] for DAG.
Idea: Topological sort of DAG. Then, linearly calculate minimum distance to that.
[slides](x-devonthink-item://E1171DB5-EAE1-4A7E-B76F-AA1D1CFB358B?page=35)
