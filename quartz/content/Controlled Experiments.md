---
aliases: 
tags:
  - Math/Statistics
---
**Motivation.** In theory we should be able to estimate the causal effect of a controlled experiment using [[Dummy Variables#^d53e17|Difference of Means model]]:
$$
Y_{i}=\beta_{0}+\beta_{1}\text{isTreated}+\epsilon_{i}
$$
But we have the following issues in really (ABC issues):
- Attrition
- Balance
- Compliance

## Balance
- def. **Balance** means treatment and control groups are same in all other factors
- def **Blocking** means to categorize into blocks (e.g. men and women) and randomize within groups.
    - Blocking is harder to implement when there are lots of categories, and sample size is limited.
Therefore, before running regression check for balance by running the **Balance Test**:
$$
X_{i}=\gamma_{0}+\gamma_{1}\underbrace{ Z_{i} }_\text{ isAssigedTreatment }+\nu_{i}
$$
where $X_{i}$ is a covariate that we're worried is not randomized enough.
- 😊 If $\gamma_{1}$ is not statistically significant, it means treatment and unobserved factors are not correlated.
- 😞 If $\gamma_{1}$ is statistically significant then (even if it was randomized) then $\rho_{T,\epsilon}\neq 0$ it's a failure of randomization

## Compliance

**Motivation.** Some people don't comply, even through they're offered treatment. What if people who don't comply are different from people who comply? If this is the case, then focussing on just the treated & compliant people would be not indicative of the true effect of the treatment.
![[Problems in Controlled Experiments-20240501114757913.png|465]]

- $Z$ is the binary "was going to treat this person"
- $T$ is the binary "is compliant person"
### Intention to Treat Approach
We attempt to resolve this issue by not regressing against treated & compliant people, but all people who were "supposed to be treated" (=intent to treat), i.e. $T=1 \land Z=1$
- Non-ITT: $Y_{i}=\beta_{0}+\beta_{1}\underbrace{ T_{i} }_\text{ hasComplied }+\epsilon_{i}$
- ITT: $Y_{i}=\delta_{0}+\delta_{1}\underbrace{ Z_{i} }_\text{ ITT }+\nu_{i}$
    - This is a conservative estimate. $|\delta_{1}|\leq|\beta_{1}|$; the lower the compliance, the lower the coefficient. (Full compliance implies "$=$")
### 2SLS Approach
Alternatively, a better approach to dealing with non-compliance is using a [[Two-Stage Lease Squares Regression|2SLS]]. You can use the ITT variable $Z$ as the IV, since it satisfies the conditions that make a good IV:
- Inclusion condition: $Z$ is correlated with $T$
- Exclusion condition: $Z$ is uncorrelated $\epsilon$ because treatment is randomly assigned
1. Then, the first stage (reduced form): $\textcolor{red}{ \hat{T_{i}} }=\gamma_{0}+\gamma_{1}Z+\gamma_{2}X_{2i}+\nu_{i}$
2. Then the second stage:$Y_{i}=\beta_{0}+\beta_{1}\textcolor{red}{ \hat{T_{i}} }+\beta_{2}X_{2i}+\epsilon_{i}$

## Attrition

def. Attrition means dropping out.
The following regression assesses if treatment is correlated to attrition:
$$
\text{didAttrition}_{i}=\delta_{0}+\delta_{1}\text{isTreated}_{i}+\nu_{i}
$$
→ if $\delta_{1}$ is statistically significant the attrition is correlated to treatment, thus we need to control for it.
Methods to resolve attrition:
1. _Add covariates_ that are significant when we test (_interactive attrition test_): $\text{didAttrition}_{i}=\delta_{0}+\delta_{1}Z_{i}+\delta_{2}\textcolor{red}{ X_{2i} }+\delta_{3} Z_{i}\times \textcolor{red}{ X_{2i} }$, where $Z$ is the intention-to-treat binary variable.
    - This should also be significant $\hat{ \gamma_{1}}$in the balance test: $X_{2i}=\gamma_{0}+\gamma_{1}Z_{i}+\nu_{i}$ ^d8b98b
    - Add the significant covariates to the final analysis
2. _Trim_ either dataset so the attrition rate is the same
3. _Selection model._ (not discussed)
