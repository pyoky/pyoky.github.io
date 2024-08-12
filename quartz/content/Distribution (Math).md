---
aliases:
  - PMF
tags:
  - Math/Probability
---

def. A **distribution** gives _comprehensive information about an experiment._ A distribution can be a table showing the probabilities of all outcomes, or a _probability density function._

> [!hint] You can also define a distribution using a [[Moment (Probability)|Moment Generating Function]]

def. let Ω be an **outcome space.** All functions $P(x)$ satisfying the following criteria are probability distributions.

**Criteria:**
1. $P(\emptyset)=0$ and $P(\Omega)=1$
2. For all $A\subseteq \Omega$, $0 \leq P(A) \leq 1$
3. If A and B are disjoint then $P(A\cup B)=P(A)+P(B)$

The 3rd condition can also be generalized for any distributions:

- If $A_1,…,A_n$ are pairwise disjoint, then $P(A_1\cup \cdots \cup A_n)=P(A_1)+…+P(A_n)$.

Remark. The distribution $P(A)=\frac{\#A}{\#\Omega}$ for countable, discrete outcome spaces follow the above axiom.

For a random variable $X \sim f(h)$ where h is the height of some population, the probability that $a<X<b$ is the shaded area:

![Untitled](Untitled%2027.png)

Calculated by: $P(a<X<b)=\int_{a}^{b}f(h)dh$

## Probability Mass Function

def. **Probability Mass Function.** For a discrete random variable $X$, the probability mass function is the function that gies the probability of all values of $X$.

$$
pmf(x)=\mathbb{P}(X=x)
$$

thm. Addition Rule for Random Variables. For a discrete random variable $X,$ the following is true:

$$
\mathbb{P}(a \leq X \leq b) = \sum_{k=a}^b \mathbb{P}(X=k)= \sum_{k=a}^b pmf(k)
$$

## Probability Density Function

def. **Probility Density Function**. $f_X(x)$ is a probility density function of random variable $X$ iff:

1. $\forall x, f_X(x)\geq 0$
2. $\forall x,\int_{-\infty}^\infty f_X(x)dx=1$
3. $\mathbb{P}(a\leq X \leq b)=\int_a^b f_X(x)dx$

def. **Cumilitave Density Function**. $F_X(t)$ is the cumulative density function of random variable $X$:

$$
F_X(t):=\int_
{-\infty}^t f_X(x)dx\\[1em]\equiv \mathbb{P}(X\leq t)
$$

if and only if:

1. $\forall t,F_X(t)\geq 0$
2. $F_X(t)$ is never decreasing over its domain
3. $\lim_{t \rightarrow\infty}F_X(t)=1$

> [!info]
 Relationship between $f_X(x)$ and $F_X(x)$ is a derivate and antiderivative.

> 
$$
> f_X(x)\xleftrightharpoons[\text{anti-derivative}]{\text{derivative}}F_X(x)
> 
$$
>
> Note that when you get $F_X(x)$ you will get a integration constant $C$. You can get rid of this by using the property $\lim_{t \rightarrow\infty}F_X(t)=1$.

- [[Joint Distributions]]
- [[Conditional Distribution]]

## List of Common Distributions

- [[Uniform Distribution]]
- [[Bernouilli Distribution]]
- [[Gamma Distribution]]
- [[Exponential Distribution]]
- [[Normal Distribution]]
- [[Student's T-Distribution]]
- [[Poisson Distribution]]
- [[Binomial Distribution]]
- [[Multinomial Distribution]]
- [[Hypergeometric Distribution]]
