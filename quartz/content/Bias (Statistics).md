---
aliases: []
tags:
  - Math/Statistics
created: 2023-07-27T21:53
updated: 2023-09-10T18:50
---

> [!definition]
> **Bias** is the difference between the expected value [=mean] of an estimator and the ground truth.
>

$$
\text{Bias}[\hat \theta]=\mathbb{E}[\hat\theta]-\theta_{0}
$$

thm. **Linear Transformation Preserves Bias**. If $\hat\theta$ is unbiased, $g(\hat\theta)$ is unbiased if $g$ is a linear transformation.
→ For estimators without bias, we can compute the precision to evaluate how good it is.
