---
aliases: []
tags:
  - Math/Statistics
created: 2023-07-25T11:51
updated: 2023-09-10T18:55
---

def. The **Maximum [[Likelihood (Statistics)]] Estimator** is an estimator $\hat\theta$ that maximizes $\mathcal{L}$.

- It also works for log likelihood, because the natural log is a monotonic function:

$$
\begin{aligned}
\hat\theta_\text{MLE}&=\underset{\theta}{\text{max}}~\mathcal{L}_n(\theta ; x_1,...,x_n)\\
&=\underset{\theta}{\text{max}}~\ln\mathcal{L}_n(\theta ; x_1,...,x_n)
\end{aligned}
$$

Under certain regularity conditions, we can find the MLE by finding stationary points in the log likelihood. These are called the likelihood equation:

$$
\frac{\partial \ln\mathcal{L}_n(\theta)}{\partial\theta}\overset{\text{set to}}=0
$$

To consider whether this stationary point is the maximum (as opposed to a miminum) either:

- take the second derivative…
- …or find out via other means

> [!info] Properties of MLEs:

- MLEs are always a function of a sufficient statistic.
- MLEs are not necessarily unbiased.
- MLEs may not reach the CRLB in variance.

thm. Functional Equivariance of MLE: Given parameter $\theta$ and let $\alpha=g(\theta)$. Then:

$$
g(\hat\theta_\text{MLE})\overset{g ~\text{invertible}}=\hat \alpha_\text{MLE}
$$

⇒ the estimator for any function over the parameter can then be found easily.

thm. **Asymptotic Normality of MLE. [=Fisher’s Approximation]**

let data generated by a univariate single parameter distribution $X_1,…,X_n \overset{iid}\sim f(x_1,…,x_n, \theta)$.

let also that $\hat\theta_\text{MLE}$ is found by the likelihood equation $\frac{\partial s}{\partial \theta} = 0$. Then both are equivalently true:

$$
\hat\theta_\text{MLE}\overset{n\rightarrow\infty}\longrightarrow  \mathcal{N}(\theta_0, \frac{1}{\mathcal{I}(\theta_0)})
$$

$$
\sqrt{n}(\hat\theta_\text{MLE}-\theta_0)\overset{n\rightarrow \infty}\longrightarrow \mathcal{N}(0,\frac{1}{\mathcal{I}(\theta_0)})
$$