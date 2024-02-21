---
aliases: []
tags:
  - Math/Common-Distributions
---

def. **Hypergeometric Distribution**. Describes probabilities with successive draws _without_ replacement. In a population of $N$ with $K$ members containing the feature, among $n$ trials the probability of drawing $k$ with the feature is:

$$
\begin{aligned}
X&\sim Hypergeometric[N,K,n]\\[0.5em] \mathbb{P}(X=k)&={n \choose k} \frac{K_k (N-K)_{n-k}}{N_n}\\[1.2em]
&=\frac{{K \choose k}{N-K \choose n-k}}{N \choose n}

\end{aligned}
$$

**def. Geometric Distribution.** let $X$ s.t. $\text{Range}(X)=\mathbb{N}$, where $X$ is the number of _trials_ until the first success, and success probability is $p$. $X$ is Geometrically p-Distributed:

$$
X\sim \text{Geom}(p)\\[1em]
\mathbb{P}(X=k)=p(1-p)^{k-1}
$$

- where $X$ is the number of total trials and $p$ is the probability of an event—normally, geometric distributions are used to model the number of successful events before a failure.
- e.g. the number of basketball free throws until a _failure_
- $\mathbb{E}(X)=\frac{1}{p}$
- $\mathbb{SD}(X)=\frac{\sqrt{1-p}}{p}$

> [!info]
 $Y=X-1$ is also a geometric distribution; the number of _failures_ before a success.

> 
$$
> Y\sim \text{Geom}(p)\\[0.5em]
> \mathbb{P}(Y=k)=p(1-p)^{k}
> 
$$

def. **Negative Binomial Distribution.** let $X$ describe the number of **successes** with probability $p$ before $r$ failures. $X$ is a Negative Binomal Distribution where:

$$
X \sim \text{NegBinom}(r,p)\\[1em]
\mathbb{P}(X=k)={k+r-1\choose k}(1-p)^r p^k
$$

- $\mathbb{E}(X)=\frac{pr}{1-p}$
- $\mathbb{SD}(X)=\frac{\sqrt{pr}}{1-p}$
