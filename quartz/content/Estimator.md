---
aliases: []
tags:
  - Math/Statistics
created: 2023-07-25T11:51
updated: 2023-09-10T18:52
---
def. **Statistic**. let $X_1,…,X_n$ observable random variables [= data of an experiment]. then statistic $T$ is:

$$
T=\delta(X_1,...,X_n)
$$

- $\delta:\{X_1,…,Xn\}\rightarrow R$ i.e. is a real-valued function
- $\delta$ cannot contain unknown variables

_def_. **Estimator** [= point estimate] is a statistic used to estimate the parameter of the model we think the data is showing. Note the following notation convention:

$$
\hat\theta=\delta(X_1,...,X_n)
$$

- Assume $X$ as an r.v. of an experiment, whose model includes parameter $\theta$.
- To estimate ground truth parameter $\theta$, we can use an estimator r.v. $\hat \theta(X)$
- A specific estimate for a particular observed value $x_1$ is denoted $\hat \theta (x_1)$
- **An estimator has to be a function of known variables & data only.**
- $Var(\hat\theta)=E[(\hat\theta - {\color{red}E}\hat\theta)^2]$, NOT $E[(\hat\theta-\theta)^2]$ ← This is MSE

## How Good is Your Estimator?

1. **Accuracy** is higher. Increased as [[Bias (Statistics)]] is **decreased**
2. **Precision** is higher. Increased as [[Variance]] $V(\hat{\theta})$ is **decreased**
3. **[[Efficiency (Statistics)]]** is higher. If estimators $\hat\theta_1, \hat\theta_2$ have the same accuracy, but $\mathbb{V(\hat\theta_1)}<\mathbb{V}[\hat\theta_2]$ then the former is **more efficient** than the latter.
4. [[Consistency]].
5. **[[Mean Squared Error]]** is lower.
6. [[Likelihood (Statistics)]] is higher.

→ In general, making sure to reduce bias of estimators is important. Note that:
- If you can write down what the bias is mathematically [= characterize the bias], then you can make a new estimator that doesn’t have the bias.
- Bias usually decreases as the data points increase

> [!example]
>
> let $X_1,…,X_n \overset{iid}\sim \mathcal{N}(\mu, \sigma^2)$ and
> let estimator $\hat \theta:=\sum_i^na_iX_i$ where
>
> - $a_1,…,a_n$ are weights that sum to 1. [= weighted average]
> - $\hat\theta$ is estimating $\mu$. $\sigma$ is known.
>
> ---
>
> 1. How _accurate_ is $\hat\theta$? [=what is the bias?]
>
> 
$$
> \begin{aligned}
> \mathbb{E}[\hat\theta]&=\mathbb{E}[\sum a_iX_i]\\
> &=\sum \mathbb{E}[a_iX_i]\\
> &=\sum a_i\mathbb{E}[X_i]\\
> &=\mu\\
> \mathbb{B}(\hat\theta)&=0
> \end{aligned}
> 
> 
> 
$$
>
> 1. How precise is $\hat\theta$? What are the best $a_i,…,a_n$?
>
> 
$$
> \begin{aligned}
> \mathbb{V}(\hat\theta)&=\mathbb{V}[\sum a_i X_i]\\
> 
> &=\mathbb{V}[a_1X_1]+\cdots \mathbb{V}[a_nX_n]\\
> &=a_1^2 \mathbb{V}[X_1]+\cdots a_n^2 \mathbb{V}[X_n]\\
> &=a_1^2\sigma^2+\cdots a_n^2\sigma^2\\
> &=\sigma^2\sum a_i^2
> 
> \end{aligned}
> 
> 
> 
$$
>
> → Thus $\mathbb{V}[\hat\theta]$ is minimized when $a_i=\frac{1}{n}$.
>
