---
aliases: 
tags:
  - Computing/Maching-Learning
---
Softmax function takes in a vector $z$ of dimension $K$ and normalizes it into a probability distribution with $K$ different outcomes:
$$
z=\begin{bmatrix}
z_{1} \\
z_{2} \\
\vdots \\
z_{n}
\end{bmatrix} \to \sigma(z)_{i}= \frac{e^{ z_{i} }}{\sum_{j=1}^{K}e^{z_{j}}} \text{for each $i$}
$$

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