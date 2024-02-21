---
aliases:
  - Union Find
tags:
  - Computing/Data-Structures
---
Data structure containing multiple sets.
- Stored as array and [[Tree]]
- Make set: Initialize singleton (=single element) set for each element
- Union set
	- Find owner of both element
	- Make tree with one as parent
- Find owner of elem

**Path compression**: once you find something, directly attach all nodes of the path to that root
⇒ with path compression, a sequence of $n$ union-find operations are$\Theta(n\cdot \alpha(n))$ where $\alpha(n)$ is the minimum $t$ such that the [[Ackerman Function]] $A(t,t)\geq n$
