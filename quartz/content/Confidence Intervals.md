---
aliases: []
tags:
  - Math/Statistics
---

## Simple Definition

> [!definition] Confidence Interval
> **Confidence Interval** of the parameter $\theta\in[f(X, \psi),g(X, \psi)]$ in the probability distribution of a random variable $X\sim \text{pdf}(\theta,\psi)$ is defined as the following:
>
> 
$$
> \text{C.I.}=\gamma := \mathbb{P}[f(X,\psi)\lt \theta \lt g(X,\psi)]
> 
$$
>
> - where functions $f(X), g(X)$ are able to be derived from the random variable $X$.

 The most common use of confidence interval problems is with CLT, where a parameter of a binomial distribution is estimated. e.g.:
let $X\sim \text{Binom}(n,p)$ where $p$ is the parameter to be estimated.

## Formal Definition

> [!definition] Confidence Interval.
> For $X_i$ distributed with an unknown parameter $\theta$, a $\gamma$-level confidence interval:
> - …is an interval in which **the probability of $\theta_0$ being in the interval** is $\gamma$ [$=1-\alpha$-level CI]
>   - think of $\gamma$ big is good, **$\alpha$ small is good.**
> - …is formalized as the following where $L,U$ is a statistic of $X$:
>
> 
$$
> P(L<\theta<U)=\gamma\\
> \Downarrow\\
> \frac{L+U}{2}\pm \frac{U-L}{2}\\
> \Downarrow\\
> \text{Confidence Interval}=[L,U]
> 
$$

> [!definition] **Observed Information**
> For:
>
> - $X_1\sim f(x;\theta)$
> - $X_1,…,X_n \overset{iid}\sim f(x;\theta)
$$X_1,…,X_n \overset{iid}\sim f(x_1,…,x_n;\theta)$,
>
> observed information is defined as:
>
> 
$$
> J(\theta)=-l''(X_i;\theta)\\[1.5em]
> J_n(\theta)=\sum_{i=1}^n-l''(X_i;\theta)
> 
$$

> [!hint]
This is [[Fisher Information]], but gathered on data ($X_i$)

thm. In general, if $\hat\theta_{\text{MLE}}$ can be found and the log-likelihood is twice-differentiable, an approximate CI of level $\gamma=1-\alpha$ can be **approximated** by:

$$
\hat\theta_\text{MLE}\pm \frac{z_{1-\frac{\alpha}{2}}}{\sqrt{J_n(\hat\theta)}}
$$

thm **Delta Method.** Let unknown paramter $\theta$ of r.v. $X_1,…,X_n$’s distribution. If Fisher’s approximation [=asymptotically efficient and asymptotically unbiased] conditions are satisfied, the following holds for all $g$ which $g’(\theta)\neq0$:

$$
\sqrt{n}(\hat g_\text{MLE}-g_0)\overset{n\rightarrow \infty}{\underset{d}\longrightarrow}\mathcal{N}(0,[g'(\theta)]^2\cdot \sigma^2)
$$

and due to Fisher’s Approximation (asymptotic normality):

$$
\sqrt{n}(\hat g_\text{MLE}-g_0)\overset{n\rightarrow \infty}{\underset{d}\longrightarrow}\mathcal{N}(0,\frac{g'(\theta_0)^2}{ \mathcal{I}(\theta_0)})
$$

> [!hint]
 To construct a standard normal distribution’s confidence interval of level $\gamma=1-\alpha$:

> 
$$
> P(z_\frac{\alpha}{2}<Z<z_{1-\frac{\alpha}{2}})=1-\alpha
> 
$$
