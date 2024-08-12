---
aliases: []
tags:
  - Economics/Finance
---
Forwards are a [[Derivatives (Finance)|contract]] that promises to buy/sell an underlying asset at a certain strike price.

**Example.** A farmer wants to sell their wheat, and a mill wants to buy some wheat. The current price of wheat is $\$20$
- The farmer is afraid of the price of wheat going down
- The mill is afraid of the price of wheat going down
Therefore, they draft up a contract: one year from now, they will transact the wheat at a price, $\$22$ determined right now. One year from now, they will transact. This is a forward contract.
- Underlying asset: wheat
- $t$: time of contract
- $T$: time of execution
- Forward price (=_Strike price_): $F_{T}(t)=K=\$22$
- Spot price: $S(0)=\$20$
- Contract size: how many units of wheat?
- ! no money/assets changes hands now. Thus the value of a portfolio with a forwards contract is $zero$ on the day they entered.
Now, assume you're neither a farmer nor a mill, and you just want to bet on the price of wheat.
- Short position: think wheat price will increase. At execution, you will buy wheat from the spot market at price $S(T)$ and give it to the counterparty at price $K$ according to the futures contract
	- Payoff: $K-S(T)$
- Long position: think wheat price will decrease. At execution, you will get price the wheat for price $K$ and then sell at the spot market for $S(T)$
	- Payoff: $S(T)-K$

thm. **(The fair price of a forwards)** Under assumption of [[No-Arbitrage]], the fair strike price of a futures contract entered at time $t$ and executed at future date $T$ is:
$$
K=F_{T}(t)=S(t)e^{ (r-q)(T-t) }
$$
- $r$ is the risk-free rate
- $q$ is the dividend rate. In many cases $q=0$. It only applies to underlying stocks.
One may prove this by contradiction, by assuming it doesn't hold, and constructing an arbitrage portfolio:

thm. **(Value of ongoing forward contract)** For a futures contract entered at $t=0$, executed at $T$, the value of this contract at intermediate time $t$ is:
$$
\mathfrak{F}_{T}(t)=(F_{T}(t)-F_{T}(0))e^{ -r(T-t) }
$$
*Intuition.*
- ! Value of a forward contract is not same as the fair price.
- $F_{T}(t)$ is strike price of a hypothetical contract from $t$ to $T$
- $F_{T}(0)$ is strike price of a hypothetical contract from $0$ to $T$
- The difference of these two prices, discounted at risk-free rate.

*Proof.* Let portfolios:
- $\Pi_{A}$: 
    - long forward, enter at $t=0$, execute $t=T$, with strike price $F_{T}(0)$
    - Short forward, enter at $t=t$, execute $t=T$, with strike price $F_{T}(t)$
- $\Pi_{B}$: Deposit cash $(F_{T}(t)-F_{T}(0))e^{ -r(T-t) }$ at risk-free $r$
Then at time $T$:
- $\Pi_{A}(T)=\underbrace{ S(T)-F_{T}(0) }_\text{ long forward }+\underbrace{ F_{T}(t)-S(T) }_\text{ short forward }=F_{T}(t)-F_{T}(0)$
- $\Pi_{B}(T)= F_{T}(t)-F_{T}(0)$
Since $\Pi_{A}(T)=\Pi_{B}(T)\implies \Pi_{A}(t)=\Pi_{B}(t)$ by Law of One Price. Then:
$$
\Pi_{A}(t)=\underbrace{ \mathfrak{F}_{T}(t) }_\text{ value of long forward position }=F_{T}(t)-F_{T}(0)=\Pi_{B}(t)
$$
<span style="float:right;">■</span>
