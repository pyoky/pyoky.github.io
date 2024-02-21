---
aliases: []
tags:
  - Computing/Algorithms
---

> [!warning] Be Skeptical of Greedy Algorithms
> ![[Dynamic Programming.png]]

- Often for optimization problems (minimize/maximize)
- Hard to argue for correctness
	- Use [[Proof by contradiction]], or the [[Interval Scheduling|exchange argument]]
- Works well for approximating optimal solutions
	- When the correct algorithm is intractable ($O(2^n)$), then often the greedy solution that is $O(n^k)$ is useful (=tractable)
- Gradient descent is a greedy optimization algorithm.
	- Linear optimization algorithms are "analytical" and correct, but take lots of time.
	- Gradient descent algorithms (all of ML) is greedy, but not the global optimum solution. They're "good enough" and "tractable"

## Proof of Correctness
1. **Feasibility**: there is an algorithm that gives a solution that obeys the constraints of the problem
2. **Optimality**: the algorithm's solution is the best possible. Use either:
	1. [[Proof by Contradiction]]
		1. Let solution by greedy algorithm solution $A$.
		2. Assume there is a **more** optimal solution $O^*$
		3. Then derive a contradiction
	2. Exchange Argument
		1. Let solution by greedy algorithm solution $A$
		2. Assume there is a optimal solution $O^*$
		3. By exchanging individual elements which don't reduce optimality, slowly show $A$ is at least as good as $O^*$
	3. Staying Ahead
		1. At every stage of the greedy algorithm, show that it is at least as good as the optimal solution

Examples
- [[Scheduling Problem]]
- [[Minimal Spanning Tree Problem]]
