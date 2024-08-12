---
aliases: []
tags:
  - Economics/Finance
---

An _option_ is a contract that gives the _holder_ the right to _exercise_ the option (=buy/sell a stock) at the _strike price_ at or before the _strike date_.
- It is a type of [[Derivatives (Finance)|Derivative]]
- The person who gives out the option contract is the _writer_.
- The person who gets the option contract is the _holder_.
### Types of Options
- Exercise timing
	- _American_ option: anytime on or before the strike date.
	- _European_ option: at the strike date only.
- Exercise type
	- _Call_ option: you hold the right to _sell_ the stock at the strike price.
	- _Put_ option: you hold the right to _buy_ the stock at the strike price.

### Definitions
- $S(t)$: price of underlying asset, at time $t$
- $C(t)$: price of a call option, at time $t$
- $P(t)$: price of a put option, at time $t$
- $K$: strike price of a call or put option

**Intuition.** (Payoff Diagram for Options)
![[Options (Finance)-20240304134608116.png]]

### Call Option
Assume continuous compounding at rate $r$ between time period $[t_{0},t_{1}]$. Assume [[No-Arbitrage]].
- Payoff: $\text{max}[S(t_{1})-K,0]$
    - $0$ is when the stock price as decreased, so you don't decide to sell.
    - according to the law of one price, must equal to $=C(t_{1})$
- Profit: $\text{max}[S(t_{1})-K,0]-C(t_{0})\exp[r(t_{1}-t_{0})]$
    - First term is the payoff
    - Second term is because you borrowed money at the risk-free rate $r$ to buy the call option.
    - We don't know what $C(t_{0})$ is yet…see [[Binomial Option Pricing Model]]

thm. **Put-Call Parity.** let call option entered at time $t_{0}$ and put at time $t_{0}$. Then
$$
\underbrace{ C(t_{0}) }_\text{ Call }+\underbrace{ Ke^{ -r(t_{1}-t_{0}) } }_\text{ Cash }=\underbrace{ P(t_{0}) }_\text{ Put }+\underbrace{ S(t_{0})e^{ -q(t_{1}-t_{0}) } }_\text{ $e^{ -q(t_{1}-t_{0}) }$ units of underlying }
$$
_Intuition._ You can always use a stock plus a put option to simulate an equivalent call option, and v.v.

_Proof Outline_. let $\Pi_{A}$ long $1$ call, have $Ke^{ -r(t_{1}-t_{0}) }$ units of cash. Let $\Pi_{B}$ long $1$ put, have $e^{ -q(t_{1}-t_{0}) }$ units of underlying stock. At time $t_{1}$ they will have equivalent value, thus at time $t_{0}$ their value must be same by LOP.

thm. **Put-Call-Forward Relation.**
- Forward entered at $t=0$ and ends at $t=T$, with strike price $K$
- $C(t),P(t)$ are call and put entered at time $t$, with strike price $K$
$$
C(t)-P(t)=\mathfrak{F}_{T}(t)
$$
_Proof Outline._ ![[Options (Finance)-20240304140944336.png|587]]

## Various Portfolios that Can Be Constructed from Options

def. Moneyness of Option. A call option's moneyness at time $t$ is: ^22ed5c
- If $S_{t}>K$: call is _in (=on) the money_
- If $S_{t}=K$: Call is *at the money*
- If $S_{t}<K$: Call is *out of the money*, i.e. worthless.

| Strategy         | When you predict…                                         | Profit Diagrams (Not Payoff)                      |
| ---------------- | --------------------------------------------------------- | ------------------------------------------------- |
| Straddle         | Underlying will move up/down a little                     | ![[Options (Finance)-20240304142227105.png\|250]] |
| Strangle         | Underlying will move up/down a lot                        | ![[Options (Finance)-20240304142314305.png\|250]] |
| Bull/Bear Spread | Underlying will go up (bull) / down (bear)                | ![[Options (Finance)-20240304142325699.png]]      |
| Butterfly Spread | Underlying will not move much (long) / move a lot (short) | ![[Options (Finance)-20240304142349350.png]]      |
