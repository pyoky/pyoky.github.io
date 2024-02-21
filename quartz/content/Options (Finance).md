---
aliases: []
tags:
  - Economics/Finance
---

def. An _option_ is a contract that gives the _holder_ the right to _exercise_ the option (=buy/sell a stock) at the _strike price_ at or before the _strike date_.
- It is a type of [[Derivatives (Finance)|Derivative]]
- The person who gives out the option contract is the _writer_.
- The person who gets the option contract is the _holder_.

### Types of Options
- Exercise timing
	- American option: anytime on or before the strike date.
	- European option: at the strike date only.
- Exercise type
	- Call option: you hold the right to _sell_ the stock at the strike price.
	- Put option: you hold the right to _buy_ the stock at the strike price.

### Definitions
- $S(t)$: price of underlying asset, at time $t$
- $C(t)$: price of a call option, at time $t$
- $P(t)$: price of a put option, at time $t$
- $K$: strike price of a call or put option

## Single-Term Option Pricing

### Call Option
Assume continuous compounding at rate $r$ between time period $[t_{0},t_{1}]$.
Assume [[Assumptions in Derivative Pricing]].
- Payoff: $\text{max}[S(t_{1})-K,0]$
  - $0$ is when the stock price as decreased, so you don't decide to sell.
  - according to the law of one price, must equal to $=C(t_{1})$
- Profit: $\text{max}[S(t_{1})-K,0]-C(t_{0})\exp[r(t_{1}-t_{0})]$
  - First term is the payoff
  - Second term is because you borrowed money at the risk-free rate $r$ to buy the call option.
  - We don't know what $C(t_{0})$ is yet…see below.

### Call-Put Parity
i.e. you can always use a stock plus a put option to simulate an equivalent call option, and v.v.
$$
C(t_{0})=S(t_{0})+P(t_{0})-Ke^{ -r(t_{1}-t_{0}) }
$$

## Binomial Option Pricing Model

Q. What is the fair price (=[[Assumptions in Derivative Pricing]]) of a European call option at time $t_{0}$?

- You can't really just use [[Present Value Calculations]] because it's a derivative.
- Using the same [[Binomial Tree Model of Security Pricing]] but in options.

1. Find the purchase of stock and borrow of money that would have the equivalent payoff as the call option (=_reproducing portfolio_)
2. Use that to price the stock
3. Then, according to the [[Assumptions in Derivative Pricing]] that must be the same as the current price of the call option
4. Do this for $n$ periods for a binomial tree

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

- With the [[Assumptions in Derivative Pricing]] we have $E[C(t_{1})]=C(t_{0})e^{ (r-q)(t_{1}-t_{0}) }$.
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

## Black Scholes European Option Pricing Formula (Risk-neutral Derivation)

By taking $n\to \infty$ we see
1. $S(t)$ becomes a [[Stochastic Process]]
2. Binomial sum can be [[Approximating Distributions|approximated]] by a [[Normal Distribution]]

thm. **Black Scholes Option Pricing Formula** (Risk-Neutral)

$$
\begin{align}
C(t) &= e^{-(T-t)q} S(t) N(d_1) - e^{-(T-t)r} K N(d_2) \\
d_1 &= \frac{\ln(S(t)/K) + [(r - q) + \frac{\sigma^2}{2}](T - t)}{\sigma\sqrt{T-t}} \\
d_2 &= d_1 - \sigma\sqrt{T-t} = \frac{\ln(S(t)/K) + [(r - q) - \frac{\sigma^2}{2}](T - t)}{\sigma\sqrt{T-t}}
\end{align}
$$

where
- $S(t)$ are log-normal returns (=geometric brownian motion)
	- $\sigma$ is the scale of this motion
- $N(d)$ is the CDF of the Standard [[Normal Distribution]]

## Black Scholes European Option Pricing Formula (GBM and PDE Derivation)

See [[Black-Scholes-Merton Derivative Pricing Formula]]
