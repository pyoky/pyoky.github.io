---
aliases: []
tags:
  - Computing/Algorithms
---
def. **Approximation Factor.** $\alpha(n)$-level approximation. For optimization problem $\pi$, $ALG$ is a $\alpha$-level optimization algorithm iff for input $I$ of size $n$:

$$
max\left[ \frac{ALG(I)}{OPT(I)},\frac{OPT(I)}{ALG(I)} \right]=\alpha(n)
$$

- Smaller is better!
- Constant approximation factor: if approximation factor doesn't depend on $n$, $ALG$ is a constant $\alpha$-level approximation
