---
aliases:
  - Lattice Multiplication
tags:
  - Computing/Algorithms
---

alg. **Long Multiplication.** (grade school) algorithm
- Complexity: Time $O(n^2)$.

alg. **Karatsuba Multiplication**. Recursive algorithm to compute
- Idea: To get $x \times y$…
	1. Let $a,b,c,d$ be digits of $x=\bar{ab},y=\bar{cd}$, and observe:
		1. $x=10^{n / 2}a+b$
		2. $y=10^{n / 2}c+d$
	2. $x \times y=10^n ac + 10^{n / 2}(ad+bc)+ bd$
		1. Recurse Compute $a\times c$ …(1)
		2. Recurse Compute $b\times d$ …(2)
		3. To compute the middle term, instead of computing $a \times d, b \times c$ we do:
			1. Recursively compute $(a+b)(c+d)=ac+ad+bc+bd$ …(3)
			2. (3) subtract (1) and (2) to get middle term $ad+bc$
	- See [Karatsuba Multiplication in 13 min - YouTube](https://www.youtube.com/watch?v=JCbZayFr9RE)
- Complexity
	- Time: $O(n^{\\log _{2}3} \approx n^{1.58})$
	- Span: $T_{\infty}(n)=O(n)$ (by parallelzing all 3 recursive calls)

alg. **Lattice Multiplication.** Developed for longer integer hand-calculation.
