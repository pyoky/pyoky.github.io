---
aliases:
  - Law of One Price
tags:
  - Economics/Finance
---
def. **Arbitrage Portfolio.** Portfolio with value $\Pi(t)$ at time $t$ is an arbitrage portfolio if:
$$
\Pi(t)=0 \implies \underbrace{ \mathbb{P}(\Pi(T)\geq 0)=1 }_\text{ price doesn't go down }\text{ and } \underbrace{ \mathbb{P}(\Pi(T)>0)>0 }_\text{ price guarateed to rise }
$$
Alternatively we can define it as:
$$
\underbrace{ \Pi(t)<0 }_\text{ if started negative... } \implies \underbrace{ \mathbb{P}(\Pi(T)\geq 0)=1 }_\text{ ...will be non-negative }
$$
def. **Law of One Price (LOP).** Two portfolios with the same future value must have the same value to begin with. if time $t<T$ then:
$$
\Pi_{A}(T)=\Pi_{B}(T)\implies \Pi_{A}(t)= \Pi_{B}(t)
$$

thm. **(Arbitrage is equivalent to LOP)** If there is no arbitrage portfolio, then the law of one price holds.

**Proof.** Contrapositive: If law of one price doesn't hold, there is an arbitrage portfoilo. Let portfolios $A,B$ such that
$$
\Pi_{A}(T)=\Pi_{B}(T) \text{ and } \Pi_{A}(t)<\Pi_{B}(t)
$$
Then construct the following new portfolio that:
- Long position on $A$
- Short position on $B$
Then
1. At time $t$, value is $\underbrace{ \Pi_{A}(t) }_\text{ Asset }-\underbrace{ \Pi_{A}(t) }_\text{ Cash Debt }-\underbrace{ \Pi_{B}(t) }_\text{ Asset Debt }+ \underbrace{ \Pi_{B}(t) }_\text{ Cash }=\underbrace{ \Pi_{A}(t)-\Pi_{B}(t) }_\text{ Assets }=0$
2. At time $T$, value is $\underbrace{ \Pi_{A}(T) }_\text{ Asset }-\underbrace{ \Pi_{A}(t)e^{ r(T-t) } }_\text{ Cash Debt }-\underbrace{ \Pi_{B}(T) }_\text{ Asset Debt }+ \underbrace{ \Pi_{B}(t)e^{ r(T-t) } }_\text{ Cash }=\underbrace{ \Pi_{A}(T)-\Pi_{B}(T) }_\text{ =0 } + \underbrace{ (\Pi_{B}(t)-\Pi_{A}(t))e^{ r(T-t) } }_\text{ >0 }>0$
	1. The cash investments are risk free, thus this is determined.
3. Therefore this portfolio is an arbitrage portfolio.<span style="float:right;">■</span>

One can similarly prove the other way. Thus LOB is equivalent to No Arbitrage condition.