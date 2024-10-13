---
aliases: 
tags:
  - Math
origins:
  - "[[CS 675 Deep Learning]]"
---
Norms are a measure of a number or vector's distance from the origin.

### For Scalars

def. **Absolute Value or L1 Norm**. For real or complex number $x$ its norm is simply the distance from the origin.

### For Vectors in $n$-dim space

def. **Euclidian Distance or L2 Norm**. For vectors, the euclidian norm of a vector $\vec{x}$ in $\mathbb{R}^n$ is:
$$
||\vec{x}||_{2}=\left( \sum_{\forall i}x_{i}^{2} \right)^{ 1/2}
$$

### For Matricies

Motivation. As [[방무창]] explained, matricies also live in vector spaces $\mathbb{R}^{m\times n}$. Thus it would also have a notion of "distance from origin." The matrix norm must satisfy the following conditions for it to be reasonable:
1. $||A||\geq 0$
2. $||A||=0 \iff A\text{ is all zeros}$
3. $||\alpha \cdot A||=| \alpha|\cdot ||A||$ (absolutely [[Homogenous Function|homogenous]])
4. ! $||A||+||B||\geq ||A+B||$ (triangle ineuqality)

def. **Frobeinus Norm.** For a matrix $A$ of shape $n \times m$ the Frobeinus norm is:
$$
||A||_{F}:=\left( \sum_{\forall i,j}A_{ij}^{2} \right)^{1/2}
$$
*Visualization.* [matrices - What is the difference between the Frobenius norm and the 2-norm of a matrix? - Mathematics Stack Exchange](https://math.stackexchange.com/a/3578854)
