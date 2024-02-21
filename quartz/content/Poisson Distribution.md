---
aliases: []
tags:
  - Math/Common-Distributions
---

See also: [[Poisson Limit Theorem]]

def. **Poisson Distribution.** A random variable $X$ which model the number of events in a fixed interval of time, where each event is rare and there is a large number of events, is well modeled by a Poisson Distribution with the _intensity_ of the event $\lambda$:

$$
X\sim \text{Poisson}(\lambda) \\[1em]
P(X=k)=e^{-\lambda}\frac{\lambda^k}{k!}
$$

- $\mathbb{E}(X)=\lambda$
- $\mathbb{SD}(X)=\sqrt{\lambda}$
- $\mathbb{P}(X<n)=\sum_{k=0}^{n-1}e^{-\lambda} \frac{\lambda^k}{k!}$

## Estimators

let $X_1,…,X_n\sim \text{Poi}(\lambda)$

$$
\ln \mathcal{L}_n=\frac{\lambda^{\sum_{i=1}^n x_i}e^{n\lambda}}{\prod_{i=1} x_i!}
$$

$$
s_n=\frac{\sum _{i=0}^n x_i}{\lambda }-n
$$

$$
\hat\lambda_\text{MLE}=\frac{\sum_{i=1}^nx_i}{n}=\bar X_n
$$

| single                | multiple                |
| --------------------- | ----------------------- |
| $I=\frac{1}{\lambda}$ | $I_n=\frac{n}{\lambda}$ |
