---
aliases: []
tags:
  - Economics/Finance
---

thm. The price of a [[Bonds (Finance)|bond]] is the following:

$$
B(n)=\frac{1-\left( 1+r_{y} / 2 \right)^{-n}}{r_{y} / 2}C+\frac{M}{(1+\frac{r_{y}}{2})^n}
$$

where…

- $B(n)$ is the current market price of the bond
- $n=2\tau$ is the periods _left_ to maturity (where $\tau$ is the years left to maturity)
  - not periods passed! periods _left_
- $M$ is the Principal amount
  - Normally use $100 or $1000
- $C$ is the per-period (=semi-annual) coupon payment
  - normally, coupon is quoted at _annual_ coupon rate $r_{C}$ (in percent) so $C=\frac{r_{C}}{2}M$
- $r_{y}$ (or $y$) is the yield to maturity ($\approx$discount rate)
  - $r$ is the current yield. $r=\frac{2C}{B(n)}$
- $n$ is the number of coupon payments (semi-annual for [[Treasury]] bonds)

The Three Rates of Bonds

1. $r_{y}$: Yield to Maturity—"What's the return rate for the coupons if I hold until maturity?"
2. $r$: Current Yield—"Coupon rate, but at the current bond price"
3. $r_{C}$: Coupon Rate—"Coupon rate (at principal price)."

- Price and rates:
  - Trades at premium $B(n)>M$ ⇔ $r_{y}<r<r_{C}$
  - Trades at discount $B(n)<M$ ⇔ $r_{y}>r>r_{C}$

Observe…

- $B(n) \propto \frac{1}{\text{yield}}$.
- $\lim_{ n \to 0 } B(n)=M$
- **Causality:** Exogenous factors → $\Delta$yield → $\Delta$price.
  ![The causality of the variables of a bond. The market’s expected rate of return of a bond is the yield. With this yield we can calculate its price.|260](Untitled%203%204.png)

- In a portfolio of bonds…

$$
\text{Market Value}=\frac{\text{Price of par}}{100}\times \text{\# of pars}
$$

The causality of the variables of a bond. The market’s expected rate of return of a bond is the yield. With this yield we can calculate its price.

## Price—Yield Curve (mathematical)

Price and Yield are inversly correlated → **Price-yield** curve looks like this:

![Untitled|400](Untitled%204%203.png)

**Duration** is the _gradient_ of this price-yield function:

$$
\text{Duration}:=\frac{dP}{dy}
$$

Dollar Duration (DV01) is the change in price due to 1% change in yield [=$1 change in yield _per par_]

$$
\text{DV01}:=\frac{\Delta P}{\pm 1\% \cdot y }
$$

- Dollar Duration can be only used to _approximate_ price changes for _small_ changes in yield (~50bp)
- **Duration is used to estimate risk (Price sensitivity against yield = DV01 risk**
- Dollar Duration is quoted as an absolute value. (We all know that it’s mathematically negative)
- DV01 Risk:= $\frac{\Delta \text{Market Value}}{\Delta 1\% \text{yield}}$ = “$\Delta$ market value for 1% yield change” = $\frac{\#\text{par}}{100}\cdot \text{DV01}$
- DV01 has no relationship with volatility

> [!info] Example calculation

| Time to Maturity | DV01 | Yield Vol. | e.g. change in yield | change in price |
| ---- | ---- | ---- | ---- | ---- |
| 2 year | $1.8 | 10%p | 20bp | $0.36 |
| 10 year | $7.2 | 5%p | 10bp | $0.72 |
|  |  |  |  |  |

## Yield Curve (emperical)

![Untitled|300](Untitled%205%202.png)

⇒ **Yield $\propto$ Maturity**, because the farther away the cash flows are, the more risky it is [$\because$ uncertainty]

- Inverted Yield Curve: Bond investors think a recession is looming → Treasury will increase rates
- Left intercept is the fed rates & short-mat bonds → high movement
  right side is long-mat bonds → low movement

## Risk & Volatility

def. Price[rate of return] volatility = $\mathbb{SD}[\text{Price}]$ (in $)

def. Yield volatility = $\mathbb{SD}[\text{Yield}]$ (in %p)

def. DV01 Risk = Change in MV per change in 1% yield

- Yield Vol > RoR Vol ← mathematical relationship (price formula)
- Maturity $\propto$ Price Vol.
