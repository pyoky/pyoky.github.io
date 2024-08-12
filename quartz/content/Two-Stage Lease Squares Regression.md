---
aliases:
  - 2SLS
tags:
  - Math/Statistics
---
**Motivation.** Instrumental variables are an advanced way of removing endogenity. Suppose you want to see the effects of police on crime rates. But does crime cause more police to be hired, or does more police cause less crime? Because of this circularity, it's hard to isolate simply the causality from police to crime rates.
So to isolated the exogenous variation in police hiring (i.e. get the pure exogenity), we can use a proxy or instrumental variable: firefighters. Exogenous factors both cause firefighters and police to be hired (policy changes, citizen support) but they don't cause crime rates to increase.

## 2-Stage Lease Squares

Instrumental variables are implemented using 2SLS.
1. We have the first stage (=reduced form), where we regress the independent variable (police) with instrumental variable (firefighters):
$$
\underbrace{\textcolor{red}{  \hat{X_{1i}} } }_\text{ police }=\gamma_{0}+\gamma_{1}\underbrace{ Z_{i} }_\text{ firefighters }+\gamma_{2}\underbrace{ X_{2i} }_\text{ some control }+\nu_{i}
$$
2. Then we take the ==police estimator $\hat{X}_{it}$ (not the actual data!)== and then regress dependent (crime) against estimated independent (estimated police):
$$
Y_{i}=\beta_{0}+\beta_{1}\underbrace{\textcolor{red}{  \hat{X}_{1i} } }_\text{ estimated }+\beta_{2}\underbrace{ X_{2i} }_\text{ control }+\epsilon_{i}
$$
**Visualization.** ![[Two-Stage Lease Squares Regression-20240501132515951.png|385]]
### What Are Good Instrumental Variables?
1. Inclusion condition: $Z$ needs to have meaningful influence on $X$
    1. Satisfied when in the first stage $\gamma_{1}$ is significant at 1%.
2. Exclusion condition: $Z$ needs to have no infludence on $Y$
    - in other words, $Z$ and $\epsilon$ should not be correlated.
    - But this cannot be tested directly because $\epsilon$ is not observed.
        - → thus the exclusion condition is more of a "it's probably okay" argument
    1. ! running regression $Y$ against $Z$ might seem prudent but actually if $Z$ is correlated with $\hat{X}$ and $\hat{X}$ with $Y$ then it will always be significant
    2. The best we can do is include more controls we assume are inside $\epsilon$ that correlate with $Z$, such that the new $\epsilon$ with more controls are not correlated to $Z$.

## Multiple Instruments

Perform the first stage with each instruments $Z_{1},Z_{2},\dots$:
$$
X_{1i}=\gamma_{0}+\gamma_{1}Z_{1i}+\gamma_{2}Z_{2i}+\dots+\nu_{i}
$$
and then same for the second stage.

**Over-identification test** tests the exclusion restriction. if you've gotten the correct multiple instrumental variables. (Overidentification is a good thing.) If we want to see if $Z_{1}$ and $Z_{2}$ together satisfy the exclusion condition we test:
1. First stage just with $Z_{1}$ to get $\hat{X_{1}}^{Z_{1}}$. Then the second stage to get $\hat{\beta_{1}}^{Z_{1}}$
2. First stage just with $Z_{2}$ to get $\hat{X_{1}}^{Z_{2}}$. Then the second stage to get $\hat{\beta_{1}}^{Z_{2}}$
3. If $\hat{\beta_{1}}^{Z_{1}} \approx \hat{\beta_{1}}^{Z_{2}}$ then good!
4. ! but if they're similar this might just mean that both are bad in similar ways…
5. And If they're different, there's no way of knowing which one is the better one
Alternatively, run
$$
\hat{\epsilon_{i}}=\hat{\alpha_{0}}+\hat{\alpha_{1}}Z_{1i}+\hat{\alpha_{2}}Z_{2i}+\alpha_{3}X_{2i}
$$
and then F-test: $H_{0}:\alpha_{1}=\alpha_{2}=0$. A exclusion-condition compatible IV should not be jointly significant. But this is also inaccurate in the same way described above.
## Comparison with Ordinary Least Squares

We should use 2SLS instead of OLS when we know that $X$ is very much endogenous, and we have found a good IV, $Z$ that satisfies the inclusion and exclusion conditions. To test if $X$ is endogenous enough for 2SLS to be useful, we use the following:
def. **Durbin-Wu-Hausman Test** of $X$'s endogenity. Observe first the fact that assuming $Z$ is exogenous:
- if $X$ is exogenous: $\hat{\beta}^{\text{OLS}}\approx  \hat{\beta}^{\text{2SLS}}$
    - i.e. $\rho_{X,\epsilon}\approx 0$ already, so why use IV or 2SLS?
