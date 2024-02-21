---
aliases: []
tags:
  - Economics/Finance
---

## Gentle Introduction

def. The **Capital Asset Pricing Model** (CAPM) is a method of predicting the returns of an [[Security (Finance)|asset]], by using [[Regression|regression]] analysis between it and the market’s returns.

![Untitled](Untitled%2019.png)

The regression line has the equation:

$$
{\color{red}r_i}-r_f={\color{blue}\alpha}+{\color{blue}\beta}\cdot ({\color{red}r_m}-r_f)
$$

Data correlates between market excess return ($r_m-r_f$) and asset excess return ($=r_i-r_f$). The statistics produces the following data:

- **Coefficient of Determination** \[=R-value] $0\leq R^2 \leq 1$, measures the goodness of fit. Bigger means the model is a better fit.
- Standard deviations \[=[[Risk (Finance)]]] $\sigma_m, \sigma_i$
- Correlation coefficient $-1<\rho<1$, measures the degree of correlation between the two variables
- Beta \[=slope $\approx 1$] $\beta \coloneqq \frac{\rho_{i,m} \cdot\sigma_i}{\sigma_m}$, which measures the sensitivity of one variable to another. It doesn’t deviate much from 1.
- Alpha \[=intercept $\approx 1$], which measures the excess return against all odds (of the prediction of the CAPM model.) It should, theoretically, always be zero. But it is not (See Jenson’s Alpha below.)

If we plot riskless assets with a riskful asset:

![Untitled](Untitled%202%207.png)

- $r_f$ is the riskless return, $r_p$ is the riskful asset’s return, and $w$ is the weight of riskful assets in portfolio.
- $\sigma_p$ is the volatility for the riskful asset, and $\sigma_f$ the volatility of riskless asset, is **zero by definition**
- Gradient of the blue line is $\frac{r_p-r_f}{\sigma_p}$ ← this is a constant. **Thus the blue frontier is linear.**

⇒ With riskless assets, you can short-sell the riskless asset to go beyond the risk/return:

![Untitled](Untitled%203%205.png)

(2) is achieved by short-selling the risk-free asset and purchasing more of the riskfull asset.

- This is also called **[[Leverage]].**
- This means that the **weight** on the risk-free asset is negative
  - …and the **weight** on the risk-full asset is $>1$
- If the risk-free rate ever eclipses the risk-ful rate, disaster insues. (This is what happened during the financial crisis of 2008; banks were _highly levered._)

## Combination of Risk-ful—Risk-free & Risk-ful—Risk-ful

![Untitled](Untitled%204%204.png)

> [!info] Normally, the market risk premium [market excess return] is about **6~7%**.

```ad-warning

Note that the axes are not market returns, but **excess returns**. This means usually the y-intercept will be zero, unless as we later discuss $\alpha >0$.

```

Sensitivity vs. Asset Return. If the data shows the asset’s return is higher, then the sensitivity should increase.

![Untitled](Untitled%201%2010.png)

- $M$ is when the market is measuring against itself.

---

Risks. In the CAPM model, there are two types of [[Risk (Finance)|risks]] we care about.

- Systematic Risk \[=market risk, **beta risk**]. This is the risk due to the market recessions.
  - Diversification cannot solve beta risk.
  - High beta implies higher returns in good times, worse returns in bad times.
- Idiosyncratic Risk. This is the risk due to individual firms’ characteristics (tech, organization, etc.)
  - Idiosyncratic risk $\overset{n\rightarrow \infty}\longrightarrow 0$ i.e. diversification solves this
  - Uncorrelated with market risk.

> [!info] Industries that do well despite a recession: Pharmacuticals, Consumer necessities, Defense industries.

## Technical Reference

Use terminology from [[Portfolio Theory]].

- [[Market Beta]]: correlation of portfolio with market.
- Capital Allocation Line (CAL)
  - Security $(\sigma_{i},\mu_{i})$
  - Risk-free security $(0,\mu_{f})$
  - Equation of Possible Portfolios (=_Capital Allocation Line_): ${\color{red}\mu_{p}}=\frac{\mu_{i}-\mu_{f}}{\sigma_{i}}{\color{red}\sigma_{p}}+\mu_{f}$
    - This is a line ⇒ Capital Allocation Line.
    - Slope: $\frac{\mu_{i}-\mu_{f}}{\sigma_{i}}=\frac{\text{Excess Return}}{\text{Portfolio Risk}}=\text{Sharpe Ratio}$
    - Higher slope (=higher [[Measuring Security Performance]]) is better (more return per unit risk)
- Capital Market Line (CML)
  - Market Security $(\sigma_{i},\mu_{M})$
  - Risk-free security $(0,\mu_{f})$
  - ![[CAPM Model-1.png|320]]
- Investor Utility Function![[Screenshot 2023-11-06 at 17.15.20.png|273]]
  1.  Red: risk-seeking
  2.  Black: risk-neutral
  3.  Blue: risk-averse
  - - [[Constrained Optimization]] problem $max_{\mu,\sigma}E[u(R_{p})] \text{ s.t. } g(\mu,\sigma)=k$
      ⇒ to get optimal portfolio $R_{p}^*$ ![[Pasted image 20231106171919.png|391]]
