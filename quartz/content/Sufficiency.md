---
origins: 
tags:
  - Math/Statistics
aliases:
  - sufficient
created: 2023-07-25T11:51
updated: 2023-09-10T18:57
---

Recall [[Exponential Family]]

## Sufficiency

def. let statistic $T=T(\vec X)$; and $X_i$ depends on unknown parameter $\theta$. Then $T$ is a _sufficient_ statistic for $\theta$ if $\mathbb{P}[\vec X=\vec x|T=t]$ does not depend on $\theta$.

> [!info]
> If the distribution of $X_i$’s depends on unknown parameter $\theta$, but the distribution of $X_i$ given $T=t$ does not depend on $\theta$, it must be the case that all information about $\theta$ is in $T$. Once the value of $T$ is given, then $\theta$ becomes irrelevant in determining the value of $X$.

> [!info]
> There’s only one minimally sufficient statistic, and all other sufficient staistics are a function of this.

thm. **Fischer-Neymann factorization.** $T$ is a sufficient statistic iff:

$$
f_{X}(X= x|\theta)=u(X)\cdot v (T(X),\theta)
$$

i.e. the joint density function can be factored into a a function of $u,v$ where:

- $u(\vec X)$ does _not_ depend on $\theta$
- $v(T(\vec X),\theta)$ depends on $\theta$, and depend on $\vec X$ only through statistic $T$
  ⇒ Intuitively, this means when

> [!info]
> Very convenient for determining if statistic is sufficient or not.

lem 1. let $\hat\theta_1$ an estimator for $\theta$ and $T$ a sufficient statistic for $\theta$

then $\hat\theta_2 =\mathbb{E}[\hat\theta_1 |T]$ is also a sufficient estimator.

thm. **Rao-Blackwell theorem.** Continuing from above,

$\mathbb{MSE}[\hat\theta_2]\leq \mathbb{MSE}[\hat\theta_1]$

> [!info]
> i.e. if you throw more data into a statistic, it often becomes a better statistic.

- In the exponential family of distributions, you can mostly do **one** iteration of Rao-Blackwell algorithm to get a pretty good estimator.
  - Bias of $\hat\theta$ and Bias of Rao-Blackwellized $\mathbb{E}\Big[\hat \theta|T=t\Big]$ is the same
- If $T$ is a minimally sufficient statistic, $\mathbb{E}\Big[\hat \theta|T=t\Big]$ is the best you will do
