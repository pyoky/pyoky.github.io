---
aliases: []
tags:
  - Math/Common-Distributions
---

def. Multinomial Distribution. For outcome space $\Omega$, $k$ mutually exclusive events each with probabilities $p_1,…,p_k$ s.t. $\sum_{i=1}^k p_i=1$, let random variables $X_i$ denote the number of outcomes whose probability is $p_i$, when $n$ trials are done:

$$
X_1,...,X_k\sim \text{Multinomial}(n,k,p_1,...,p_k)
 \\[1em]P(X_1=x_1,...,X_k=x_k)=\frac{n!}{x_1!,...,x_k!}\cdot p_1^{x_1}\times\cdots\times p_k^{x_k}
$$

⇒ Multinomial is a generalization of the [[Binomial Distribution]].
