---
aliases: []
tags:
  - Economics/Game-Theory
---

**Motivation.** The [[VCG Auction]] is DSIC and Welfare-maximizing. But it's also very complicated to explain to all agents. Instead, let's think of a simpler, intuitive idea: ascending price auctions. Now, in a [[Combinatorial Auction]] setting, there are two ways to ascend the price:
1. Ascending item price
2. Ascending bundle price
Before we proceed, we need to introduce definitions and properties.
---
def. **Demand.** For valuation function $v$, let item prices $p_{1},\dots,p_{n}$. Agent _demands_ bundle $S^{*}$ of this valuation if $S$ the utility-maximizing bundle, i.e:
$$
S^{*}=\text{argmax}_{S} v(S)-\sum_{j\in S}p_{j}
$$
_Remark._ There may be multiple utility-maximizing bundle. Therefore we often collect all bundles that are utility-maximizing, and make it into a _demand set_ $D$

### Ascending Item Price Auction

^8f0f47

An Ascending item price auction has prices for each item, and increase the price of each item.

def. **Walrasian Equilibrium. (WE)** In a [[Combinatorial Auction]], _given the prices_ $p_{1}^{*},\dots,p_{j}^{*}$, let goods in $X$ partitioned into $S_{1},\dots,S_{n}$. This allocation this is a W.E. if:
1. $S_{i}$ is _demanded_ by $i$, (=$S_{i}$ maximizes $i$'s utility =$S_{i}\subseteq D_{i}$)
2. If $p_{j}^{*}>0$ then item $j$ has an owner.

thm. **First Welfare Theorem. (FWT)** Given price $p_{1}^{*},\dots,p_{j}^{*}$, if Allocation W.E. is welfare-maximizing.
<u>Proof.</u> Let $S_{1}^{*},\dots,S_{n}^{*}$ be the welfare-maximizing partition/price to a [[Combinatorial Auction]], i.e. the W.E. Then consider any other partition $T_{1},\dots,T_{n}$. Then:

<span style="float:right;">■</span>
Thus, we need only show that the allocation is a WE in order to show that it is welfare-maximizing. Now:

def. **Ascending Item Price Auction.**
1. Start at $p_{j}=0$ for all items
2. for all agents, agent $i$ "points to" all items ($D_{i}$) that maximizes $\mu_{i}(D_{i})=v_{i}(D_{i})-\sum_{j\in D_{i}}p_{j}$ at that price
3. If there are two agents that choose the same item, increase that item's price by a small amount, $\epsilon$.
    1. & You can choose which item price to raise first—different choices will lead to different final allocations.
4. Repeat, until for all items there is only one agent pointing to it.
5. Give that agent all the items they are pointing to at that price.
We define a property (subset of [[Rationality (Economics)|Rational Taste]]) to assist the proof:

def. **Substitutes Property**. A value function $v$ satisfies the substitutes property if, the increase of one item's price does not remove any other items from the bundle it _demands_.
_Example._ In other words, there is no situation of "left shoe, right shoe" ([[Types of Goods (Economics)|complement goods]]). If the price of left shoe increases above what they want to pay, this person will drop out of the left shoe and right shoe both. This does not satisfy the substitutes property.

thm. **(Ascending Item Price Auction Maximizes Welfare)** If all agent's value function $v_{i}$ satisfies the substitutes property, and no two agent values the good within $\epsilon$ of each other the Ascending Item Price Auction terminates in a WE (and thus is welfare-maximizing via the FWT.)
_Proof._
1. Auction will terminate, because the item price is only increased when it is in someone's demand set.
2. At termination, if the price of item $j$ is non-zero, it is in somebody's demanded bundle $D)_{i}$. This is because
    1. the price was raised from zero because somebody was pointing to it
    2. two people cannot simultaneously drop out of it ($\pm\epsilon$)
    3. The raise of another item's price does not cause any agent to drop $j$
    4. ⇒ therefore if termination price $p_{j}^{*}>0$ then it is in somebody's demand bundle $D_{i}$ (Second property of WE).
3. At every point in time, all agents point to only their demanded bundle. (First property of WE)
<span style="float:right;">■</span>
### Ascending Personalized Bundle Price Auction.

An Ascending bundle price auction has an *individualized price* for every bundle. We describe an alternative type of equilibrium and prove that such an allocation is maximizing. It is not DSIC.

def. Competitive Equilibrium. (CE) let personalized prices $p_{i}(S_{i})$ for every agent, for every bundle, and allocation $S_{1},\dots S_{n}$ be a partition of goods $X$. This price and allocation is a competitive equilibrium iff:
1. $S_{i}$ is demanded by $i$, i.e. it utility maximizes for $i$, i.e. $S_{i} \subseteq D_{i}$
    1. This is same as WE above.
2. It maximizes seller's total revenue: $\text{max}_{S}\sum_{\forall i}p_{i}(S_{i})$

thm. Competitive Equilibrium maximizes social welfare.

<span style="float:right;">■</span>

def. **Ascending Bundle Price Auction.** ^d85cec
1. let $p_{ij}$ be current prices, individualized for each bidder, for each bundle
2. Then find the revenue-maximizing partition $S_{1},\dots,S_{n}$
    1. There may be many, arbitrarily choose one.
3. let "Loser Set" $L\coloneqq \{ i\mid S_{i} \neq \emptyset \}$, i.e. agents that don't get anything
    1. For every loser $i \in L$ get their demand bundle $D_{i}$ at these prices
    2. Increase customized price of that bundle for $i$ by $\epsilon$, i.e. $p_{i}(D_{i})\leftarrow p_{i}(D_{i})+\epsilon$.
4. Repeat from 2, until $L= \emptyset$ or no agents demand anything.
This all seems very arbitrary, but it will magically terminate at the CE.
