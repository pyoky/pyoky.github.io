---
aliases: []
tags:
  - Math/Statistics
---
$$
Y_{i}=\beta_{0}+\beta_{1}X_{1i}+\beta_{2}X_{2i}+\beta_{3}X_{3i}+\epsilon_{i}
$$
> [!hint] Recall that there might be [[Omitted Variables]] in the regression. Refer to the document in that case.

### Variance of Parameter Estimators
In this multivariate model the variance of $\hat{\beta_{1}}$ is:
$$
\text{Var}(\hat{\beta_{1}})= \frac{\hat{\sigma}^2}{N\cdot \text{Var}(X_{1})\cdot(1-R_{1}^{2})}
$$
where
- $\hat{\sigma}^{2}$ is the variance of the regression
- $R_{1}$ is the coefficient of determination in the auxiliary regression $X_{1i}=\gamma_{0}+\gamma_{1}X_{2i}+\gamma_{2}X_{3i}+\epsilon_{i}$. It measures **multicolinearity**
	- & It measures how much of $X_{1}$ can be explained by $X_{2},X_{3}$
	- In perfect multicolinearity $R_{1}=1$ then $X_{2},X_{3}$ will perfectly determine $X_{1}$, thus $X_{1}$ is not relevant anymore.
	- & Equivalently $R_{2}$ is the coefficient of determination from $X_{2i}=\gamma_{0}+\gamma_{1}X_{1i}+\gamma_{2}X_{3i}+\varepsilon_{i}$, etc. etc.
- $\frac{1}{1-R_{1}^{2}}$ is known as the **variance inflation factor.** The higher the multicollinearity, the more inflated is the variance of parameter estimators.
- Multicollinearity is not a problem iff:
	- it occurs only between control variables
	- $\text{Var}(\hat{\beta_{1}})$ is small enough; i.e. $\hat{\beta_{1}}$ is statistically significant.
- $N$ is the sample size

### Coefficient of Determination
In multivariate situations (as opposed to [[Bivariate Ordinary Least Squares Regression|bivariate]]) the coefficient of determination of the whole regression ($R^{2}$) is more troublesome because
1. Adding more variables will only increase $R^{2}$
2. Thus one is incentivized to increase the number of (possibly irrelevant) independent variables.
3. To mitigate this, we report the adjusted $R^{2}$ values instead, with a penalty for each additional independent variables used.

## Hypothesis Testing regarding Coefficients

### Standardizing Coeffiefficients

**Example.** In the model $\text{GDP}=\beta_{0}+\beta_{1}\text{Life Expectancy}+\beta_{2}\text{Literacy Rate}$, if we want to compare the effects of life expectancy and literacy, we cannot simply compare the values of $\beta_{1},\beta_{2}$. This is because their units are different, i.e. $\beta_{1}$ is in $\frac{\text{Dollars}}{\text{Year}}$ and literacy is in $\frac{\text{Dollars}}{\text{Percentage Point}}$. Thus we need to standardize them:
$$
\hat{\beta_{i}^{\text{std}}}=\frac{\hat{\beta_{i}}-\mathbb{E}(\hat{\beta_{i}})}{\sqrt{ \text{Var}(\hat{\beta_{i}}) }}
$$
which shows "how much $Y$ increase in units of $\sigma_{Y}$ does one unit $\sigma_{X_{i}}$ increase in $X$ cause?"

**Remark.** Only $X_{1}$ and $X_{2}$ need be standardized to compare $\hat{\beta_{1}}$ and $\hat{\beta_{2}}$'s effects. $Y$ need not be standardized.

### Hypothesis Testing about Coefficients

Let the model $Y_{i}=\beta_{0}+\beta_{1}X_{1,i}+\beta_{2}X_{2,i}+\beta_{3}X_{3,i}+\epsilon_{i}$. Sometimes we may want to check if $\hat{\beta_{1}}=^?\hat{\beta_{2}}$, or $\hat{\beta_{1}}=\hat{\beta_{2}}=^?0$. In these cases we use a hypothesis test. Let $R^{2}_{\text{unrestricted}}$ be the $R^{2}$ of this regression. Now, before we do anything we need to…

> [!warning] First, we must standardize the variables in question, in this case $X_{1},X_{2}$.

<u>Case 1:</u> $H_{0}:\hat{\beta_{1}}=\hat{\beta_{2}}=0$. Then the model under null would change to:
$$
Y_{i}=\beta_{0}+\beta_{3}X_{3,i}+\epsilon_{i}
$$
We run regression on this new model and get $R^{2}_{\text{restricted}}$
**Remark**. This is _not_ equivalent to running a t-test on $H_{A}:\hat{\beta_{1}}\neq 0\hat{\land}\beta_{2}\neq 0$ because $X_{1},X_{2}$ may be multicollinear.

<u>Case 2</u>: $H_{0}:\hat{\beta_{1}}=\hat{\beta_{2}}$. Then the model under null would change to:
$$
Y_{i}=\beta_{0}+\beta_{1}(X_{1,i}+X_{2,i})+\beta_{3}X_{3,i}
$$
We run regression on this to also get $R^{2}_{\text{restricted}}$.

We can observe that in both cases, $R^{2}_{\text{unrestricted}}>R^{2}_{\text{restricted}}$, always, because "restricting" the model will lead only to less (coefficient of-) determination. Now, _the bigger this difference is, the more likely that the null is false._ We formalize this using the $F$-test:

def. **F-Test.** For the F-statistic defined as:
$$
F_{q,N-k}\coloneqq \frac{(R^{2}_{\text{unres.}}-\textcolor{red}{ R^{2}_{\text{restr.}} })/q}{(1-R^{2}_{\text{unres}})/(N-k)}
$$
where
- $q$ is "how many equal signs in null hypothesis"
- $k$ is the degrees of freedom (=number of coefficients in the _un_restricted model)
Then:
$$
\begin{cases}
H_{0} & \text{else} \\
H_{1} & \text{if }F>K
\end{cases}
$$
where $K$ is the critical value. The critical values are:
- $K=3.00$ in case 1 ($H_{0}:\hat{\beta_{1}}=\hat{\beta_{2}}=0$)
- $K=3.84$ in case 2 ($H_{0}:\hat{\beta_{1}}\neq  \hat{\beta_{2}}$)