- if $X$ is endogenous: $\hat{\beta}^{\text{OLS}}\neq  \hat{\beta}^{\text{2SLS}}$
    - i.e. $\rho_{X,\epsilon}\neq 0$ so we must use IV or 2SLS!
The test has null hypothesis $H_{0}:\hat{\beta}^{\text{OLS}}= \hat{\beta}^{\text{2SLS}}$. If we reject the null, then we should use 2SLS.
### Bias in 2SLS

- def. **Quazi-instruments** are instruments where there exists some (small) $\rho_{Z,\epsilon}\neq 0$ (Usually okay, see below)
- def. **Weak Instruments** are instruments where there exists some $\rho_{Z,X_{1}}\neq 0$. (Usually bad, see below)
It's sometimes okay to have some correlation between $Z$ and $\epsilon$, but having correlation between $Z$ and $X_{1}$ is pretty bad. To see why, observe the 2SLS bias of $\hat{\beta_{1}}$
$$
\lim_{ n \to \infty } \hat{\beta_{1}}^{\text{2SLS}}=\beta_{1}+ \underbrace{ \frac{\rho_{Z,\epsilon}}{\rho_{Z,X_{1}}} \frac{\sigma_{\epsilon}}{\sigma_{X_{1}}} }_\text{ bias }
$$
Compare this to vanilla OLS (for [[Consistency]] $\rho_{X,\epsilon}=0$):
$$
\lim_{ n \to \infty } \hat{\beta_{1}}^{\text{OLS}}=\beta_{1}+\underbrace{ \rho_{X,\epsilon}\frac{\sigma_{\epsilon}}{\sigma_{X}} }_\text{ bias }
$$
This implies
- When it has a strong first stage relationship (=$\rho_{Z,X_{1}}$ is small) the 2SLS's $\hat{\beta_{1}}^{\text{2SLS}} is be\text{er}$
- & If $\frac{\rho_{Z,\epsilon}}{\rho_{Z,X_{1}}}<1$ then 2SLS has less bias than vanilla OLS even if $\rho_{Z,\epsilon}\neq 0$
- ! If $\frac{\rho_{Z,\epsilon}}{\rho_{Z,X_{1}}}>1$ then 2SLS amplified any small correlation $\rho_{Z,\epsilon}$ and easily becomes worse than vanilla OLS

> [!hint] Rule of Thumb for determining weak instruments
> Use 2SLS with instrument $Z$ when in the first stage regression the test
> 
$$
\begin{cases}
> H_{1} & \text{if } \gamma_{0}=\gamma_{1}=\gamma_{2}=\cdots \\
H_{0} & \text{if else}
\end{cases}
> 
$$
> i.e. an F-test, $F>10$.

- Even when $\rho_{Z,\epsilon}=0$, since the above equations are for $\lim_{ n \to \infty }$, when $n$ is small bias still exists (in the same direction as OLS).
    - This bias will eventually go away in bigger $n$ (or, of $\rho_{Z,\epsilon}\neq$, go the opposite way!)
### Precision of 2SLS

Recall multivariate OLS variance of coefficients is:
$$
\text{Var}(\hat{\beta_{1}})= \frac{\hat{\sigma}^2}{N\cdot \text{Var}(X_{1})\cdot(1-R_{1}^{2})}
$$
The 2SLS variance of coefficient is:
$$
\text{Var}(\hat{\beta_{1}})= \frac{\hat{\sigma}^{2}}{N\cdot \text{Var}(\hat{X_{1}})\cdot(1-R_{\hat{X_{1}}^{NoZ}}^{2})}
$$
The differences are:
- $\hat{\sigma}^{2}$(=second stage regression variance) may be larger because $\epsilon$ has been purged
    - This simplies that explainatory power in the observed $X_{1i}$ that were correlated with $\epsilon$ is purged (=thus total reduced)
- $\text{Var}(\hat{X_{1}})$, not $\text{Var}(X_{1})$ because we use estimates (see above) not actual data during regression
    - $\text{Var}(\hat{X_{1}})$ is probably smaller because we purged $\epsilon$-related variance.
- ! $R_{\hat{X_{1}}^{NoZ}}^{2}$ is the R-squared from the new regression 
$$
\hat{X_{1,i}}=\pi_{0}+\pi_{1}X_{2i}+\eta_{i}
$$
    - This regression determines how much does $X_{2}$, not $Z$, determines $\hat{X_{1}}$.
    - $R^{2}$ in this regression thus measures the collinearity of $\hat{X_{1}}$ and $X_{2}$ (=controls)
        - btw, $R^{2}$ in the second regression doesn't mean shit.
    - The lower the explanatory power of $Z$ on $\hat{X_{1}}$, the higher this value is, and the higher the variance of the 2SLS coefficient is.
