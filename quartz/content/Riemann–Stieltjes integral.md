---
aliases: 
tags:
  - Math/Calculus
---
def. **Riemann-Stieltjes Integral.** let functions $f(x),g(x):\mathbb{R} \to \mathbb{R}$. Then the R-S integral with $f(x)$ as the integrand and $g(x)$ as the integrator is defined:
$$
\begin{align}
\int _{a}^b f(x)\, dg(x)= \lim_{ n \to \infty } \sum_{i=0}^nf(x_{i})[g(x_{i+1})-g(x_{i})]
\end{align}
$$
where $a= x_{0}\leq\dots\leq x_{n}=b$

**Visualization.** The value of the integral is the shadow projection of the purple fence (=from $x-g$ plane to the intersecting line of $f(x)$ and $g(x)$). The lower the slope of $g(x)$, the _denser_ the shadow is. See: [Riemann–Stieltjes integral - Wikiwand](https://www.wikiwand.com/en/Riemann%E2%80%93Stieltjes_integral#Geometric_interpretation)

![[Riemann–Stieltjes integral-20240212142114652.png|519]]
