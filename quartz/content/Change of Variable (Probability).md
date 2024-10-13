---
aliases: []
tags:
  - Math/Probability
---

## Univariate Case

thm. **Linear Change of Variable.** let $X \ \text{s.t.}\ \mathbb{P(X=x)}=f_X(x)$. let $Y=aX+ b$. Then…:

$$
f_Y(y)=\frac{1}{|a|}f_X(\frac{y-b}{a})
$$

⭐ thm. **Change of Variable** (bijective function). let $X \ \text{s.t.}\ \mathbb{P(X=x)}=f_X(x)$. let $Y=g(X)$ where $g(x)$ is an inversible function (=bijective). Then:

$$
f_Y(y)=\frac{f_X[g^{-1}(y)]}{|dy/dx|}
$$

- The bottom is a x-axis reflective version of $f_X$
- The left is a 90 degrees counterclockwise rotation of $f_Y$
- The graph is of $Y=g(X)$ where $g(x)=\sqrt{x}$

thm. **Change of Variable** (injective function). let:

- $X,Y, f_X,f_Y,Y=g(X)$
- $\text{Domain}(X)$ is partitioned $[x_1,x_2),[x_2,x_3),…$ s.t. $g(x)$ is bijective in each interval.

then $f_Y(y)$ can be defined on interval $[x_i,x_{i+1})$…:

$$
f_Y(y)=\sum_{x:y=g(x)}^{}\frac{f_X[g^{-1}(y)]}{|dy/dx|}\text{ , when } y\in g([x_i,x_{i+1}))
$$

## Multivariate Case

thm. **Change of Variables**. (bijective function). let $\vec{X}$ with $f_{\vec{X}}(\vec{x})$ and $\vec{Y}=\mathbf{g}(\vec{X})$, where $\mathbf{g}: \mathbb{R}^{n} \mapsto \mathbb{R}^{n}$ is a bijective function with continuous derivatives. Then the joint probability density function of $Y=(Y_{1},Y_{2},\dots,Y_{n})^{\top}$ is:
$$
f_{\mathbf{Y}}(\mathbf{y})= \frac{f_{\mathbf{X}}(\mathbf{g}^{-1}(\mathbf{y}))}{|\det \underbrace{ \frac{ \partial \mathbf{x} }{ \partial\mathbf{y} }  }_\text{ jacobian }|}
$$
*Example.* See the [[Normal Distribution#Box-Mueller Transform]]

