---
aliases: []
tags:
  - Economics/Finance
---
thm. **BSM Derivative Pricing.** Generalized pricing of any derivative. Using different constraints, one can price any derivative.

$$
\frac{ \partial f }{ \partial S } +\frac{\sigma^{2}S^{2}}{2}\frac{ \partial^{2} f }{ \partial S^{2} }+(r-q)S \frac{ \partial f }{ \partial S } -rf=0 
$$

where…
- $f[S(t),t]$ is the price of the derivative at time $t$
- $S(t)$ is a [[Stochastic Process|Geometric Brownian Motion]] s.t. $dS=(m-q)S\cdot dt + \sigma S \cdot dB(t)$ with $B(t)$ a standard brownian motion
	- $\sigma$ is the scale of process $S$
	- $\mu$ is the drift of process $S$
	- $m$ is the rate of return of process $S$
	- $q$ is the [[Dividend Discount Model|dividend rate]] (any dividend is immediately reinvested)
- $r$ is the [[Interest Rate|Discount Rate]]
