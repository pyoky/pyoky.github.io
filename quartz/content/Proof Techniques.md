---
aliases: []
tags:
  - Math
---
- [[Mathematical Induction]] 
- By Contradiction
- By Contrapositive


Algebraic
- You can split summations (even infinite ones)
- $\prod_{i} e^{ X_{i} }=e^{ \sum_{i} X_{i} }$
- Equivalently, $\ln\left( \prod_{i}X_{i} \right)=\sum_{i}(\ln X_{i})$ <span style="float:right;">Pushing log thru product makes it a sum</span>
- Telescoping sums and products
- Break up summations $\sum_{\forall i}=\sum_{i\leq k}+\sum_{i>k}$
- Summation of Squared $\sum_{\forall_{i}}(a_{i}+b_{i})^{2}=\sum a^{2}+\sum b^{2}+\underbrace{ \sum_{i\neq j}a_ib_{i} }_{\sum_{i<j}2a_ib_{i}  }$

Probability
- Tower property $\mathbb{E}(X)=\mathbb{E}(\mathbb{E}(X|\mathcal{F}))$
- Linearity of expectation. You can switch expectation and summation
- Definition of expectation is an integral (or summation)
- Two RVs are identical if they have the same CDF.[^1]
- 

Calculus
- $\int_{x}\int_{y}  \, dy  \, dx=\int_{y}\int_{x}  \, dx  \, dy$ switch integrals

Inequalities
- Sum greater than max
- Max greater than averages 
- Average greater than min.
Combined:
$$\underbrace{ \sum_{i=1}^n x_{i} }_\text{ sum }\geq\text{max}(x_{1},\dots,x_{n})\geq \underbrace{ \frac{1}{n}\sum_{i=1}^nx_{i} }_\text{ average }\geq \text{min}(x_{1},\dots,x_{n})
$$

$\ln(1-x)\leq-x$ always.

[^1]: Why CDF? [statistics - Why is there a preference to use the cumulative distribution function to characterise a random variable instead of the probability density function? - Mathematics Stack Exchange](https://math.stackexchange.com/a/3473850)