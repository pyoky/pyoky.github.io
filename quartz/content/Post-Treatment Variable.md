---
aliases: 
tags:
  - Math/Statistics
---
Post-treatment variables are variables that confound the "controlling for endogenous factors by including them in the regression" technique. They can cause problems is two ways:

### Mediator

**Motivation.** Suppose regressing Earnings vs Tutoring:
$$
\text{Earnings}_{i}=\beta_{0}+\beta_{1}\text{isTutored}+\epsilon_{i}
$$
But secretly, there was a correlation where:
![[Post-Treatment Variable-20240425142833014.png|341]]
Therefore, $\mathbb{E}[\hat{\beta_{0}}]=\gamma_{1}+\alpha \gamma_{2}$
Now, simply controlling for reading scores like this:
$$
\text{Earnings}_{i}=\beta_{0}+\beta_{1}\text{isTutored}+\beta_{2}\text{readingScores}+\epsilon_{i}
$$
Is not effective, because there's a multicollinearity between $\text{isTutored}$ and $\text{readingScores}$. In this case, $\mathbb{E}[\hat{\beta_{1}}]=\gamma_{1}$, and this doesn't capture the $\alpha \gamma_{2}$ portion.

### Confounder


## Collider Bias

Collider bias 
![[Post-Treatment Variable-20240501105814536.png|320]]

A stupid model:
$$
Y_{i}=\beta_{0}+\beta_{1}X_{1i}+\beta_{2}X_{2i}
$$
will have biases:
- $\mathbb{E}[\hat{\beta_{1}}]=\gamma_{1}+\alpha\frac{\rho_{2}}{\rho_{1}}$
- $\mathbb{E}[\hat{\beta_{2}}]=\gamma_{2}+ \frac{\rho_{2}}{\rho_{1}}$

**Example.** Suppose we are regressing: Flu vs. Car accident. We also try to control for being being infected while being hospitalized:
$$
\text{Flu}_{i}=\beta_{0}+\beta_{1}\text{hadAccident}+\beta_{2}\text{isHospitalized}+\epsilon_{i}
$$
Suppose, however, reality went like this:
1. Car accidents lead to hospitalization, but don't cause the flu
2. Fevers lead to both hospitalization and cause flu testing
Then:
- $\mathbb{E}[\hat{\beta_{1}}]=\gamma_{1}-\alpha\frac{\rho_{2}}{\rho_{1}}$ i.e. accident and flu is 
- $\mathbb{E}[\hat{\beta_{2}}]=\gamma_{2}+ \frac{\rho_{2}}{\rho_{1}}$
