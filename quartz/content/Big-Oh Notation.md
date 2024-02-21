---
aliases: []
tags:
  - Math/Calculus
  - Computing/Algorithms
---
Alternative formulation of parts of calculus.

def. **Big-Oh Notation**. for functions $f,g$, we say $f(n)=O(g(n))$ iff:
- Definition 1:

$$
 \exists c\in \mathbb{R}^+ ~\forall n \in \mathbb{N}^+, f(n) \leq c \cdot g(n)
$$

- Definition 2:

$$
\lim_{ n \to \infty } \text{sup}(f(n)) < \infty 
$$

- ⇒ <u>Intuitive Understanding</u>: $f=O(g) \approx f < g$

def. **Big-Omega Notation**. For functions $f,g$ we say $f=\Omega(g)$ iff $g=O(f)$

def. **Big-Theta Notation**

$$
f=O(g) \text{ and }f=\Omega(g) \implies f= \Theta(g)
$$
