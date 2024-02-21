---
aliases: []
tags:
  - Economics/Micro-Economics
---
## Definitions

- Monopoly is when a single firm has all the [[Market Power]]. Monopolies normally have:
	- High barriers to entry
	- Production in elastic portion of demand
	- Single firm with market power
	- (usually) economies of scale
- A **Natural Monopoly** is when it's hard for firms to achieve break-even without a monopoly market strucutre

## Market Demand for Monopolies

> [!info] Firms will always produce where **MR > 0**, i.e. where **ε > 1**

- Monopolies face the whole market demand curve.
- **Marginal Revenue (MR)** curve will slope down with the _same intercept_ and _twice the gradient_ of the Demand curve.
- Visual Profit Maximization when $MC=MR$ (See below for math)
	1. Firm produces $x^M$ (=monopoly quantity)
	2. Market price settles at $p^M$ (=monopoly price)
	3. Firm makes profit of $c+d$
	4. Deadweight loss is $e$
		1. DWL happens because monopolist increase price more than optimum

![[スクリーンショット 2022-11-28 14.32.35.png]]

## Profit Maximization for Monopolies

Profit maximization for monopolies:

$$
max_{x} p(x)\cdot x-C(w,r,x)
$$

- $p(x)$ is the inverse of the [[Uncompensated Demand curve|Ordinary Demand]] of goods
- $C(x)$ is the [[Cost Function]] that is derived w.r.t $x$
	- ! Not simply $wl+rk$!
- To solve, use [[Unconstrained Maximization]]
	1. First Order Condition: $\frac{\partial \pi}{\partial x}=0$
		1. This is the same condition as $MR=MC$ condition.
		2. ! In third-degree price discrimination, $MR=MC$ can only be used if $MC$ is constant.
	2. When elasticity is constant ⇒ Use the **[[Price Elasticity of Demand|Elasticity]] condition**: $p(x)=\frac{MC}{1+\frac{1}{\epsilon_{d}}}$
		1. Elastic: $p>MC$ thus excess profit
		2. Unit elastic: $p=MC$ thus zero profit
		3. Inelastic: $p<MC$ thus negative profit (monopolist doesn't produce)

![[Pasted image 20231031163300.png]]

## Price Discrimination for Monopolies

### First Degree Price Discrimmination
Everybody pays exactly how much they're willing to pay.

![[Pasted image 20231031163427.png|332]]

- Demand curve is same as marginal revenue curve
- [[Pareto Efficiency|Pareto efficient]] because there is no deadweight loss; everybody pays exactly as they want to pay, and no extra profit is lost
	- → but the benefit goes to the monopolist only

### Two-part Tariff

![[Pasted image 20231031164314.png]]
- Consumers are made to pay amount A to enter the market
- Then charge consumers $p=MC$
- Same as [[Compensating and Equivalent Variation|Equivalent Variation]]

**Process of enforcing the tariff**
1. Consumers at utility $\bar{u_{1}}$ and only buys good $x_2$
2. Firm enters the market and starts selling good $x_{1}$ at price $p=MC$. The consumer gains utility $\bar{u_{2}}$
3. Firm realizes they could get more profit. They charge amount $A$ to enter the market. Thus the consumer loses amount of $\text{difference}$.
4. Consumers are back to $u_{1}$, but they're still buying $x_{1}$ because they're just as happy as when they only bought $x_{2}$.

You can get market ticket price by either
- using [[Compensating and Equivalent Variation|Equivalent Variation]] on the right graph
- using integration on the left graph

### Third Degree Price Discrimination
- Idea: Charge differently based on consumer characteristics (=based on [[Price Elasticity of Demand]])
- ⇒ Split consumers into two groups $A,B$ with elasticity $\epsilon_{D}^A,\epsilon_{D}^B$ and…
	- If $MC$ is constant → use the elasticity condition
	- If $MC$ is not constant → use normal profit maximization:
	  $max_{x_{A},x_{B}}\pi=\overbrace{p^A(x^A)\cdot x^A+p^B(x^B)\cdot x^B}^{\text{Total Revenue}}-C(x^A+x^B)$
- You will eventually get $MR^A=MC$ and $MR^B=MC$
