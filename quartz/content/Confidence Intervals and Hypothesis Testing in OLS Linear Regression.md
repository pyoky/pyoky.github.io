---
aliases: 
tags:
  - Math/Statistics
---
See also: [[Confidence Intervals]] and [[Hypothesis Testing]]

**Motivation.** Assume we have our estimators for our sample size $N$ using OLS, $\hat{\beta_{0},\hat{\beta_{1}}}$. Now, assuming we have the true population data (impossible in real life) and take $100$ samples of size $N$ from the whole population, we get $100$ different tuple of estimators $(\hat{\beta_{0}},\hat{\beta_{1}})$. If we plot these on a graph, we get an approximate bell curve. This is due to the [[Central Limit Theorem]]. Knowing this fact, we can deduce if there is a correlation between $X$ and $Y$.
![[Ordinary Least Squares Regression-20240213172422991.png|416]]

**Remark.** $N\geq 30$ is the minimum required for CLT. $N\geq 100$ is a conservative requirement for CLT to apply.
**Remark**. We will only look at $\hat{\beta_{1}}$ since it is the more important parameter.

### Hypothesis Testing

def. The **Null hypothesis** in regression is $H_{0}:\beta_{1}=0$, i.e. there is no correlation.

def. **Regression T-test.** See [[Student's t-test]]. A T-test is a test for rejecting the null hypothesis. let the T-statistic $T=\frac{\hat{\beta_{1}}-\beta_{1}^\text{Null}}{\sqrt{ \text{Var}(\hat{\beta_{1}}) }}$. Then
$$
\begin{cases}
H_{0} & \text{if } |T|>K \\
H_{1}  & \text{otherwise} 
\end{cases}
$$
- The cutoff value $K$ is determined by how powerful (=$\alpha$) you want the test to be. This is determined by the [[Student's T-Distribution]].
	- This is because $T=_{d}t_{N-1}$
- This is [[Student's t-test]] but with only one random variable.
- Normally, we set the cutoff $K=2$, i.e. two standard deviations away. This is around an $\alpha=0.05$ test.

Table of common T-Statistic values

| Value of T   | Significance                   | Sidedness |
| ------------ | ------------------------------ | --------- |
| $\|T\|>1.95$ | $\mathbb{P}(\beta_{1}=0)<0.05$ | Two-side  |
| $\|T\|>2.58$ | $\mathbb{P}(\beta_{1}=0)<0.01$ | Two-side  |
|              |                                |           |

A Large-sample critical value is simply using the idea that as $N\to \infty$ the $T\to_{d}^{N\to \infty}\mathcal{N}$ i.e. the $T$ statistic becomes a normal distribution. Thus the cutoff values are using the standard normal table.

**Intuition.** ![Untitled](Untitled%2029.png)
### Confidence Interval

Intuition.

Bias:

standard error of regression: mean squared of residuals; also the estimator for the error

Standard error of…
- Residuals → standard error of regression
- $be$
Varaince of $\hat{\beta_{1}}$ is also the variance of CLT limit with the _same sample size_

**Remark.** *Substantive* significance does not imply *statistical* significance, nor does vice versa. The two are irrelevant.