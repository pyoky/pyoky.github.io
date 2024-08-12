---
aliases: []
tags:
  - Math/Statistics
---
**Motivation.** Let's say that there is a relationship between GDP per capita and life expectancy. Maybe god has declared a perfect formula describing this relationship:
$$
\text{GDP Per Capita}=200\cdot \text{Life Expectancy}+1000+\text{Noise}
$$
While we humans may never truly know the parameters of the formula, $200$ and $1000$, we can still make a good guess about it. Therefore, assuming this is a linear relationship, we have the Bivariate Ordinary Least Squares Model.
$$
Y_{i}=\beta_{0}+\beta_{1}X_{i}+\epsilon_{i}
$$
where $(X_{1},Y_{1}),\dots,(X_{n},Y_{n})$ are observations (=regressors). The OLS algorithm will minimize the squared sum of residuals:
$$
\text{min}_{\hat{\beta_{1}},\hat{\beta_{0}}}\sum_{i=1}^{N}\hat{\epsilon_{i}}^{2}
$$
where $\hat{\epsilon_{i}}\coloneqq Y_{i}-\underbrace{ (\hat{\beta_{0}}+\hat{\beta_{1}}X_{i}) }_{ =\hat{Y} }$. ==Note the square.==

thm. **Parameter OLS Estimator** for $N$ observations $(X_{i},Y_{i})$
$$
\begin{align}
\hat{\beta_{1}}&\coloneqq \frac{\sum_{i=1}^N(X_{i}-\bar{X})(Y_{i}-\bar{Y})}{\sum_{i=1}^N(X_{i}-\bar{X})^{2}} \\ 
 & \coloneqq \frac{\sigma_{XY}}{\sigma_{X}^{2}}=\rho_{XY} \frac{\sigma_{Y}}{\sigma_{X}}\\ \\
\hat{\beta_{0}}&\coloneqq \bar{Y} - \hat{\beta_{1}}\bar{X} \\
\end{align}
$$
**Properties.**
- Predictor: $\hat{Y_{i}}=\hat{\beta_{0}}+\hat{\beta_{1}}X_{i}$
- Residual: $\hat{\epsilon}\coloneqq Y_{i}-\hat{Y}$ is the estimator for the error term, i.e. how good the predictor is.
	- $\frac{1}{N}\sum_{i}^N\hat{\epsilon_{i}}=0$ i.e. the mean of residuals is zero in OLS algorithm.
- OLS results in assuming that $X$ is exogenous, i.e. $\rho_{X,\epsilon}=0$.
	- $\rho$
- _Regression Variance_: $\hat{\sigma}^2=\frac{\sum_{i=1}^N\hat{\epsilon_{i}}^2}{N-k}=\frac{\sum_{i=1}^N(Y_{i}-\bar{Y})^2}{N-k}$ where $k$ is the number of parameters ($k=2$ in this case)
	- basically the [[Mean Squared Error]]. The lower the better.
	- $\hat{\sigma}$ is also the _standard error of the residuals_.
	- In _Stata_, $\hat{\sigma}$ is called the `Root MSE`

**Evaluation of Estimators.**
- Mean of $\hat{\beta_{1}}$: $\mathbb{E}(\hat{\beta_{1}})=\beta_{1}+\rho_{X,\epsilon}\frac{\sigma_{\epsilon}}{\sigma_{X}}$
	- Thus _bias_ is $\rho_{X,\epsilon}\frac{\sigma_{\epsilon}}{\sigma_{X}}$
	- If $\rho_{X,\epsilon}=0$ then exogenous (this is the definition of exogeniety)
	- If $\rho_{X,\epsilon}>0$ then there's some 3rd factor positively correlated with $X$, thus bias is positive.
	- If $\rho_{X,\epsilon}<0$ then v.v.
	- & Thus the bias characterizes exogeniety
- Variance of $\hat{\beta_{1}}$: $\text{Var}(\hat{\beta_{1}})=\frac{\hat{\sigma}^2}{N\cdot \text{Var}(X)}$
	- This is also called _precision_
	- $\sqrt{ \text{Var}(\hat{\beta_{1}}) }$ is also called _standard error_ of $\hat{\beta_{1}}$.
	- ! For random variables, $\sqrt{ \text{Var}(X) }$ is called standard deviation. For estimator random variables, it is called standard error. An abuse of terminology.

## Other Data when Regression is Run

There are a bunch of other variables that may matter, that is not included in the above core set of variables of the regression. Here are a few:

def. **Coefficient of Determination (R-Squared).** _Intuition_: The proportion of the variation in $\hat{Y}$ that can be determined from $X$. We define it as:
$$
R^2\coloneqq 1- \frac{SS_{res}}{SS_{tot}}
$$
where
- $SS_{res}\coloneqq \sum_{i}\hat{\epsilon_{i}}^{2}=\sum_{i}(Y_{i}-\hat{Y_{i}})^{2}$ <span style="float:right;">residual sum of squares</span>
- $SS_{tot}\coloneqq \sum_{i}(Y_{i}-\bar{Y})^{2}$ <span style="float:right;">total sum of squares</span>

**Example.** A $R^{2}$ of $0.67$ means that around $67\%$ of the variation in $\hat{Y}$ is explained by $X$. Therefore, the higher it is, the better the regression is (=has more explanatory power).

**Remark.** It can also be shown that:
$$
R^{2}=\rho_{Y,\hat{Y}}^{2}
$$
## Measurement Error

**Motivation.** There are measurement errors in every data; it can be both in the independent variable $X$ or the dependent variable $Y$. We can characterize measurement error (in this case a measurement error in $X$) as:
$$
X_{i}=X_{i}^{*}+v_{i}
$$
where $v_{i}$ is randomly distributed with $\mathbb{E}(v_{i})=0$ and std. dev. $\sigma_{v}$, which is the measurement error. In this case, the regression in the model $\hat{Y_{i}}=\hat{\beta_{0}}+\hat{\beta_{1}}X_{i}+\hat{\epsilon}_{i}$ will also change, into:
$$
\hat{\beta_{1}}=_{n\to \infty}\beta_{1}\frac{ \sigma_{X^{*}}^{2}}{\sigma_{v}^{2}+\sigma_{X^{*}}^{2}}
$$
We can extract a couple of facts from this relationship:
- **Attenuation bias**: the greater the $\sigma_{v}$, the closer $\hat{\beta_{1}}$ is to zero.
- if $\sigma_{v}=0$ then $\hat{\beta_{1}}=\beta_{1}$, i.e. no measurement error

Alternatively, if there is a measurement error in $Y_{i}$, then:
1. Measurement error: $Y_{i}=Y_{i}^{*}+v_{i}$ where $\mathbb{E}(v_{i})=0$ and std. dev. $\sigma_{v}$
2. Error term $v_{i}$ is absorbed by error term $\hat{\epsilon_{i}}$
3. This will increase $\hat{\sigma}$ (variance of regression) and thus $\text{Var}(\hat{\beta_{1}})$, but does not bias the estimator.

## Issues to Watch out for

**Heteroskedasticity** is when the variance of data is different for some subsets of data than other subsets. ⇒ Use heteroskedatic-consistent standard errors by using `robust` in stata. This does not affect value of $\hat{\beta_{1}}$ (how!) and does not bias it.

**Autocorrelation** often occurs in time series data where the error terms are sticky. For example, attendance at a NY yankees game will be sticky, because people who watched a good year will probably come back next year, even if the yankees aren't as good as the year before. → used lagged variables
