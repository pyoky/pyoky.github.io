---
aliases: []
tags:
  - Math/Common-Distributions
---

def. **Gamma Distribution.** In a Poisson Point Process with intensity $\lambda$, let $W_i$ be the “wait times” between the $i-1$ -th and $i\text{-th}$ event. let $X$ be the total “wait time” for $r$ events; i.e. $X=W_1+\cdots+W_r$. Then $X$ is distribued over Gamma:

$$
\begin{aligned}
X\sim \Gamma(r,\lambda)\\[.5em]
f_X(x)=

\begin{cases}
\lambda e^{-\lambda x}\frac{{(\lambda x)}^{r-1}}{(r-1)!}&x>0\\
1& \text{else}\\
\end{cases}

\\[.5em]
F_X(t)=1-\sum_{k=0}^{r-1}e^{-\lambda t}\frac{{(\lambda t)}^{k}}{k!}

\\
\mathbb{E}(X)=\frac{r}{\lambda}
~~~~~~~~~~~~~~~
\mathbb{SD}(X)=\frac{\sqrt{r}}{\lambda}
\end{aligned}
$$

> [!hint]
  Gamma Distribution also follows the [[Central Limit Theorem]]. Thus $\lim_{r\rightarrow \infty}X\sim \text{Normal}$
