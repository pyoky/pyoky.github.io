---
aliases: []
tags:
  - Math/Statistics
---

def. **Consisteny**. An estimator $\hat\theta(X_1,…,X_n)$ is consistent for parameter $\theta$ if:

$$
\forall \epsilon>0,~~\hat\theta
~~
\overset{n\rightarrow\infty}{\underset{p}\longrightarrow}
~~\theta
\\\text{i.e.}\\[0.5em]
\lim_{n\rightarrow\infty}P(|\hat\theta-\theta|<\epsilon)=1\\
\lim_{n\rightarrow\infty}P(|\hat\theta-\theta|>\epsilon)=0
$$

![[スクリーンショット 2023-02-21 15.40.01.png|center|250]]

def. **Asymptotic Unbiasedness.** An estimator $\hat\theta$ is asymptotically unbiased if:

$$
E[\hat\theta_n]\overset{n\rightarrow\infty}\longrightarrow~\theta
$$

_Remark._ You can use the [[Chebyshev's Inequality]] for determining Consistency.
