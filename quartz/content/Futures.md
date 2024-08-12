---
aliases: []
tags:
  - Economics/Finance
---
Futures contracts are same as [[Forwards]] but is exchange-traded. The pricing formula is exactly the same, but there is less counterparty risk because the exchange verifies the counterparty.

A future is a contract that says “A will sell B a certain amount of resource _R_ for _$X_ at date _N_ in the future.” This is because A wants to hedge against depreciation of _R_, and B appreciation of _R_.

![Untitled](Untitled%2020.png)

- Reduces risk for both parties
  - Farmers have long position on wheat [=worry that wheat price↑]
  - General Mills have short position on wheat [=worry that wheat price↓]
- $\#\text{Total Sellers} = \#\text{Total Buyers}$ i.e. \#Short = \#Long positions (you can’t subdivide a contract)
- Used for liquid [=high trade volume] assets, usually highly demanded commondities like gold, oil.
- Futures Price Formula.

$$
  F_t=S\cdot\exp\Big[(r+q)\cdot t\Big]






  
$$

  - $S$ is the spot [current] price of the commodity
  - $r$ is the riskless rate, continuous compounding at _timespan_ (%)
  - $q$ is the carry rate, continuous compounding at _timespan_ (%)
  - $t$ is the time to maturity (_timespan)_

- Futures Price > Spot price (=_Contango_)
	- …unless _Backwardation_: Futures Price < Spot Price. ← This is abnormal.
- Futures Price converges to Spot price as it closes into maturity

![Untitled](Untitled%201%2011.png)

> [!info] Futures Exchanges are large corporations themselves which manage these contracts.
> …examples: Chicago Mechantile Exchange (CME), Tokyo Commodities Exchange (TOCOM), etc.
> …Transactors have escrow accounts to not incur fees and ensure safety of assets
> …Ensutre parties aren’t bankrupt and can carry out the exchange

**Rolling the Contract.** You don’t want to take delivery of the contract, but the contract is expiring soon. What you do? ⇒ You **roll over the contract**, i.e. sell your current contract and buy another one that matures later.
