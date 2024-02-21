---
aliases:
  - Effective Method
  - Computable Function
tags:
  - Computing
  - Math
---
Loose definition

> [!definition]
> An algorithm…
> - finishes in finite number of steps
> - its answer is consistent
> - it always gives the correct answer

## Algorithm Design Principles

1. Design
	- What to compute
	- How it computes what we want it to compute
2. Correctness
	- Why does it compute what we want it to compute
3. Analysis & Efficiency
	- How much resources does it use? ([[Complexity]])

Most algorithms follow the following two **standard models of computation**
1. Recursion
2. Iteration

## Verifying Correctness

> [!warning]
> There is no way to find out if an algorithm is correct.

1. [[Mathematical Proof]]
	- Direct Proof
		- [[Mathematical Induction]]
			- ⇒ Recursive algorithms looks similar to proof by induction
	- Indirect Proof \[=[[Proof by contradiction]]]
2. [[Testing Principle|Test experimentally]]
