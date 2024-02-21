---
aliases:
  - Gaussian Distribution
tags:
  - Math/Common-Distributions
---
def. **Normal Distribution.** A random variable $X$ distributed over a Normal distribution with mean $\mu$ and standard deviation $\sigma$ is denoted:

$$
\begin{aligned}
X &\sim \text{Normal}(\mu,\sigma)\\
f_X(x)&=\frac{1}{\sigma\sqrt{2\pi}}
 \cdot e^{ -\frac{1}{2}(\frac{x-\mu}{\sigma})^2}\\[1em]

P(a<X<b)&=\int_a^b\frac{1}{\sigma\sqrt{2\pi}}
 \cdot e^{ -\frac{1}{2}(\frac{x-\mu}{\sigma})^2}dx\\
\end{aligned}
$$

def. **Cumulative Distribution Function (CDF)** of a [[Normal Distribution]]

$$
\Phi(z):=\int_{-\infty}^z \frac{e^{-t^2/2}}{\sqrt{2\pi}}dt
$$

Observe:
- $z \rightarrow +\infty, \Phi(z) \rightarrow1$
- $z \rightarrow -\infty, \Phi(z) \rightarrow0$
- $\Phi(-z)=1-\Phi(z)$

def. **Standard Normal Distribution.** A standard normal distribution is a normal distribution where $\mu=0,\, \sigma=1$

$$
X \sim \text{Normal}_{std.}(0,1)
$$

> [!hint]
> You can [[Approximating Distributions|approximate a bunch of distributions]] using the Normal.

rmk. **Linear Transformation of Normal Distribution.** If $X\sim \text{N}[\mu,\sigma^2]$, then
- $\mathbb{E}(aX+b)=a \mathbb{E}(X)+b=a\mu +b$
- $\text{Var}(aX+b)=a^2 \text{Var}(X)=a^2\sigma^2$
- - ⇒ Thus $(aX+b)\sim \text{Normal}(a\mu+b,\,a^2\sigma^2)$

remark. Exponentiating Transformation of Normal Distribution. If $X \sim N(\mu,\sigma^2)$
$$
E[e^{ X }]=e^{ \mu+\frac{\sigma^2}{2} }
$$
(using Law of Unconscious Statistician)

rmk. **Standardizing the Normal Distribution.** Given $X\sim N(\mu,\sigma^2)$:
- $Y=\frac{X-\mu}{\sigma}$ has the standard normal distribution
- The pdf is as follows:

$$
P(a<X<b)=\int_a^b\frac{1}{\sigma\sqrt{2\pi}}
 \cdot e^{ -\frac{1}{2}(\frac{x-\mu}{\sigma})^2}dx~~~
\Rightarrow ~~~\int_{\frac{a-\mu}{\sigma}}^{\frac{b-\mu}{\sigma}}\frac{e^{ -x^2/2}}{\sigma\sqrt{2\pi}}
 dz
$$

- See also [[Standardizing a Random Variable]]

rmk. **Empirical Rule**: Rule of thumb for calculating probabilities (integrals) of normal distributions
- ! Generalized version: [[Chebyshev's Inequality]]
- 1 std. dev. away is $\approx66\%$; 2 std.dev. away is $\approx0.95\%$![[Untitled 26.png|273]]

## Estimators

let
- $X\sim \mathcal{N}(\mu,\sigma^2)$
- $X_1,…,X_n\overset{iid}\sim \mathcal{N}(\mu,\sigma^2)$
⇒ Log likelihood:

$$
\ln \mathcal{L}_n(\mu,\sigma^2|x_1,...,x_n)=-\frac{n}{2}\ln(2\pi)-\frac{n}{2}\ln(\sigma^2)-\frac{1}{2\sigma^2} \sum_{i=1}^n(x_i-\mu)^2
$$

### Score

|                        One R.V.                         |                               Multiple Data                               |
|:-----------------------------------------------------: |:-----------------------------------------------------------------------: |
|             $s(\mu)=\frac{x-\mu}{\sigma^2}$             |             $s_n(\mu)=\frac{n\mu-\sum_{i=1}^nx_i}{\sigma^2}$              |
| $s(\sigma)=\frac{(x-\mu)^2}{\sigma^3}-\frac{1}{\sigma}$ | $s_n(\sigma)=\frac{\sum_{i=1}^{n}(x_i-\mu)^2}{\sigma^3}-\frac{n}{\sigma}$ |

### MLEs

$$
\hat\mu=\frac{1}{n}\sum_{i=1}^nx_i
$$

$$
\hat \sigma^2=\frac{1}{n}\sum_{i=1}^n(x_i-\bar x)^2
$$

### Fisher Information
- Unknown $\mu$, known $\sigma^2$

$$
I(\mu)=\frac{1}{\sigma^2}\\[1em]I_n(\mu)=\frac{n}{\sigma^2}
$$

- Known $\mu$ unknown $\sigma^2$

$$
I(\sigma^2)=\frac{1}{2\sigma^2}\\[1em]

I_n(\sigma^2)=\frac{n}{2\sigma^2}
$$
