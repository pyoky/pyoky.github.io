---
aliases:
  - DP
tags:
  - Computing/Algorithms
---
> [!warning] The name "Dynamic Programming" is a misnomer.

> [!quote] Motto of Dynamic Programming
> ![[Dynamic Programming.png]]

Dynamic Programming (DP) is a algorithm design paradigm that includes the following features:
1. Algorithms are recursive
2. There are overlapping recursive subproblems
3. Memoization can be used to reduce re-solving overlapping subproblems
4. You can also write an iterative solution which can be easier to analyze

> [!tldr] Think of DP as a "filling in a table" problem

To devise a DP solution to a problem, you must
- Understand which subproblems overlap
	- Recursion trees help in identifying overlap
- Understand the subproblem dependencies (which subproblems to solve first)
	- How to break ties (e.g. minimum or maximum of two dependencies)
- Choose which order to iterate
	- Iterate from $i=0..n,j=0..n$
		- [[Knapsack Problem]], [[Path Alignment]]
	- Iterate for increasing $\text{gap}=j-i$ from $\text{gap}=0..n$
		- [[Matrix Chain Multiplication]], [[Longest Palindromic Substring]]
	- Iterate on all notes of a [[tree]], where the data is stored in the tree node itself.
		- [[Vertex Cover and Minimum Independent Set]]
