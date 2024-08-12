---
aliases:
  - Stock Options
tags:
  - Economics/Finance
---
Warrants (=stock options) are a method that companies use to compensate employees (in addition to salary.) They can be priced using the [[Black Scholes European Option Pricing Formula|BSM]] formula.

### Situation

At time $t=0$, company issues warrants each with strike price $K$ and expiration $T$.
- $N_{out}$: number of outstanding shares
- $N_{w}$: number of warrants issued
- $S_{t}$: stock value at time $t$
- $V(0)=N_{out}S_{0}+N_{w}W(0)$: Company value (=MCAP)
    - We currently don't know $W(0)$
At time $t=T$, suppose all warrant holders exercise their warrants:
- $\text{MCAP}_{\text{before}}(T)=N_{out} {S_{T,\text{before}}}$ before the warrants exercised
- $\text{MCAP}_{\text{after}}(T)=(N_{out}+N_{w})S_{T,\text{after}}$ after the warrants exercised
We don't know $S_{T,\text{after}}=\frac{\text{MCAP}_{\text{before}}(T)+N_{w}K}{N_{out}+N_{w}}=\frac{\text{MCAP}_{\text{after}}}{N_{out}+N_{w}}$

### Pricing

Consider two portfolios $A$ and $B$.
- $A$ is just a simple warrant that expires at time $T$ with strike $K$
    - time $t=0$, $V_{A}(0)=W(0)$
    - time $t=T$, $V_{A}(T)=\max\left\{  \frac{\text{MCAP}_{\text{after}}}{N_{out}+n_{w}}-K,0  \right\}$
- $B$ is a long of $\frac{N_{out}}{N_{out}+N_{w}}$ units of call option on the stock.
    - time $t=0$, $V_{B}(0)=\frac{N_{out}}{N_{out}+N_{w}}C_{0}^{E}$
    - time $t=T$, $V_{B}(T)=\frac{N_{out}}{N_{out}+N_{w}}\max\left\{  \frac{\text{MCAP}_{\text{before}}}{N_{out}} -K,0 \right\}$
Now,
$$
\begin{align}
V_{A}(T)&=\max\left\{  \frac{\text{MCAP}_{\text{after}}}{N_{out}+N_{w}}-K ,0 \right\} \\
&= \max\left\{  \frac{\text{MCAP}_{\textcolor{red}{ \text{before} }}+\cancel{ N_{w}K }}{N_{out}+N_{w}}-\frac{K(N_{out}+\cancel{ N_{w} })}{N_{out}+N_{w}} ,0 \right\} \\
&= \max\left\{  \frac{\text{MCAP}_{\text{before}}}{N_{out}+N_{w}}-\frac{KN_{out}}{N_{out}+N_{w}} ,0 \right\} \\
  &= \frac{N_{out}}{N_{out}+N_{w}}\max\left\{  \frac{\text{MCAP}_{\text{before}}}{N_{out}} -K,0 \right\} \\\\
&= V_{B}(T)
\end{align}
$$
By the [[No-Arbitrage|Law of One Price]] $V_{A}(0)=V_{B}(0)$, meaning that:
$$
W(0)=\frac{N_{out}}{N_{out}+N_{w}}C_{0}^{E}
$$
<span style="float:right;">■</span>
