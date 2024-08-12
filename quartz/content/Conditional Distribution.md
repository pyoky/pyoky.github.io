---
aliases:
  - Posterior Distribution
tags:
  - Math/Probability
---
def. **Conditional Distribution.** let $X,Y$ be [[Joint Distributions|jointly distributed]]. Then the conditional probability distribution of $Y$ given a specific value of $X$ is the conditional probability distribution.

1. $X,Y$ are discrete:

$$
\text{pmf}_{Y|X={\color{green}x}}(y):=\mathbb{P}(Y=y|{\color{green}X=x})=\frac{\mathbb{P}(Y=y\land X=x)}{\mathbb{P}(X=x)}
$$

2. $X,Y$ are continuous:

   
$$
   f_{Y|X=x}=\frac{f_{X,Y}(x,y)}{f_X(x)}
   
$$

   - if $X\perp Y$:

$$
f_{Y|X=x}(y)=f_Y(y)
$$

> [!note] Visually:
…the red line height divided by the orange line is the p.d.f conditional distribution $f_{X|Y=y}(x)$.
…the orange line is the value of the marginal distribution $f_Y$ at $Y=y$.
![[スクリーンショット 2022-12-01 10.53.44.png]]

thm. **Continuous Multiplication Rule.** let $X,Y$ be jointly distributed. Then:

$$
f_{X,Y}(x,y)=f_{X|Y=y}(x)\cdot f_Y(y)
$$

thm. **Rule of Average Conditional Probability.** let $X,Y$, Then:

$$
f_X=\int_{-\infty}^\infty f_{X|Y=y}\cdot f_Y\, dy\\[1em]
\mathbb{P}(X=x)=\int\mathbb{P}(X=x|Y=y)\cdot f_Y(y)\, dy
$$
