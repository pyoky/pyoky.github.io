---
aliases: []
tags:
  - Math/Common-Distributions
---

## Uniform Distribution

def. **Uniform Distribution**. $X$ has uniform distribution of it has a uniform density on interval $(a,b)$:

$$
\begin{aligned}
X\sim \text{Unif(a,b)}\\[.5em]
f_X(x)=\begin{cases}
\frac{1}{b-a}&x\in(a,b)\\
0&\text{else}

\end{cases}\\[.5em]
F_X(t)=\int_{-\infty}^t f_X(x)dx=
\begin{cases}
\frac{t-a}{b-a}&t\in(a,b)\\
1&t>b\\
0&t<a

\end{cases}

\\

\end{aligned}
$$

$$
\mathbb{E}(X)=\frac{a+b}{2}~~~~~~~
\mathbb{SD}(X)=\frac{b-a}{2\sqrt{3}}
$$

## Estimators

let

- $X\sim \text{Unif}(a,b)$
- $X_1,…,X_n\overset{iid}\sim \text{Unif}(a,b)$

Log likelihood:

$$
\ln \mathcal{L}_n(a,b|x_1,...,x_n)=\ln \frac{1}{(b-a)^n}
$$

score:

$$
s_n(a)=\frac{n}{b-a}
$$

$$
s_n(b)=\frac{-n}{b-a}
$$

MLEs:

$$
\hat a_\text{MLE}=\text{min}(X_1,...,X_n)
$$

$$
\hat b_\text{MLE}=\text{max}(X_1,...,X_n)
$$
