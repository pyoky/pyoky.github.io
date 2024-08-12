---
aliases: 
tags:
  - Math/Statistics
---
**Motivation.** A treatment vs. Non-treatment group in medicine. A dummy variable in this case would be:
$$
\text{Treatment}_{i}=\begin{cases}
1  & \text{if treated group} \\
0  & \text{if control group}
\end{cases}
$$
And regression:
$$
Y_{i}=\beta_{0}+\beta_{1} \text{Treatment}_{i}+\epsilon_{i}
$$
- Fitted value:
    - $\hat{Y}_{i}=\hat{\beta}_{0}$ if $\text{Treatment}_{i}=0$ ← "average of treatment group"
    - $\hat{Y}_{i}=\hat{\beta}_{0}+\hat{\beta}_{1}$ if $\text{Treatment}_{i}=1$ ← "average of control group"
    - This is equivalent to performing a **Difference of Means Test**, which measures the difference of the mean of each group. 
        - The difference of means is $\hat{\beta}_{1}$ (=the treatment effect) ^d53e17
    - ![[Dummy Variables-20240425122735656.png|419]]
### Multiplicative Dummy Variables

**Motivation.** Gender pay gap is not an "additive" factor but a "multiplicative" factor, as it men are rewarded more for per unit experience than women. In this case we can model:
$$
\text{Salary}_{i}=\beta_{0}+\beta_{1}\text{Experience}_{i}+\underbrace{ \beta_{2}\text{isMale} }_\text{ Additive dummy }+\underbrace{ \beta_{3}\text{isMale}_{i} \times \text{Experience} }_\text{ Multiplicative dummy }+\epsilon_{i}
$$
Regression Plot: ![[Dummy Variables-20240425131046971.png|478]]
- $\hat{\beta_{1}}$ is the slope of non-treament group (=women)
- $\hat{\beta_{1}}+\hat{\beta_{3}}$ is the slope of the treatment group (=men)
- Therefore Graph shape is:
    1. $\hat{\beta_{1}}$ determines the slope (upwards/downwards sloping)
    2. $\hat{\beta_{3}}$ will increase or decrease the magnitude of the slope in the treatment (men) group depending on its sign
1. ! When using multiplicative dummy regression, in order to test for statistical significance of $\text{isMale}$ you must test additive and multiplicative term parameters together, i.e. using [[Multivariate Ordinary Least Squares Regression#Hypothesis Testing regarding Coefficients|F-statistics]] to test $H_{0}:\hat{\beta_{2}}=\hat{\beta_{3}}=0$
    - The total effect of $\text{isMale}$ is $\beta_{2}+\beta_{3}$, and the statistical significance is tested by $H_{0}:\hat{\beta_{2}}+\hat{\beta_{3}}=0$
    - In general, if just one of either $\hat{\beta_{2}}$ or $\hat{\beta_{3}}$ is individually significant the total effect is significant
- 
## Applications of Dummy Variables
### Dummy Independent Variables in Multivariate OLS
Model:
$$
Y_{i}= \beta_{0}+\beta_{1} \text{Dummy}_{i}+\beta_{2}X_{i}+\epsilon_{i}
$$
→ $\beta_{1}$ will tell us the difference between the groups $\text{Dummy}=1$ and $\text{Dummy}=0$

*Example.* How much does playing in home field create an advantage for the home team?
$$
\text{Goal Differential}_{i}=\beta_{0}+\beta_{1} \text{isHome}_{i}+ \beta_{2}\text{Opponent Quality}_{i}+\epsilon
$$
- Adding $\text{Opponent Quality}$ will control for opponent quality
- Regression Table ![[Dummy Variables-20240425123733113.png|372]]
- Regression Plot ![[Dummy Variables-20240425124032313.png|457]]
- At $\text{Opponent Quality}=0$, the difference in means in $\hat{\beta}_{1}$
- $\hat{\beta}_{2}$ is irrelevant for this difference of means test. But if you want, it's the slope between opponent quality and goal differential

### Categorical to Dummy Variables.
**Motivation.** This is useful when you have categories like "1 indicates a person is from the Northeast, 2 from the Midwest, 3 from the South, and 4 from the West," and you want a difference of means test for all of them combined. You can't simply use the 1,2,3,4 as values because it "location" is not a quantity but a category. You use binary dummy variables instead:
$$
\text{Wages}_{i}=\beta_{0}
+\beta_{1}\text{isNE}+\beta_{2}\text{isMW}+\beta_{3}\text{isSouth}+\epsilon
$$
- We don't need a $\text{isWest}$ because $\text{false}$ on all three dummy variables indicates obviously that that datapoint is from the west. (i.e. avoid the "dummy perfect multicollinearity trap" where e.g. $\text{isMale}$ is perfectly negatively correlated with $\text{isFemale}$).
    - i.e.g there cannot be any two categorical dummy variables which are both one.
- *Interpretation*, e.g. for $\beta_{1}$: the unit rise in wages by moving from reference (West) to NE.
- Regression Table: ![[Dummy Variables-20240425124723939.png|458]]
    - Observe that all columns are symmetric. The model we used above is column (a), but since there are many other ways to define categories as dummy variables, we are showing that they all have the same result.
    - & Each row represents "how better it is from the reference"; in (a), "how better is it from the west".


We now have an example from the textbook that incorporates these.
**Example.** Taxation vs Male suffrage, Year, War mobilization and location
$$
\text{Tax}=\beta_{0}
+\beta_{1} \text{mSuffrage}_{i}+\beta_{2} \text{Year}_{i}+\beta_{3}\text{War}_{i}+\underbrace{ \beta_{4}\text{isEurope}_{i}+\beta_{5}\text{isAsia}+\beta_{6}\text{isOceania}_{i} }_\text{ Location Dummies }
$$
- Regression Table: ![[Dummy Variables-20240425125831901.png|545]]
    - "Bivariate" column is the stupid model.
    - (a) only adds the year. Year is significant endogenous factor
    - (b) adds war. War is also a significant endogenous factor
    - (c) includes location dummies, with North America as the reference (therefore model doesn't include $\text{isNA}$).
