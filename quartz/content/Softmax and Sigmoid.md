---
aliases: 
tags:
  - Computing/Maching-Learning
origins:
  - "[[CS 675 Deep Learning]]"
---
def. Sigmoid Function is a simple S-shaped function.
$$
\sigma(z):=\frac{1}{1+e^{ z }}
$$
![[Softmax and Sigmoid-20240911151857050.png|415]]
def. **Softmax function** takes in a vector $z$ of dimension $K$ and normalizes it into a probability distribution with $K$ different outcomes:
$$
z=\begin{bmatrix}
z_{1} \\
z_{2} \\
\vdots \\
z_{n}
\end{bmatrix} \to \sigma(z)_{i}= \frac{e^{ z_{i} }}{\sum_{j=1}^{K}e^{z_{j}}} \text{for each $i$}
$$
Sometimes if we input each $z_{i}$ separately we see it as a function that already knows $z$: ^unj2yy
$$
\sigma(z_{k}|z_{1},\dots,z_{n})= \frac{\exp(z_{k})}{\sum_{i=1}^{n} \exp(z_{i})}
$$
and it is the single-element (scalar) $\sigma_{k}$, i.e. probability of class $k$.

## Numerical Instability

When calculating softmax in floating point, when the values get big there are [[Floating Point Numerical Stability|instabilities]]. Instead, observe:

$$
\begin{align}
\text{softmax}(x)_i
&= \frac{e^{x_i}}{\sum_j e^{x_j}} \\
&= 1\cdot \frac{e^{x_i}}{\sum_j e^{x_j}} \\
&= \frac{C}{C}\frac{e^{x_i}}{\sum_j e^{x_j}} \\
&= \frac{Ce^{x_i}}{\sum_j Ce^{x_j}} \\
&= \frac{e^{x_i + \log C}}{\sum_j e^{x_j + \log C}} \\
\end{align}
$$

Which means we can add any constant $\log C$ to prevent overflow/underflow and thus `inf`s.