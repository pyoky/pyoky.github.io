---
aliases:
  - Compound Interest
  - Simple Interest
  - Fractional Interest
  - Continuous Compounding
tags:
  - Economics/Finance
---
How to calculate the future value of some cash.
- [[Value of Money|A dollar now is worth more than a dollar tomorrow.]]
- Can be denoted in basis points as well.
- Reverse of [[Present Value Calculations]]

### Definitions
- $k$: periods per year
- $\tau$: duration (in years)
- $n$: number of compounding periods.
	- $n=\tau\cdot k$
- $F_{0}$: Present value = Principal = Amount lent/borrowed at time $t_{0}$
	- $F_{\tau}$: Future Value = Amount at time $t_{0} + \tau$
- $r$: **annual** interest
- $R$: [[Interest Rate]]

Also:
- [[Banker's Rule]] is a common way to simplify math calculations.
- $\text{Discount Rate}=\frac{1}{1+\tau \cdot r}$.

def. **Simple Interest**
⇒ Only principal is invested at the end of each year

$$
F_{\tau} = (1+\tau \cdot r) F_{0}
$$

def. **Compound Interest**
Divide into $k$ periods per year, and compound for $n$ periods:

$$
F_{n~\text{periods}} = \left(1+\frac{r}{k} \right)^n F_{0}
$$

Divide into $k$ periods per year, and compound for $\tau$ years (equivalent formula):

$$
F_{\tau \text{ years}} = \left(1+\frac{r}{k} \right)^{\tau k} F_{0}
$$

⇒ Conceptual Demonstration of Compounding Interest:
![[Pasted image 20230828190009.png]]

def. **Continuous Compounding**
Compound for $\tau$ years (equivalent formula):

$$
F(x)= e^{ \tau \cdot r }\cdot F_{0}
$$

⇒ You can get this formula from compound interest and setting $k\to \infty$

def. **Fractional Compounding**

$$
F_{x}=\left(1+\frac{r}{k} \right)^x F_{0} \text{ where }x \in \mathcal{R}^+
$$

⇒ You can do things like "$5.35\text{ months}$ of daily compounding."

> [!theorem]
> For a fixed $\tau$, $F_{k}(\tau)$ is monotonic for $k$. ⇒ Proof in slides. (Using binomial expansion)
