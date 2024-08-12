---
aliases: 
tags:
  - Math/Statistics
---
Regression Discontinuity analysis is useful when
1. The _assignment variable_ ($\approx$independent variable) is continuous (not binary)
    1. "Treatment" thus simply means after-cutoff
    2. We can't just use [[Dummy Variables#^d53e17|Difference of Means]] because the assignment variable continuously changes in each groups too and thus affects the dependent variable too.
2. No other factors change when crossing the cutoff
Then we can use the basic (constant-slopes) RD model:
$$
Y_{i}=\beta_{0}+\beta_{1}\underbrace{ T_{i} }_\text{ treatment var. }+\beta_{2}\underbrace{ (X_{1i}-C) }_\text{ assignment var. }+\epsilon_{i}
$$
where:
- $C$ is the cutoff point
- $T$ is $1$ for post-cutoff, $0$ for pre-cutoff. Simulates "treatment"
- $X_{1}$ is the assignment variable (non-adjusted).
where coefficients mean:
- $\hat{\beta_{1}}$ is the causality of treatment
- $\hat{\beta_{2}}$ is the causality of the assignment var
![[Discontinuities-20240501120726530.jpeg|423]]


- Error term shouldn't be jumping at the cutoff, i.e. we should have $\rho_{X_{1},\epsilon}=0$
    - If $\rho_{X_{1},\epsilon}\neq 0$ then $\epsilon=\rho X_{1i}+\nu_{i}$ thus the basic RD model from above becomes: 
$$
Y_{i}=\beta_{0}+\beta_{1}T_{i}+\beta_{2}(X_{1i}-C)+\rho X_{1i}+\nu_{i}
$$
    - → Thus even if $\rho_{X_{1},\epsilon}\neq 0$, $\hat{\beta_{1}}$ is unbiased (i.e. still correctly indicates the causality between treatment and $Y$)!
    - But $\hat{\beta_{2}}$ no longer indicates causality between $X_{1}$ and $Y_{i}$, instead just indicates. overall correlation.

## Advanced RD

We don't need to limit ourselves to have the slopes be same before and after discontinuity by using the **varying slopes model**:
$$
Y_{i}=\overbrace{ \underbrace{ \beta_{0} }_\text{ intercept before }+\beta_{1}T_{i} }^\text{ intercept after }+\underbrace{ \beta_{2} }_\text{ slope before }(X_{1i}-C)+\underbrace{ \beta_{3} }_\text{ slope after }(X_{1i}-C)\times T_{i}+\epsilon_{i}
$$

Smaller windows → probably linear

### Issues with RD Analysis
- Smaller *window* (=bandwidth): We must look at variables close to the cutoff (because the farther away you go, the more endogenity there might be) But this isn't always possible because of limited sample size.
- Probably only estimates the **Local Average Treatment Effect (LATE)**, meaning that you can't generalize the results. ("Are effects of drinking (vial legal age) on grades affect babies? old econometrics professors?")
- Multiple variables usually determine treatment or not. (medicare and age is clear-cut; SAT and college admission isn't) → use **Fuzzy RD** model
    - Or, we can use the [[Controlled Experiments#^d8b98b|Balace Test]] to see if the side of the cutoff is truly *random*
- Error term jumps at discontinuity (the issue from above)
    - To check, make sure the frequency of the assignment variable is smooth at cutoff (e.g. the number of people (=samples) with SAT scores just below 1500 and just above 1500 isn't too different from the rest of the grade.)
        - If there is, it might mean that people under 1500 wanted to get into colleges with cutoff score at 1500, so studied a little bit harder.
    - Visualization. ![[Discontinuities-20240501122239843.png]]
    - Another way to check this is to run regression between covariate (which we suspect to be in the error term) and the RD model: $X_{2i}=\gamma_{0}+\underbrace{ \gamma_{1} }_\text{ jump }T_{i}+\gamma_{2}(X_{1i}-C)+\nu_{i}$
        - A Statistically significant $\gamma_{1}$ indicates $X_{2}$ is in the error term

