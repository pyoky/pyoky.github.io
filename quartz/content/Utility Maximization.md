---
aliases: []
tags:
  - Economics
---

$$
\text{max} ~u(x_{1},x_{2}) ~ \text{such that} ~ I=p_{1}x_{1}+p_{2}x_{2}
$$

Maximization of the [[Utility Function]] against the [[Budget Lines|Budget Constraints]].
- Uses [[Constrained Optimization]]
- & If it makes it more convenient, do a [[Monotonic Transformation]] of the utility function. See [Example](x-devonthink-item://816B71A6-ACA1-47A0-AD42-B5601DC840D2?page=9).
- Optimal is where the budget line is the tangent to the [[Utility Function|Indifference Curve]]. This implies both gradients are same, i.e. $-\frac{P_1}{P_2} = MRS$
- The result is the [[Uncompensated Demand curve|Ordinary Demand]] functions (one for each good)
- See [[Expenditure Minimization]] for the opposite case
- ! Always check if the resulting $x_{1},x_{2}$ are positive. If not, it's piecewise function to keep both positive.
### Perfect Substitutes
With the form: $u=(a{\color{red}x_{1}}^k+b{\color{red}x_{2}}^l)^\alpha$

![[Constrained Optimization - Perfect Substitutes.png|380]]
⇒ Go to the **corner** that gives the highest utility (=buy only one good!)

$$
x_{1} = \begin{cases}
\frac{I}{p_{1}} &\text{if } u\left( \frac{I}{p_{1}},0 \right)\geq u\left( \frac{I}{p_{2}},0 \right) \\
0  & \text{else}
\end{cases}, ~
x_{2} = \begin{cases}
\frac{I}{p_{2}} &\text{if } u\left(0, \frac{I}{p_{2}} \right)\geq u\left(0, \frac{I}{p_{1}} \right) \\
0  & \text{else}
\end{cases}
$$

### Perfect Compliments

$$
\text{max}_{x_{1},x_{2}} ~ u(x_{1},x_{2})=min(x_{1},2x_{2}) ~ \text{ such that } I=p_{1}x_{1}+p_{2}x_{2}
$$

![[Constrained Optimization - Perfect Complements.png|280]]

1. Get the formula that is the set of all kinked points in the utility function ⇒ $x_{1}=2x_{2}$
2. Get the Constraint formula ⇒ $I=p_{1}x_{1}+p_{2}x_{2}$
3. Solve for the two equations (=get the intersection)

$$
x_{1}=\frac{I}{2p_{1}+p_{2}}~,~x_{2}=\frac{2I}{2p_{1}+p_{2}}
$$

### Quasilinear Optimization

Use [[Constrained Optimization|Lagrangian]] optimization, but beware that the blue line might happen (=maximum point lies outside $x_{1},x_{2}>0$):
![[Constrained Optimization.png|260]]
⇒ In this case, go to the red `(*)` corner solution.

### Kinked Budget Constraint
1. Case 1: Inner kink
	1. Lagrangian for blue section
	2. Lagrangian for red section
	3. Choose the better one![[Constrained Optimization-1.png|360]]
2. Case 2: Outer Kink
	1. Lagrangian for blue and red section
	2. If both solutions are unaffordable (=$IC_{A}, IC_{B}$ in the graph i.e. $x_{2}<0$ in graph,), **go to the kink.**![[Constrained Optimization-2.png|340]]

### More than Two Goods

1. Case 1: $u(x_{1},x_{2},x_{3})=x_{1}^\alpha x_{2}^\beta x_{3}^{1-\alpha-\beta}$ ← Pure three-var cobb-douglas
	- ⇒ Use 3-var lagrangian
2. ==Case 2: $u(x_{1},x_{2},x_{3})=x_{1}^\alpha x_{2}^{1-\alpha}+x_{3}$==
	1. Check that each term is [[Homogenous Function|Homogenous Degree]] of 1.
	2. ==Try the two-var lagrangian on the first term== $x_{1}^\alpha x_{2}^{1-\alpha}$ (assumping $x_{3}$ isn't consumed)
	3. Try to maximize $x_{3}$ (assuming $x_{1},x_{2}$ isn't used)
	4. Choose the higher of the two utilities
		- If there is no concrete number, ==the cases differ on the conditions== $u(x_{1},x_{2},0) \lessgtr u(0,0,x_{3})$

Solution for Case 2: ^z3afth

$$
\text{max}_{x_{1},x_{2},x_{3}} u=x_{1}^\alpha x_{2}^{1-\alpha}+x_{3} ~\text{ such that }~ I=p_{1}x_{1}+p_{2}x_{2}
$$

$$
\begin{cases}
\begin{cases}
x_{1}=\frac{\alpha I}{p_{1}}\\[1em]x_{2}=\frac{1-\alpha I}{p_{2}}
\end{cases} & \text{If } \frac{\alpha^\alpha (1-\alpha)^{1-\alpha}}{p_{1}^\alpha p_{2}^{1-\alpha}}\geq \frac{1}{p_{3}}  \\[1em]
x_{1}=x_{2}=0 \text{ and max} ~x_{3} & \text{Otherwise}
\end{cases}
$$

Graphing a budget line with an indifference map, we can see that the bundle $B_1$ is where the consumer can achieve the most possible utility; where **what is affordable = most possible utility**

To find the bundle(=point) of maximum utility that is affordable, you can rephrase the problem as…

## Worked Example: Constrained Optimization Problem

Using the Lagrange Method for $\text{max }u(x_1,x_2) \text{ s.t. (budget line)}$,

$\nabla u(x_1,x_2)=\lambda \nabla(p_1 x_1+p_2 x_2) \\ p_1 x_1+p_2 x_2 = I$

To simplify further: $\nabla u(x_1,x_2)=\lambda \nabla(p_1 x_1+p_2 x_2-I)$ and thus let:

$$
L=\nabla u(x_1,x_2)-\lambda \nabla(p_1 x_1+p_2 x_2-I)
$$

to construct a set of equations where:

$$
\frac{\delta L}{\delta x_1}= 0 \\\frac{\delta L}{\delta x_2}= 0 \\ p_1 x_1 + p_2 x_2 = I
$$

and solve the three equations. Note that the Lagrange method **doesn’t work** when:

- One or more goods are non-essential, meaning that the budget line crosses the axes
  → It’s a corner solution; i.e. the maximum point is at one of the intercepts, or at points where quantities of goods are negative
- Tastes are non-convex, where there will be multiple solutions
- [[Utility Function]] are kinked or otherwise non-differentiable
