---
aliases: []
tags:
  - Math/Calculus
---

## L'Hôpital's Rule

$$
\lim_{ x \to c } \frac{f(x)}{g(x)}=\lim_{ x \to c }\frac{f'(x)}{g'(x)} 
$$

Inapplicable Scenarios

Sure, here are the limit laws in markdown table format:

| Laws                 | Description                                               |
|----------------------------|-----------------------------------------------------------|
| Constant Law               | $\lim_{x \to a} c = c$                                    |
| Identity Law               | $\lim_{x \to a} x = a$                                    |
| Sum/Difference Law         | $\lim_{x \to a} [f(x) \pm g(x)] = \lim_{x \to a} f(x) \pm \lim_{x \to a} g(x)$ |
| Product Law                | $\lim_{x \to a} [f(x) \cdot g(x)] = \lim_{x \to a} f(x) \cdot \lim_{x \to a} g(x)$ |
| Quotient Law               | $\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{\lim_{x \to a} f(x)}{\lim_{x \to a} g(x)}$ (if $\lim_{x \to a} g(x) \neq 0$) |
| Exponentiation Law         | $\lim_{x \to a} [f(x)]^n = [\lim_{x \to a} f(x)]^n$      |
| Composition Law            | $\lim_{x \to a} [f(g(x))] = f(\lim_{x \to a} g(x))$       |
| Squeeze Theorem            | If $f(x) \leq g(x) \leq h(x)$ for all $x$ in some interval containing $a$, and $\lim_{x \to a} f(x) = L = \lim_{x \to a} h(x)$, then $\lim_{x \to a} g(x) = L$. |
| Intermediate Value Theorem | If $f(x)$ is a continuous function on the closed interval $[a, b]$ and $C$ is any number between $f(a)$ and $f(b)$, then there exists at least one number $c$ in the interval $(a, b)$ such that $f(c) = C$. |
