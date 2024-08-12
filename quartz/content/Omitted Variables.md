---
aliases: 
tags:
  - Math/Statistics
---
**Motivation.** What if there are external variables that are related to $Y$? We want to characterize how off we might be if we omitted a variable.

### Omitting a Variable from a True 2-var Model
Assume the true model should have the following:
$$
Y_{i}=\beta_{0}+\beta_{1}X_{i}+\beta_{2}\underbrace{ Z_{i} }_\text{ Omitted }+\epsilon_{i}
$$
We didn't take into account $Z$, and we mistakenly used the following model:
$$
Y_{i}'=\beta_{0}^{\text{omit}}+\beta_{1}^{\text{omit}}X_{1,i}+\epsilon_{i}
$$
Then, our estimators $\hat{\beta_{0}}^{\text{omit}}$ and $\hat{\beta_{1}}^{omit}$ will be different from $\hat{\beta_{0}},\hat{\beta_{1}}$. We can state precisely how off they will be (=**Omitted Variable Bias**):
$$
\hat{\beta_{1}}^{\text{omit}}=\hat{\beta_{1}}+\underbrace{ \hat{\beta_{2}}\hat{\delta_{1}} }_\text{ Bias }
$$
where $\hat{\delta_{1}}$ is from the auxiliary regression
$$
Z_{i}=\hat{\delta_{0}}+\hat{\delta_{1}}X_{i}+\tau_{i}
$$
### Omitting a Variable from a 3-var Model
- True model: $\hat{Y_{i}}=\hat{\beta_{0}}+\hat{\beta_{1}}X_{1,i}+\hat{\beta_{2}}X_{2,i}+\hat{\beta_{3}}X_{3,i}+\hat{\epsilon_{i}}$
- Omitted model: $\hat{Y_{i}'}=\hat{\beta_{0}'}X_{1,i}+\hat{\beta_{2}'}X_{2,i}+\hat{\epsilon_{i}'}$
- Estimator relationships:
	- $\hat{\beta_{1}'}=\hat{\beta_{1}}+\hat{\beta_{3}}\hat{\delta_{1}}$
	- $\hat{\beta_{2}'}=\hat{\beta_{2}}+\hat{\beta_{3}}\hat{\delta_{2}}$
- Auxiliary regression: $X_{3}=\hat{\delta_{0}}+\hat{\delta_{1}}X_{1}+\hat{\delta_{2}}X_{2}$

### General Form
For true model:
$$
\hat{Y_{i}}=\hat{\beta_{0}}+\hat{\beta_{1}}X_{1,i}+\dots+\hat{\beta_{n-1}}X_{n-1,i}+\hat{\beta_{n}}X_{n}
$$
where $X_{n}$ is the omitted variable. Our omitted model:
$$
\hat{Y_{i}}
$$
$$
\hat{\beta_{i}'}=\hat{\beta_{i}}+\hat{\beta}_{\text{omit}}\hat{\delta_{i}}
$$
where
$$
X_\text{omit}=\hat{\delta_{0}}+\hat{\delta_{1}}X_{2}+\dots+\hat{\delta}_{n-1}X_{n-1}
$$
