---
aliases: []
tags:
  - Economics/Game-Theory
---
def. Zero Sum Game. When each box in the payoff (cost) matrix sums to zero.

thm. **Min-Max Theorem.** The [[Equilibria in Game Theory#^8bea2b|stackleberg solution]] in a zero-sum game for player one going first, is same for player two going first. Thus this is a mixed nash equilibirum. You can compute this using [[Linear Programming]].
*Example.* In the following game:
![[Equilibria in Game Theory-20240212182144101.png|367]]
Row player will aim to: ^81b8db
$$
\overbrace{ \text{max}_{x_{1},x_{2}} \underbrace{ \text{min}(\underbrace{ 3x_{1}-2x_{2} }_\text{ column goes left},\underbrace{ -x_{1}+x_{2} }_\text{ column goes right }) }_\text{column's expected strategy } }^\text{ Given column's expected strategy, the best response }
$$
This is also known as the **Stackleberg solution**. Letting $z=\text{min}(3x_{1}-2x_{2},-x_{1}+x_{2})$ we have the following linear program: ^8bea2b
$$
\begin{align}
z&\leq 3x_{1}-2x_{2} \\
z&\leq -x_{1}+x_{2} \\
1&=x_{1}+x_{2} \\
0&\leq x_{1},x_{2}
\end{align}
$$
Equivalently, column player will aim to $\text{min}_{y_{1},y_{2}}\text{max}(3y_{1}-y_{2},-2y_{1}+y_{2})$. Letting $w=\text{max}(3y_{1}-y_{2},-2y_{1}+y_{2})$ We have the following linear program:
$$
\begin{align}
w&\geq 3y_{1}-y_{2} \\
w&\geq-2y_{1}+y_{2} \\
1&=y_{1}+y_{2} \\
0&\leq y_{1},y_{2}
\end{align}
$$
In a [[Zero Sum Game]] like this game, the above two linear programs are *dual problems to each other*. The solution to both of these programs are:
$$
\begin{cases}
x_{1}=\frac{3}{7},x_{2}=\frac{4}{7} \\
y_{1}=\frac{2}{7},y_{2}=\frac{5}{7}
\end{cases}
$$
