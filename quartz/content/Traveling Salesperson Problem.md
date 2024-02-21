---
aliases: []
tags:
  - Computing/Algorithms
---

> [!quote] Problem:
> Given a list of cities and the distances between each pair of cities, what is the shortest possible route that visits each city exactly once and returns to the origin city?

- Brute Force: $O(|V|!)$
- [Held–Karp algorithm](https://www.wikiwand.com/en/Held%E2%80%93Karp_algorithm): $O(n^2 \cdot {2}^n)$
- Record: $O(1.728^n)$

- TSP is not in NP, and is NP-Hard

## Metric TSP (MTSP)

alg. Tree-MTSP Approximation.
1. Run [[Minimal Spanning Tree Problem|MST]]
2. Run [[Depth First Search|DFS]] on the MST, record pre-time
3. Traverse the graph in the pre-time order
- Is 2-approximation

alg. Christofids MTSP Approximation
