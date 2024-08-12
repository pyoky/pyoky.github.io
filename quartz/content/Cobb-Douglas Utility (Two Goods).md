---
aliases:
  - Cobb-Douglas
tags:
  - Economics
---
def. Two-goods Cobb-Douglas Utility function:

$$
u(x_{1},x_{2})=x_{1}^\alpha x_{2}^{1-\alpha} 
$$

let the income:

$$
I(p_{1},p_{2})=p_{1}x_{1}+p_{2}x_{2}
$$

## Utility Maximization

$$
\text{max}_{x_{1},x_{2}} u=x_{1}^\alpha x_{2}^{1-\alpha} ~\text{ such that }~ I=p_{1}x_{1}+p_{2}x_{2}
$$

### [[Uncompensated Demand curve|Ordinary Demand]]:

$$
\begin{cases}
x_{1}(p_{1},p_{2},I)=\frac{\alpha I}{p_{1}}\\[1em]x_{2}(p_{1},p_{2},I)=\frac{(1-\alpha) I}{p_{2}}
\end{cases}
$$

### [[Utility Function#Indirect Utility Function|Indirect Utility]]:

$$
\begin{align}
v(p_{1},p_{2},I)&\coloneqq u\Big(x_{1}(p_{1},p_{2},I),x_{2}(p_{1},p_{2},I)\Big) \\[.5em]
&= \frac{(1-\alpha)^{1-\alpha}~\alpha^\alpha}{p_{1}^\alpha ~p_{2}^{1-\alpha} }\cdot I
\end{align}
$$

## Expenditure Minimization

$$
\text{min}_{x_{1},x_{2}}I=p_{1}x_{2}+p_{2}x_{2} ~ \text{ such that }~ u=x_{1}^\alpha x_{2}^{1-\alpha}
$$

### [[Marginal Willingness to Pay|Compensated Demand]]:

$$
\begin{cases}
h_{1}(p_{1},p_{2},\bar{u})=\left( \frac{p_{1}}{p_{2}} \frac{1-\alpha}{\alpha}  \right)^\alpha \bar{u}\\[1em]
h_{2}(p_{1},p_{2},\bar{u})=\left( \frac{p_{2}}{p_{1}} \frac{\alpha}{1-\alpha}  \right)^{1-\alpha} \bar{u}
\end{cases}
$$

### [[Expenditure Function]]:

$$
\begin{align}
E(p_{1},p_{2},\bar{u})&\coloneqq p_{1}h_{1}+p_{2}h_{2}\\[.5em]
&=\frac{p_{1}^\alpha ~p_{2}^{1-\alpha} }{(1-\alpha)^{1-\alpha}~\alpha^\alpha}\cdot\bar{u}
\end{align}
$$
