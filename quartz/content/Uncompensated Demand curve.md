---
aliases:
  - Ordinary Demand
  - Marshallian Demand
tags:
  - Economics/Micro-Economics
---
> [!abstract]
> - The canonical, standard demand curve when we normally say "demand of good $x$"
> - In theory, it should be the actual demand curves of individuals
> - All Marshalian demand curves are [[Homogenous Function|HD]]0 in $(\text{prices}, \text{income})$

## How to Derive OPDC

Visually:
1. Plot the indifference map and budget line for goods $x_1$ and $x_2=\text{"\$ of other goods"}$. Choose an optimal bundle $x_1$ at price $p_1$. Plot this on the price-quantity graph: $A(x_1,p_1)$
2. Change the price $p_1 \rightarrow p_1'$; i.e. change the **gradient** of the budget. See what substitution and income effects it produces.
3. Then find the optimum bundle for the new price: $C(x_1',p_1')$. Connect these points together.

Analytically:
1. $\text{max}_{x_{1},x_{2}} ~ u(x_{1},x_{2}) ~ \text{such that} ~ I=p_{1}x_{1}+p_{2}x_{2}$ using [[Utility Maximization]]
2. you will get $x_{1}(p_{1},p_{2},I),x_{2}(p_{1},p_{2},I)$
	1. i.e. quantity demanded _as a function of_ prices and income
	2. This is the demand function → plot this to get demand curve

==As stated above: OPDC must be HD0; check if it is!==
## Analysis of Goods

- In a demand curve, Price is the **negative gradient of the budget line.** ($\because g=-\frac{p_1}{p_2}$, and we defined $p_2=\$1$)

### Depending on Price

$$
\frac{\partial x_{1}}{\partial p_{1}}~
\begin{align}
>0 & \implies \text{Ordinary Good} \\
< 0 & \implies\text{Giffen Good}
\end{align}
$$

- Ordinary goods's demand functions $x_{1}$ are [[Homogenous Function|homogenous]] in $(p_{1},p_{2},I)$
	- → Inflation in all prices as well as income doesn't change anything
### Depending on Income

$$
\frac{\partial x_{1}}{\partial I}~
\begin{align}
>0 & \implies \text{Normal Good} \\
=0 & \implies \text{Quasilinear Good} \\
< 0 & \implies\text{Inferior Good}
\end{align}
$$

![[スクリーンショット 2022-09-20 18.06.56.png]]

- Graph (a) shows a normal good’s OPDC.
- Graph (b) and (c) shows a inferior good’s OPDC.
- Graph (c) is the strange [[Types of Goods (Economics)|Giffen Good]].

## Labor Supply Curve

See also [[Utility Maximization with Endowments]]

Deriving the Labor Supply Curve works similarly to the OPDC, with the following differences:

- $p_1$ = (gradient of budget line) = (opportunity cost of leisure in dollars) = $**w$ (wage)\*\*
- There’s no exogenous income. You’re endowed a **bundle** with _zero consumption_ and _certain hours of leisure_.
	- → You can “sell off” your leisure hours at price $w$

Thus as wages increase (= price of leisure in dollars)
- → the shift in the budget line happens from blue→pink in graph below…
	- …with a stationary leisure endowment at the x-intercept _and_ a clockwise rotation.
- Then after you draw the OPDC for leisure, **you flip the curve horizontally.**
  (since $\text{endowment}=\text{leisure hours}+\text{work hours}$.)

![[スクリーンショット 2022-09-20 18.18.31.png]]

- Graph (a) shows the case where leisure is a normal good, but IE > SE.
- Graph (b) is Normal good, IE < SE.
- Graph (c) shows when leisure is an inferior good.

> [!warning]
  When discussing labor supply, the [[Income Effect (IE)]] is called the **wealth effect (WE).** We’re not discussing why.
### Backward Bending Supply of Labor

In real life, labor supply curves look like this:

![Untitled|360](Untitled%2013.png)

This is because workers will trade-off leisure and work hours.

→ the higher the person’s wage, they will work more; but at some point their wage is large enough and they start to enjoy life more. This is called the **[Backward Bending Supply of Labor.](https://en.wikipedia.org/wiki/Backward_bending_supply_curve_of_labour?oldformat=true)**

## Interesting IRL Analysis

[cdixon | How bundling benefits sellers and buyers](https://cdixon.org/2012/07/08/how-bundling-benefits-sellers-and-buyers)

## Deriving Uncompensated Demand
