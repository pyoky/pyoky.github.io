---
aliases: []
tags:
  - Math/Statistics
---

thm. Cramer-Rao lower bound. Given estimator $\hat\theta$,

$$
\text{If:}~~E[\hat\theta]=g(\theta)\\[1em]\Rightarrow \text{Var}(\hat\theta)\geq \frac{g'(\theta)}{\mathcal{I}(\theta)}
$$

If estimator $\hat\theta$ is _unbiased_:

$$
\text{Var}(\hat\theta)\geq \frac{1}{\mathcal{I}(\theta)}
$$

⇒ CRLB is a statement about the bound on the **best possible precision [=efficiency]** we can get.

→ If an estimator reaches the CRLB, it is deemed **most efficient**.
