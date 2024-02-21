---
aliases: []
tags:
  - Math/Statistics
---

> thm. **Chebyshev’s Inequality**. let $X$ s.t. $E[X]=\mu$, $\text{Var}[X]=\sigma^2$ where $\sigma$ is not infinite. Then:

$$
 

\forall \epsilon>0,\\P(|X-\mu|>\epsilon)\leq \frac{\sigma^2}{\epsilon}
$$

- Intuitively, it means that “only few” data points are “far away” from the mean for any “reasonable” distribution:
	- “only few”: “$\leq \frac{\sigma^2}{\epsilon}$”
	- “far away”: “$|X-\mu|>\epsilon$”
	- “reasonable”: $\sigma$ is not infinite.
