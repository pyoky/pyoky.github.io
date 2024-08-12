---
aliases: []
tags:
  - Economics/Game-Theory
---
thm. **VCG Mechanism Auction.** The following mechanism is DSIC and Welfare Maximizing.
Compute the optimum allocation $S=(S_{1}^{*},\dots,S_{n}^{*})$. Then for an agent $i$, let
- $V^{*}\coloneqq \sum_{j\neq i}^{n}v_{j}(S_{j}^{*})$ <span style="float:right;">Optimal Social Welfare</span>
- $V_{-i}^{*}\coloneqq \text{max}_{i\neq j}\sum_{j=1}^{n}v_{j}(S_{j,-i})$
	- where $s_{j}^{-1}$ is the optimal allocation to $j$ when $i$ is simply removed from auction
	- Thus $v^{*}_{-i}$ is the optimal social welfare without $i$
- Thus $V^{*}\geq V_{-i}^{*}$
	- because adding more bidders can only increase social welfare

thm. The following allocation rule is DSIC and welfare-maximizing:
Allocate by $\text{max}\sum_{j=1}^{n}v_{j}(S_{j})$
Charge price to $i$:
$$
p_{i} =\underbrace{ V_{-i}^{*} }_\text{ re-run auction without $i$ }-\underbrace{ (V^{*}-v_{i}(S_{i}^{*})) }_{ \text{auction's welfare }-~i\text{'s welfare} } 
$$
**Intuition.** This is similar to charging $i$ the externality of joining the auction;

**Proof.**
<u>First</u>, $0\leq p_{i}<v_{i}(S_{i})$, i.e. we don't charge negative prices, or a price higher than the bid:
- $\underbrace{ V_{-i}^{*} }_\text{ without i }>\underbrace{  V^{*}-v_{i}(S_{i}^{*}) }_\text{ excluding i }$ because, thus $0\leq p_{i}$
- $p_{i}=v_{i}(S_{i}^{*})+\underbrace{ V_{-i}^{*}-V^{*} }_{<0  }$ because $V^{*}>V_{-i}^{*}$, i.e. adding more bidders cannot decrease welfare.

<u>Second</u>, fixing other's bids $\vec{b}_{-i}$, $i$ will be incentivized to tell the truth of $b_{i}$. Consider the situation where the auctioneer took these bids and allocated $\hat{S}=(\hat{S_{1}},\dots,\hat{S_{n}}).$
$$
\begin{align}
p_{i} & =V_{-i}^{*}- (V^{*}-v_{i}(S_{i}^{*})) \\
 &\coloneqq \text{max}_{S}\sum_{j\neq i}b_{j}(\hat{S_{j}})-\sum_{j\neq i}b_{j}(S_{j}^{*}) \\
\end{align}
$$
Now, the goal of bidder $i$ is to maximize their utility:
$$
\begin{align}
\mu_{i}(\vec{b}) & = v_{i}(\hat{S_{i}})-p_{i}(\vec{b}) \\
 & =v_{i}(\hat{S_{i}})-\left( \text{max}_{S}\sum_{j\neq i}b_{j}(\hat{S_{j}})-\sum_{j\neq i}b_{j}(S_{j}^{*}) \right) \\
 & =\underbrace{ v_{i}(\hat{S_{i}})+\sum_{j\neq i}b_{j}(S_{j}^{*}) }_\text{ i can maximize }-\underbrace{ \text{max}_{S}\sum_{j\neq i}b_{j}(\hat{S_{j}}) }_\text{ i cannot control } \\
\end{align}
$$
Thus, the problem of $i$ maximizing their utility $\mu_{i}$ is equivalent, by design of the pricing mechanism, as maximizing $v_{i}(\hat{S_{i}})+\sum_{j\neq i}b_{j}(S_{j}^{*})$, and this is equivalent to social welfare of the original auction.
$$
\text{max}_{b_{i}}\mu_{i}(b_{i},\vec{b_{-i}}) \iff \text{max}_{S}\sum_{i=0}^nb_{j}(S_{j})
$$
Thus $i$ is incentivized to tell the truth. <span style="float:right;">■</span>
