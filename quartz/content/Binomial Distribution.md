---
aliases: []
tags:
  - Math/Common-Distributions
---

## Binomial Distribution

def. **Binomial Distribution.** For random variable $X$ which denotes the number of successes within $n$ trials with success probability $p$:

$$
\begin{aligned}
X &\sim \text{Binom}(n,p)\\

P(X=k)&={n\choose k}\cdot p^k\cdot (1-p)^{n-k}
\end{aligned}
$$

- $E[X]=np$
- $Var[X]=n\cdot p(1-p)$
