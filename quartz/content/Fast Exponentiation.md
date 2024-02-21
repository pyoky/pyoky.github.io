---
aliases:
  - Binary Exponentiation
tags:
  - Computing/Algorithms
---

Observation:

$$
x^{n}={\begin{cases}x\,(x^{2})^{(n-1)/2},&{\mbox{if }}n{\mbox{ is odd}}\\(x^{2})^{n/2},&{\mbox{if }}n{\mbox{ is even}}\end{cases}}
$$

Thus we can achieve $O(\log n)$ multiplications.
