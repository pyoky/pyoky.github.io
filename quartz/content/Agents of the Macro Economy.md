---
aliases: []
tags:
  - Economics/Macro-Economics
---

## Agents

> [!info] We’re doing static analysis; i.e. it’s very LR or very SR.

Numerous agents of each sector are grouped into a **representative agent.**

1. **Representative household**

   Objective: maximize utility over consumption ($C$) and Leisure ($L$) within the _utility function_

   → Labor Supply $S^N$ and # of laborers $N$

   → Goods Demanded $D$

2. R**epresentative Firm**

   Objective: maximuze profit ($\pi$) over capital ($K$) and Labor ($N$) within the _production function_

   → Labor Demand $D^N$

   → Goods Supplied $S$

3. **Government**

   Role: collect taxes and pay transfers ($NT$); spend remaining on the goods market $G$

## Household Optimization

- For households the price of consumption goods and the price of leisure [=wage] is an exogenous variable; i.e. it cannot be controlled
- Households have a time endownment of $h$ which they can use for leisure ($L$) or consumption ($C$)

The **Household Utility Function $u(C,L)$**

Assumptions:

1. $\frac{\partial u}{\partial C},\frac{\partial u}{\partial L} >0$ …i.e. More consumption/leisure is always better
2. $\frac{\partial^2 u}{\partial C^2}
,\frac{\partial^2 u}{\partial K^2}<0$
   …i.e. the Marginal Utility always diminishes
3. $\exists \frac{\partial u}{\partial C}$
   [= utility function is differentiable] …i.e. $C,L$ are somewhat substitutable
   → $MRS=\frac{\partial u/\partial C}{\partial u/\partial L}|_{\bar u}$

**Household Budget Constraint**

$$
wN +\pi-NT=C
$$

- $w$ is the representative wage
- $N$ is the hours of labor a HH chooses
- $\pi$ is profit or dividends if the HH is also an owner of a firm
- $NT$ is the net transfers (+transfers-taxes)
- $C$ is consumption (in units: # of goods)

---

## Firm Optimization

- The representative firm employs Factors of Production ($K,N$) to produce $Y^S=f(K,N)$ output
- Profit of the firm is $\pi=f(K,N)-wN-rK$
- The firm is the average firm of the **whole economy,** which is unlike a microecon firm in many ways

The **Firm Production Function $f(z,K,N)$**

Assumptions:

1. Constant Returns to Scale (M&A is useless)
   $x^\lambda f(z,K,N)=f(z,\lambda K, \lambda N)$
   → This is probable, since output **as a whole in general** has CRS
2. More capital or more labor always means more output
   $\frac{\partial Y}{\partial K},\frac{\partial Y}{\partial N}>0$, equivalently $MP_K,MP_N>0$
   → Probable; throw another pencil into the economy, it’ll produce more
3. Diminishing Marginal Product
   $\frac{\partial^2 Y}{\partial K^2}, \frac{\partial^2 Y}{\partial K^2}<0$
4. Marginal product of **capital** increase with more **labor**, and vice versa
   $\frac{\partial Y}{\partial K\partial N}>0$ [= positive cross-derivative]

**[[Profit Function]]**

$$
\frac{\partial \pi}{\partial K}=\frac{\partial f}{\partial K}-r=0
$$

$$
\frac{\partial \pi}{\partial N}=\frac{\partial f}{\partial N}-w=0
$$

↑ Must satisfy **both** conditions

---

⇒ The [[Cobb-Douglas Utility|Cobb-Douglas]] Production Function satisfies all these assumptions:

$$
f(z,K,N)=zK^\alpha N^{1-\alpha}~ \text{where }~0<\alpha<1
$$

- Profit $\pi=zK^\alpha N^{1-\alpha}-wN-rK$
- Capital Demand, $\frac{\partial \pi}{\partial K}=0$ at $z\cdot \alpha (\frac{K}{N})^{\alpha-1}=r$
- Labor Demand, $\frac{\partial \pi}{\partial N}=0$ at $z\cdot (1-\alpha) (\frac{K}{N})^{\alpha}=w$

## Government Plans

The government’s goals are more vague, threefold:

1. Allocative: resources are used in certain proportions
2. Distributive: income, wealth is distributed at tolerable equalities
3. Stabilization: business cycle is smoothed out
   1. Automatic stabilizers; e.g. unemployment benefits
   2. government purchases ($G$)
