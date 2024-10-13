---
aliases: []
tags:
  - Math/Statistics
---

def. Cramer-Rao Lower Bound. Given *unbaised* estimator $\hat\theta$,
$$
\text{Var}(\hat\theta)\geq \frac{1}{\mathcal{I}(\theta)}
$$
thm. *There is no other unbiased estimator that has lower preceision than the CRLB.*
- Thus CRLB is a statement about the bound on the **best possible precision [=efficiency]** we can get for unbiased estimators.
- If an estimator reaches the CRLB, it is deemed **most efficient**.

thm. Cramer-Rao Lower Bount for Biased Estimators. If $\hat{\theta}$ has a 
$$
\text{If:}~~E[\hat\theta]=g(\theta)\\[1em]\Rightarrow \text{Var}(\hat\theta)\geq \frac{g'(\theta)}{\mathcal{I}(\theta)}
$$
