---
aliases: []
tags:
  - Computing/Algorithms
---

## Table of Common Recurrence Relations

| Recurrence           | Algorithm               | Solution                  |
| -------------------- | ----------------------  | ------------------------- |
| $T(n) = T(\frac{n}{2}) + O(1)$ | binary search          | $O(\log n)$              |
| $T(n) = T(n - 1) + O(1)$       | sequential search      | $O(n)$                   |
| $T(n) = 2T(\frac{n}{2}) + O(1)$| tree traversal         | $O(n)$                   |
| $T(n) = T(\frac{n}{2}) + O(n)$ | quick select           | $O(n)$                   |
| $T(n) = 2T(\frac{n}{2}) + O(n)$| mergesort, quicksort   | $O(n \log n)$            |
| $T(n) = T(n - 1) + O(n)$       | Insertion or selection sort | $O(n^2)$         |

## Quick Bits

- $T(n)\leq T\left(a\cdot n \right)+T(b \cdot n)+cn$ where $a+b <1$ is almost always $O(n)$.

## Master Theorem

See [Master theorem (analysis of algorithms) - Wikiwand](https://www.wikiwand.com/en/Master_theorem_(analysis_of_algorithms)#Generic_form)
⇒ Can be used to solve [[most]] recurrence relations.

First, Identify the recurrence relation in the following form

$$
T(n)={\color{red}a} \cdot T\left( \frac{n}{{\color{red}b}} \right)+O(n^{\color{red}c}\log^{\color{blue}k}n)
$$

Consider three casesp
- Case 1: $\log_{b}a < c$
	- ⇒ $T(n)=\Theta(n^{\color{red}c})$
- Case 2: $\log_{b}a=c$
	- ⇒ $T(n)=\Theta(n^{\color{red}c}\log^{\color{blue}k+1}n)$
- Case 3: $\log_{b}a>c$
	- ⇒ $T(n)=\Theta(n^{\color{red}c}\log^{\color{blue}k}n)$

## Recurrence Tree
