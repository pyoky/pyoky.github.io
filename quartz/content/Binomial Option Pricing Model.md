---
aliases: 
tags:
  - Economics/Finance
---
## Binomial Option Pricing Model

Q. What is the fair price (=[[No-Arbitrage]]) of a European call option at time $t_{0}$?

- You can't really just use [[Present Value Calculations]] because it's a derivative.
- Using the same [[Binomial Security Pricing Model]] but in options.

1. Find the purchase of stock and borrow of money that would have the equivalent payoff as the call option (=_reproducing portfolio_)
Use that to price the stock
2. Then, according to the [[No-Arbitrage]] that must be the same as the current price of the call option
3. Do this for $n$ periods for a binomial tree

### Call Option Details

Payoff (=price of call option at time $t_{1}$)

$$
C(t_{1})=\begin{cases}
\text{max}[S(t_{1})\cdot {\color{red}u_{*}} K,0]  & \text{probability }p\\
\text{max}[S(t_{1})\cdot{\color{red}d_{*}}K,0] & \text{probability }1-p
\end{cases}
$$

- $u,d$ is the uptick factor and the downtick factor

### Reproducing Portfolio Details

- $\Delta(t)$: number of stocks you purchase
  - will increase due to dividend payouts: $\Delta (t_{1})=\Delta(t_{0})e^{ q(t_{1}-t_{0}) }$
  - $q$ is the dividend rate
- $b$: amount you borrow at time $t_{0}$
- ⇒ Value of portfolio

$$
  \begin{align}
  V(t_{0})&=\Delta(t_{0})\cdot S(t_{0})-b \\
  V(t_{1})&=\Delta(t_{1})\cdot S(t_{1})-be^{ r(t_{1}-t_{0}) }
  \end{align}
  
  
  
  
  
$$

### Calculating Fair Call Price

⇒ Equate $V(t_{1})=C(t_{1})$ and solve for $\Delta(t),b$ to obtain the reproducing portfolio.

$$
\begin{align}
\Delta(t_{0})&= \frac{{C_{u}(t_{1})-C_{d}(t_{1})}}{(u-d)S(t_{0})}e^{ -q(t_{1}-t_{0}) } \\[1em]
b&=\frac{dC_u(t_1) - uC_d(t_1)}{u - d}e^{-r(t_{1}-t*{0})}
\end{align}
$$

- Calculate $V(0)$:

$$
V(t_{0})=e^{-q(t_{1}-t_{0})} \frac{C_u(t_1) - C_d(t_1)}{(u-d)S(t_0)}S(t_{0}) - e^{-r(t_{1}-t_{0})} \frac{dC_u(t_1) - uC_d(t_1)}{u-d}
$$

- ⇒ Thus $V(t_{0})=C(t_{0})$ and simplifying:

$$
C(t_{0}) = e^{-r(t_{1}-t_{0})} \left[\frac{e^{(r-q)(t_{1}-t_{0})} - d}{u - d} C_u(t_{1}) + \frac{u - e^{(r-q)(t_{1}-t_{0})}}{u - d} C_d(t_{1}) \right]
$$

### Generalizing into $n$ terms

- With the [[No-Arbitrage]] we have $E[C(t_{1})]=C(t_{0})e^{ (r-q)(t_{1}-t_{0}) }$.
- Then define the _risk-neutral probability_ of an uptick such that

$$
p_{*}\coloneqq\frac{ e^{(r-q)(t_{1}-t_{0})}-d}{u-d}
$$

thm. **Risk-Neutral Binomial Call Pricing Formula**

$$
C(t_0; n) = e^{-(nh)r} \sum_{i=0}^{n} \binom{n}{i} p_{*}^{i} (1 - p_{*})^{n-i} C_{u_i d_{n-i}}(t_n)
$$

where
- $C_{u^{i}d^{n-i}}(t_{n})\coloneqq \text{max}[C(t_{0})u^i d^{n-i}-K,0]$
- $u_{n}\approx e^{\sigma \sqrt{ h_{n} }}$
- $d_{n}\approx e^{-\sigma \sqrt{ h_{n} }}$
- $h\coloneqq t_{1}-t_{0}$
- $r,q$ is the risk-free rate and dividend rate

By taking $n\to \infty$ we see
1. $S(t)$ becomes a [[Stochastic Process]]
2. Binomial sum can be [[Approximating Distributions|approximated]] by a [[Normal Distribution]]
