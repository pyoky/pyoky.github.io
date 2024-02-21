---
aliases: []
tags:
  - Math/Probability
---
def. **Variance** of a random variable X:

$$
\text{Var}[X]=\mathbb{E}[(X-\mu)^2]
= {\color{red}\mathbb{E}(X^2)-[E(X)]^2}
$$

$$
\text{Var}(X):=\mathbb{E}((X-\mu)^2)\equiv\int_{-\infty}^\infty (x-\mu)^2f_X(x)dx =\mathbb{E}(X^2)-[\mathbb{E}(X)]^2
$$

thm. (**Variance Identities.**)

- For a single random variable $X$ and constant $n$
	- $\text{Var}(n\cdot X)=n^2 \cdot \text{Var}(X)$ <span style="float:right;">Quadratic Scaling</span>
	- $\text{Var}(X+n)=\text{Var}(X)$ <span style="float:right;">Translation Invariance</span>
- For any two random variables $X, Y$:
	- $\text{Var}(X+Y)=\text{Var}(X)+\text{Var}(Y)+2\cdot \mathbb{E}[(X-\mu_x)(Y-\mu_y)]$
- …if $X \perp Y$ (i.e. two are independent:
	- $\text{Var}(X+Y)=\text{Var}(X)+\text{Var}(Y)$
- ….if Independent and Identically distributed _(i.i.d)_ random variables $I_1,…,I_n$
	- $\text{Var}(I_1+\cdots+I_n)=n\cdot \text{Var}(I_i)$

See also [[Covariance & Correlation]].

def. **Standard Deviation** of a random variable is:

$$
\text{SD}(X):=\sqrt{\text{Var}(X)}=\sqrt{\mathbb{E}(X^2)-[E(X)]^2}
$$

- From the properties of variance we have $\text{SD}(aX+b)=|a|\text{SD}(X)+b$
## Standardization.

**Motivation.** Sometimes it's nice to have random variables to have $\mathbb{E}(X)=0$ and $\text{Var}(X)=0$. Using translation invariance and quadratic scaling we can take any random variable and standardize it.

thm. (**Standardization**) For random variable $X$ with $\mathbb{E}(X)=\mu$ and $\text{Var}(X)=\sigma^2$,
$$
Y=\frac{X-\mu}{\sigma}
$$
- Its expected value (mean) is 0; i.e. $\mathbb{E}(Y)=0$
- Its standard deviation is 1; i.e. $\sqrt{ \text{Var}(Y) }=1$
