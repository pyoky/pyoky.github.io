---
uid: f3430adc-0e6d-42c1-9709-561ee650409f
aliases:
  - Lagrangian Optimization
tags:
  - Economics/Micro-Economics
  - Math/Calculus
---

## Lagrangian Method

Alg. **Lagrangian Optimization**.

Let:
- $f(x)$ the target function to optimize
- $g(x)=c$ is the constraint function
- $\lambda$ is the Lagrange multiplier.

1. (when optimizing for [[Budget Lines|budget constraint]]) Do a [[Monotonic Transformation]] on the [[Utility Function]] to make the function easier to manipulate
2. The **Lagrangian function** is constructed to find the maximum or minimum of a target function subject to constraints:
	- The Lagrangian: $\mathcal{L}(\vec{x}, \lambda) = f(\vec{x}) - \lambda(g(\vec{x}) - c)$
	- $\lambda$ is an unknown constant
3. The **first-order necessary conditions** (also known as KKT conditions) are found by taking the derivative of the Lagrangian with respect to all variables and the Lagrange multipliers, and setting them equal to zero:
	- For all $i$, $\frac{\partial L}{\partial x_i} = 0$
	- $\frac{\partial L}{\partial \lambda} = 0$
4. Feasibility condition:
	- Is it in the feasible region: $g(x) = c$?
5. Solve for $\vec{x},\lambda$ ← this is the **optimal point**

> [!example]
> Worked Example
>
> ![[Pasted image 20230905153050.png|Worked Example|625]]
[[Utility Maximization]]
