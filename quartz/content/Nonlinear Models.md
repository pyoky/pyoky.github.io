---
aliases: 
tags:
  - Math/Statistics
---
### Polynomial Models

$$
Y_{i}=\beta_{0}+\beta_{1}X_{1i}+\beta_{2}X_{1i}^{2}+\dots+ \epsilon_{i}
$$
- This is still bivariate! it's just $Y$ vs $X_{1}$

### Logarithmic Models
1. Linear-Log: $Y_{i}=\beta_{0}+\beta_{1}\ln X_{i}+\epsilon_{i}$
2. Log-Linear: $\ln Y_{i}=\beta_{0}+\beta_{1}X_{i}+\epsilon_{i}$
3. Log-Log: $\ln Y_{i}=\beta_{0}+\beta_{1}\ln X_{i}+\epsilon_{i}$
Be careful since:
- Units of coefficients are different
- Variables must all be positive
- There isn't a statistical test to choose which model to use
### Example: Wage vs Height

Regression Table: ![[Nonlinear Models-20240425141246218.png|473]]
1. No Log: "Wage increases by $\$0.412$ per $\text{inch}$ increase in height"
2. Linear-Log: "Wage increases by $\frac{29.316}{100}=\$0.293$ per $1\%$ increase in height"
3. Log-Linear: "Wage increases by $0.033\times 100=3.3\%$ per $\text{inch}$ increase in height"
4. Log-Log: "Wage increases by $2.362\%$ per $1\%$ increase in height"

