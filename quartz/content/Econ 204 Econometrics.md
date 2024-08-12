---
aliases: []
tags:
  - Courses
---
> [!quote]
> Correlation doesn't imply Causation

- [[Econometrics]]
- [[Bivariate Ordinary Least Squares Regression]]
	- [[Confidence Intervals and Hypothesis Testing in OLS Linear Regression]]
	- Problem: Autocorrelation? → Lagged Variables
	- Problem: Heteroskedatisticy? → `robust` standard errors
### Different Models
- [[Multivariate Ordinary Least Squares Regression]]
    - Problem: [[Omitted Variables]] → Include the variables
    - Problem: [[Post-Treatment Variable]]
        - Mediator Bias → Your choice on what you want
        - Confounder Bias → Your choice on what you want
- [[Nonlinear Models]]
    - → Choose the best one
### Techniques
- [[Dummy Variables]]
    - Multiplicative Dummies
    - Categories
    - Difference of Means test
- [[Fixed Effects Model for Panel Data]]
    - Problem: Endogeneity due to time-dependent or panel (=group)-dependent factors
    - LSDV approach
    - De-meaned approach
    - [[Difference In Difference]]
- [[Two-Stage Lease Squares Regression]] and Instrumental Variables
    - [[Simultaneous Equation Model]]
### Designing and Analyzing Experiments
- [[Controlled Experiments]]
    - [[Natural Experiments]]
- [[Regression Discontinuity]]

Endogeneity fight Summary:
1. Soak-up
    - Other causality? → [[Multivariate Ordinary Least Squares Regression]] 
    - Mediator/Confounder? → [[Post-Treatment Variable]] 
    - Time/Group-dependent? → [[Fixed Effects Model for Panel Data]] 
2. Isolate/Create the exogenous variation
    - Isolation? → [[Two-Stage Lease Squares Regression]] and IV
    - Randomization? → [[Controlled Experiments]] 
3. [[Regression Discontinuity]] 
