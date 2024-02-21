---
aliases: []
tags:
  - Math/Common-Distributions
---

def. **Exponential Distribution.** $X$ has exponential distribution with intensity $\lambda$:

$$
\begin{aligned}
X\sim \text{Exp}(\lambda)\\[.5em]
f_X(x)=\begin{cases}
\lambda e^{-\lambda x}&x>0\\
0&\text{else}

\end{cases}\\[1.4em]
F_X(t)=
1-e^{-\lambda t}

\\[1em]
\mathbb{E}(X)=\frac{1}{\lambda}
~~~~~~~~~~~\mathbb{SD}(X)=\frac{1}{\lambda}
\end{aligned}
$$

- The exponential distribution is useful when modeling wait time $X$ in a call center, with “business” of $\lambda$ (e.g. “on average $\lambda$ calls per hour”).
- Be careful that $\lambda$ is the number of events in timespan, not the average time it takes between events.
