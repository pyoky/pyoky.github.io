---
aliases:
  - Gordon Growth Model
tags:
  - Economics/Finance
---
**Dividend** at the end of $i$-th period: $D_{i}=\left(1+ \frac{g}{k} \right)^iD_{0}$
- Assumption in this model is that dividend will grow at rate $g$ per year

**Present value of [[Equity]]**
- $r$ is the [[Interest Rate|required rate]]
- $S_{n}$ is the stock price when you sell it (end of period $n$)
- $R\coloneqq \frac{ 1+\frac{g}{k} }{1+\frac{r}{k}}$

$$
\begin{align}
S_{0}&=\frac{D_{1}}{\left( 1+\frac{r}{k} \right)}+\frac{D_{2}}{\left( 1+\frac{r}{k} \right)^2}+\dots+\frac{S_{n}}{y_{n}}  & \text{selling after period }n\\
S_{\infty}&={D_{1}}{\left( 1+\frac{r}{k} \right)}+\dots = \sum_{i=1}^\infty \frac{\left( 1+\frac{g}{k} \right)^iD_{0}}{\left( 1+\frac{r}{k} \right)^i} =D_{0}\sum_{i=1}^\infty R^i & \text{holding stock forever} \\
&= D_{0}\cdot\frac{R}{1-R}  & \text{when } r>g \implies R<1 \text{ (geometric sum) } \\[.5em]
&={\color{red}D_{0}  \frac{1+\frac{g}{k}}{\frac{r}{k}-\frac{g}{k}} =\frac{D_{1}}{\frac{r}{k}-\frac{g}{k}} 
}& \text{DDM}\end{align}
$$
