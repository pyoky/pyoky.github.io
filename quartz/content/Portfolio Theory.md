---
aliases:
  - Markowitz model
tags:
  - Economics/Finance
---

Assume the [[Efficient Market Hypothesis]].

> [!info]
> How to **maximize returns** while **minimizing risk** [=volatility =std. dev.]?
> → Since risk/return is proportional to each other, you choose **one** optimization goal.

- Single Stock (See [[Dividend Discount Model]])
- Price of stock $i$ at time $t$: $S_{i}(t)$
- Return of stock $i$ at time $t$: $R_{i}(t)=\frac{S_{i}(t)-S_{i}(t_{0})}{S_{i}(t_{0})}+\frac{D_{i}}{S_{i}(t_{0})}$
	- $S_{i}, D_{i}, R_{i}$ are all [[Random Variable]]s
- Expected Return of stock $i$: $\mu_{i}=E[R_{i}]$
- Volatility (=[[Risk (Finance)|Risk]]) of Stock $i$: $\sigma_{i}=\sqrt{ Var[R_{i}]}$

## Two-stock Portfolios

- **Covariance** of stocks $i,j$: $\sigma_{i,j}=Cov[R_{i},R_{j}]$
- **Correlation** of stock $i,j$: $\rho_{i,j}= \frac{\sigma_{i,j}}{\sigma_{i},\cdot\sigma_{j}}$ such that $-1\leq \rho \leq 1$
- Weights $w, 1-w$ for $(R_{1},\mu_{1},\sigma_{1}),(R_{2},\mu_{2},\sigma_{2})$
- Portfolio _Expected Return_: $\mu_{p}=w\mu_{1}+(1-w)\mu_{2}$
- Portfolio _Variance_:
$$
\begin{align}
\sigma_{p}^2&=w^2 \sigma_{1}^2+(1-w)^2\sigma_{2}^2+2w(1-w)\rho\cdot\sigma_{1}\sigma_{2} \\
&= (\sigma_1^2 - 2\rho\sigma_1\sigma_2 + \sigma_2^2)w^2 + 2(\rho\sigma_1\sigma_2 - \sigma_2^2)w + \sigma_2^2 & \text{function of }w
\end{align}
$$
- **Minimum Variance Portfolio**:
$$
\begin{align}
W &= \frac{\sigma_2^2 - \rho\sigma_1\sigma_2}{\sigma_1^2 - 2\rho\sigma_1\sigma_2 + \sigma_2^2} \\
1 - W &= \frac{\sigma_1^2 - \rho\sigma_1\sigma_2}{\sigma_1^2 - 2\rho\sigma_1\sigma_2 + \sigma_2^2}
\end{align}
$$
## N-Stock Portfolio
$$
\vec{R}=\begin{bmatrix}
R_{1} \\
\vdots \\
R_{N}
\end{bmatrix}~ ~
\vec{\mu} = \begin{bmatrix}
\mu_{1} \\
\vdots \\
\mu_{N}
\end{bmatrix} ~ ~
\vec{w}=\begin{bmatrix}
w_{1} \\
\vdots \\
w_{N} \\
\end{bmatrix}
~ ~ V=\begin{bmatrix}
\sigma_{1} & \dots & \sigma_{1,N} \\
\vdots & \ddots & \vdots \\
\sigma_{N,1} & \dots & \sigma_{N,N}
\end{bmatrix}
$$
- Known information: $\sigma_{i},\sigma_{ij},\rho_{ij},\mu_{i}$ are all known
- Multiple Stocks (=Portfolio)
	- **Position** of portfolio $p$ at time $t$ (=amount invested): $V_{p}(t)=\sum_{i=1}^N n_{i}S_{i}(t)$
	- **Portfolio Return** at time $t$ $R_{p}(t)=\vec{w} ^T\cdot\vec{R}$
	- **Portfolio Expected Return** at time $t$: $\mu_{p}(t)=\vec{w}\cdot \vec{\mu}$
	- **Portfolio Variance**: $\sigma^2_{p}=\sum_{i=1}^N w_{i}^2\sigma_{i}^2+2\sum_{1\leq i<j\leq N}w_{i}w_{j}~\rho ~\sigma_{i}\sigma_{j}={\color{red}\vec{w}^T V \vec{w}}$

def. **Feasible Portfolios.** Set of tuples $(\sigma=\text{risk},\mu=\text{expected return})$ given we have many assets weighted $\vec{w}$.
- $F_{p}=\{ (\sigma_{p},\mu_{p})|w \in \mathbb{R} \}$ ← Short-selling is allowed
- Lower the correlation [= the more negatively correlated] $\propto$ the better diversification is.
	- When two stocks have perfectly negative correlation $\rho=-1$, the efficient frontier touches the $y$-axis (=$\sigma_{p}=0$)![Untitled](Untitled%2022.png)
## Efficient Frontier
$$
\text{min}_{\vec{w}} ~ \sigma_{p}=\sqrt{ \vec{w}^TV\vec{w} } ~ \text{such that} ~ \vec{w}^T \vec{1}=1,~ \vec{w}^T\vec{\mu}=\mu_{p}
$$

- "Minimize the variance $\sigma$ such that the sum of weights are $1$ and the portfolio return is $\mu$ (a constant)"
- ==Key Assumption==: neither the returns $\mu_{i}$ or risks $\sigma_{i}$ are identical, and there is no perfect correlation $\rho_{i,j}=\pm 1$
- Minimum for given return level $\mu_{p}$ at:
$$
\vec{w}=\frac{C-B\mu_{p}}{AC-B^2}V^{-1}\vec{e}+ \frac{\mu_{p} A-B}{AC-B^2}V^{-1}\vec{\mu}
$$
- Efficient Frontier:
$$
\{ (\sigma_{p},\mu_{p})| \sigma_{p}^2= \frac{A\mu_{p}^2-2B \mu\_{p}+C}{AC-B^2}\}
$$
- …where $A,B,C$ are scalars:
	- $A=\vec{e}V^{-1}\vec{e}$
	- $B=\vec{\mu}^TV^{-1}\vec{e}=\vec{e}^TV^{-1}\vec{\mu}$
	- $C=\vec{\mu}^T V^{-1}\vec{\mu}$

![Untitled](Untitled%201%2012.png)
![[Portfolio Theory.png|260]]
