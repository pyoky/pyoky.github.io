---
aliases:
  - CLT
tags:
  - Math/Probability
---

> [!hint] Intuition: Selecting from a box of 1 to 10,
>
> ![Untitled](Untitled%202%208.png)
>
> As the sample size ($n$) increases, observe the following:
>
> 1. $\mu$ is constant
> 2. $\text{Var}$ is increasing
> 3. The distribution apporoaches a _bell curve_
>

thm. **Law of Averages** (=Law of Large Numbers) let $X_1,…,X_n$ be random variables that are _i.i.d._ If $E(X)=\mu$, and $\bar X_n=\frac{X_1+\cdots+X_n}{n}$ then for any small value of $\epsilon$:

$$
\lim_{n\rightarrow\infty}[ \mathbb{P}(|X-\mu|<\epsilon)]=1
$$

![Untitled|450](Untitled%203%206.png)

thm. **Central Limit Theorem** (for averages) let $X_1,…,X_n$ be random variables that are _i.i.d._ If $E(X)=\mu$, $\text{SD}(X)=\sigma$ and $\bar X_n=\frac{\sum X_{i}}{n}$ then for a big value of $n$:

$$
\bar X_n\sim \text{Normal}(\mu,\frac{\sigma^2}{n})
$$

∵ for $\bar X_n$ where $n$ is just a constant

- Mean: $\mathbb{E}(\bar X_n)=\mathbb{E}(\frac{X_1+\cdots+X_n}{n})=\frac{1}{n}\cdot n\cdot \mathbb{E}(X_i)=\mu$
- Variance: $\text{Var}(\bar X_n)=\text{Var}(\frac{X_1+\cdots+X_n}{n})=\frac{1}{n^2}\cdot n\cdot\text{Var}(X_i)=\frac{\sigma^2}{n}$
- Std. Dev: $\text{SD}(\bar X_n)=\sqrt{\text{Var}(\bar X_n)}=\frac{\sigma}{\sqrt{n}}$

thm. **Central Limit Theorem** (for sums) let $X_1,…,X_n$ be random variables that are _i.i.d._ If $E(X)=\mu$, $\text{SD}(X)=\sigma$ and $S_n=X_1+\cdots+X_n$ then for a big $n$:

$$
\bar S_n\sim \text{Normal}(n\mu,n\sigma^2)
$$

∵ for $S_n$ where $n$ is just a constant
- Mean: $\mathbb{E}(S_n)=\mathbb{E}(X_1+\cdots+X_n)=n\cdot \mathbb{E}(X_i)=n\mu$
- Variance: $\text{Var}(S_n)=\text{Var}(X_1+\cdots+X_n)=n\cdot\text{Var}(X_i)=n\sigma^2$
- Std. Dev: $\text{SD}(S_n)=\sqrt{\text{Var}(S_n)}=\sqrt{n}\cdot \sigma$

> [!summary]
> To Summarize, for a big enough value of $n$, and $\bar X_n$ the average and $S_n$ the sum:
>

$$
\mathbb{P}(a<\bar X_n < b)\simeq
\int_a^b \text{Normal}[\mu,\frac{\sigma}{n^2}]
=\int_\frac{a-\mu}{\sigma/\sqrt{n}}^\frac{a-\mu}{\sigma/\sqrt{n}}\text{Normal[0,1]}=\Phi(\frac{b-\mu}{\sigma/\sqrt{n}})-\Phi(\frac{a-\mu}{\sigma/\sqrt{n}})\\
\mathbb{P}(a<S_n < b)\simeq
\int_a^b \text{Normal}[n\mu,n\sigma^2]
=\int_\frac{a-n\mu}{\sqrt{n}\sigma}^\frac{b-n\mu}{\sqrt{n}\sigma}\text{Normal[0,1]}=\Phi(\frac{b-n\mu}{\sqrt{n}\sigma})-\Phi(\frac{a-n\mu}{\sqrt{n}\sigma})
$$

rmk. **Binomal Approximtion using Normal Distribution**. let the following:
- $X\sim \text{Binom}[n,p]$
- Indicator functions s.t. $X=I_1+\cdots+I_n$ where $I_i$ defines the $i$-th event is successful.
  Note that $I_1,…,I_n$ are all _i.i.d._
then…
- $\mathbb{E}(I_i)=p$
- $\text{Var}(I_i)=\mathbb{E}(I_i^2)-[\mathbb{E}(I_i)]^2=\mathbb{E}(I_i)-p^2=p-p^2$
  ($\because \forall I=\text{Indicator, }\, \mathbb{E}(I^2)=\mathbb{E(I)}$)
- For a large enough $n$, $X\sim \text{Normal}[np,np(1-p)]$
  ($\because I_1,…,I_n$ are i.i.d., see the _additional rule_ for expectated value and variance)

## Lindenberg CLT

thm. Lindenberg Central Limit Theorem. Given random variables $X_{1}\dots X_{n}$, with each $E(X_{k})=\mu_{k}$, $Var(X_{k})=\sigma_{k}^2$and the following conditions:
1. They are independent (No need to be identically distributed)
2. $\lim_{ n \to \infty } \frac{1}{\sum \sigma_{k}^2}E\big((X_{k}-\mu_{k})^2 \mathbb{1}_{|X_{k}-\mu_{k}> \epsilon \sum \sigma^2_{k} } \big)$ i.e. variance is not too big
⇒ Then

$$
\frac{\sum_{k=1}^n(X_{k}-\mu_{k})}{\sqrt{\sum_{k=1}^n \sigma_{k}^2}} \longrightarrow^d_{n\to \infty}N(0,1)
$$
