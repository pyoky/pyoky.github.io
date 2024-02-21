---
aliases: []
tags:
  - Math/Probability
---

thm. A **[[Normal Distribution]]** with $\mu=np, \, \sigma=\sqrt{np(1-p)}$ will approximate a Binomial distribution with $n$ trials and success probability $p$ when $np>1$

$$
\mathbb{P}(a\leq X\leq b) =\sum_{k=a}^{b}P(X=k)\simeq \int_a^b f_\text{normal}(\mu=np, \, \sigma=\sqrt{np(1-p)})dx
$$

REMARK. A [[Normal Distribution]] is equivalent to the following standard normal distribution:

$$
\int_{a-0.5}^{b+0.5} \text{Normal}(\mu, \sigma)dx =\int_{a+0.5}^{b+0.5}\frac{e^{-\frac{1}{2}(\frac{x-\mu}{\sigma})^2}}{\sigma \sqrt{2\pi}}dx\\[2em]= \int_{\frac{a-0.5-\mu}{\sigma}}^{\frac{b+0.5-\mu}{\sigma}}\text{Normal}(0,1)du =\int_{\frac{a-0.5-\mu}{\sigma}}^{\frac{b+0.5-\mu}{\sigma}} \frac{e^{-x^2/2}}{\sqrt{2\pi}}dx
$$

where the factor of $+0.5$ to the integrand’s range is the continuity correction.

thm. A **[[Poisson Distribution]]** with parameters $\lambda=np$ will approximate a Binomial distribution with $n$ trials and success probability $p$ when $np\leq 1$.

$$
X\sim \text{B}(n,p)\Rightarrow \mathbb{P}(X=k)=\frac{\lambda^k e^{-\lambda}}{k!}=\frac{(np)^k e^{-(np)}}{k!}
$$

thm. A Binomial Distrubition with parameters $p=\frac{K}{N}$ will approxmiate a Hypergeometric Distribution when $N>> n$

$$
\begin{align}
X\sim \text{Binomial}(n,p) \\ \Downarrow \\ \mathbb{P}(X=k)\simeq{n \choose k}(\frac{K}{N})^k (\frac{N-K}{N})^{n-k}
\end{align}
$$

$$
x_{1}\times x_{2} \int f(x_{1},x_{2}) \, dx 
$$
