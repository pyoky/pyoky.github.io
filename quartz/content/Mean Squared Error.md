---
aliases: []
tags:
  - Math/Statistics
created: 2023-09-10T18:49
updated: 2023-09-10T18:50
---

def. **Loss function** is a function that encapsulates the “closeness” of the estimate and ground truth. For example a loss function may measured the geometric closeness by:

$$
\mathbb{L}(\theta,e)=(\theta-a)^2
$$

def. **Mean Squared Error** (MSE) is the arithmetic mean of the loss function defined:

$$
\begin{aligned}
\text{MSE}(\hat\theta)&=\mathbb{E}_X[(\hat \theta-\theta)^2]\\

&=\int_{x=-\infty}^\infty (\hat \theta-\theta)^2 f_{X|\theta=\hat\theta}(x)

\end{aligned}
$$

> [!info]
 The following shows why MSE is useful; it is just a sum of variance and bias squared.

> 
$$
> \mathbb{E}_X[(\hat\theta-\theta)^2]=\text{Var}[\hat\theta]+\text{Bias}[\hat \theta]^2
> 
$$
