---
aliases: []
tags:
  - Math
---
Algebraic
- You can split summations (even infinite ones)
- $\prod_{i} e^{ X_{i} }=e^{ \sum_{i} X_{i} }$
- Equivalently, $\ln\left( \prod_{i}X_{i} \right)=\sum_{i}(\ln X_{i})$ <span style="float:right;">Pushing log thru product makes it a sum</span>
- Telescoping sums and products

Probability
- Tower property $\mathbb{E}(X)=\mathbb{E}(\mathbb{E}(X|\mathcal{F}))$
- Linearity of expectation. You can switch expectation and summation
- Definition of expectation is an integral (or summation)

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