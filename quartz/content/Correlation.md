---
aliases: []
tags:
  - Math/Statistics
---

def. **Correlation (Correlation Coefficient)**. Correlation is [[Covariance]], but standardized (unitless)

$$
\begin{aligned}

\rho_{XY}&=\text{Corr}(X,Y)\\[0.5em]
&=\text{Cov}(\frac{X-\mu_X}{\sigma_X},\frac{Y-\mu_Y}{\sigma_Y})\\[0.5em]

&=\frac{1}{\sigma_X \sigma_Y}\text{Cov}(X-\mu_X,Y-\mu_Y)
\\[1em]
&={\color{red}\frac{\text{Cov}(X,Y)}{\sigma_X \sigma_Y}}
\end{aligned}
$$

thm. Correlation Identities.

- $-1\le \rho\le1$
- $\rho_{XY}=1\Leftrightarrow \exists \,a,b\in \mathbb{R} \land a>0 \,|\, Y=aX+b$
- $\rho_{XY}=-1\Leftrightarrow \exists \,a,b\in \mathbb{R} \land {\color{red}a<0} \,|\, Y=aX+b$
- $\rho_{aX,bY} =\text{Corr}(X,Y)$ i.e. linearly invariant

## For R.V. $X,Y$, the following means the Same Thing

- $X,Y\text{ are uncorrelated}$
- $\text{Cov}(X,Y)=0$
- $\text{Var}(X+Y)=\text{Var(X)+Var(Y)}$
- $\mathbb{E}(X\cdot Y)=\mathbb{E}(X)\cdot \mathbb{E}(Y)$

Independence \[$X\perp Y$] implies all of the above, **but any of the above does not imply independence**.
