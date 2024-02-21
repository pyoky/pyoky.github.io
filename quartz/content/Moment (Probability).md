---
aliases: []
tags:
  - Math/Statistics
---

→ An alternative way to get an estimator quick and dirty.

## Method of Moments

alg. **Method of Moments** (MOM):

let $X_1,…,X_n \overset{iid}\sim f(x; \theta_1,…,\theta_p)$. Then to get estimators for $\theta_1,…,\theta_p$:

1. let $\mu_i=E[X^i]=g_i(\theta_1,…,\theta_n)$
2. gather data on $\bar X^i$ to get an emperical estimate $m_i$

Observe that because $E[X^i]\approx\bar X^i$, this means that $\mu_i\approx m_i$

1. let function $g_i$ which maps $\theta_1,…,\theta_n \overset{g_i}\mapsto m_i$ can be inverted
2. Get system of equations for as many $i$’s as necessary
3. Solve the system of equations as $\hat\theta_i=g_i^{-1}(m_1,…)$

> [!info] Limitations on MoM:

- Estimators may not make sense (negative numbers, complex number, etc.)
- Illegal

def. **Moment Generating Functions**

(**alternative specification of pdf**. Makes it easy to calculate things.)

Moment generating functions are defined as such:

$$
M_X(t)=E[\exp(tX)]
$$

…where $M_X$ is **differentiable $k$-times around _zero_** to be able to generate the $k$-th moment.

You can build an MGF from a [[Distribution (Math)|pmf]] of pdf:

- for pmfs: $M_X(t)=\sum_{}^{}e^{tx_i}p(x_i)$
- for pdfs: $M_X(t)=\int_{-\infty}^{\infty}e^{tx}f(x)dx$

It can generate the $k$-th moment like such:

$$
E(X^k)=\frac{\partial^k}{\partial x^k}M_X(0)=M^{(k)}_X(0)
$$

> [!info] MGFs are unique to each distribution. If an RV has the same MGF, they are distributed identically.

thm. **Linear Combination of MGFs**. Given r.v. $W=X_1,…,X_n$, and $X_i$ are iid,:

$$
M_W(t)=M_{X_1}\cdot M_{X_2}\cdots M_{X_n}
$$
