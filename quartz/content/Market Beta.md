---
aliases: []
tags:
  - Economics/Finance
---
**Market Beta** ($\beta$)
- Variables
	- Security $i$ with $(R_{i,},\sigma_{i},\mu_{i})$
	- Market $(R_{M},\sigma_{M},\mu_{M})$
	- ⇒ Market Beta measures the degree to which the security price correlates with the market price
		- Market beta is a constant, derived from past data
	- Market's beta is $1$.
- **Definition:** $\beta_{i}\coloneqq\frac{Cov(R_{i},R_{M})}{\sigma_{M}^2}=\rho_{i,M} \cdot \frac{\sigma_{i}}{\sigma_{M}}$
- $\beta_{i}=\frac{\mu_{i}-\mu_{f}}{\mu_{M}-\mu_{f}}$ or equivalently $\mu_{i}-\mu_{f}=\beta(\mu_{M}-\mu_{f})$ ← "[[CAPM Model]]"
	- Under assumptions $V$ is positive definite, $\vec{\mu},\vec{e}$ are linearly independent and $0\leq  \mu_{f}<max(\vec{\mu})$
	- $\beta <0$: security return is opposite of market
	- $\beta=0$: security is uncorrelated to market
	- $0<\beta<1$: security return moves same as market, but fluctuates less (**defensive**)
	- $1<\beta$: security return moves same as market, but fluctuates more (**aggressive**)

> [!hind] Security Market Line
> Plotting $\mu_{i}-\mu_{f}=\beta(\mu_{M}-\mu_{f})$ with return vs market beta:
>
> ![[CAPM Model.png|320]]
