---
aliases: []
tags:
  - Economics/Game-Theory
---
def. **Sealed Bid Auction.** An auction is a game where there are a certain number of buyers, buyers each have their value, $v_{i}$ and bid, $b_{i}$. The auction process takes in the bids of all buyers $\vec{b}$, and outputs the allocation $\vec{x}(\vec{b})$ and price $\vec{p}(\vec{b})$.
- $\vec{x}=\langle x_{1},\dots,x_{i},…,x_{n} \rangle$ where $x_{i}$ is the allocation for buyer $i$
- $\vec{p}= \langle p_{1},\dots,p_{i},\dots,p_{n} \rangle$ where $p_{i}$ is the price charged for buyer $i$
- e.g. if there is one item to be sold, and the i-th player gets it, then:
	- $\vec{x}=\langle 0,\dots, 0,1,0,\dots,0 \rangle$
	- $\vec{p}= \langle 0,\dots,0,\$9.37,0,\dots0 \rangle$
- Nobody except $i$ knowns their true value: $v_{i}$

def. **Quasilinear Utility Model.** Each bidder, after the auction process finishes, has _utility_ and _welfare_:
$$
\underbrace{ \mu_{i}(\vec{b}) }_{ \text{utility} }=\underbrace{ v_{i}x_{i}(\vec{b}) }_{ \text{welfare=value} }-p_{i}(\vec{b})
$$
## Properties of an Auction

**Motivation.** An auction's goal is to:
- Make sure each person tells the truth, i.e. $v_{i}=b_{i}$
- Maximize total utility, i.e. $\sum\mu_{i}$
Therefore, we want an auction that will satisfy the following two properties.

def. **Dominant Strategy Incentive Compatibility (DISC).** Intuition: all bidders are incentivized to tell the truth. An auction is DISC iff:
$$
\forall i,\forall b,\text{regardless of }\vec{b}_{-i},\underbrace{ \mu_{i}({\color{red}v_{i}},\vec{b}_{-i}) }_{ \text{utility for telling truth} }\geq\underbrace{  \mu_{i}({\color{red}b_{i}},\vec{b}_{-i}) }_{ \text{utility for lying} }
$$

def. **Welfare Maximizing** (=Socially Efficient). An auction is welfare-maximizing iff Given all bidders are truthful, then it maximizes $\sum_{\forall i}v_{i}x_{i}(\vec{b})$

## Types of Auction Games

**Motivation.** A first-price auction (=give the highest bidder the item, then charge them their bid) is a bad idea because, assuming the highest bidder was truthful ($v_{i}=b_{i}$) then their utility is $v_{i}-b_{i}=0$. Thus this is not DISC and not a good auction. It's also very hard to reason about. Therefore we have…

game. **Second Price Auction.** Give to the highest bidder; charge them the second highest price.
- An ascending bid auction (=an e-bay auction) is actually a second price auction if you think about it. The last two bidders $(v_{1},b_{1})\geq(v_{2},b_{2})$ will increase their bids continually until they reach $b_{2}$, and then bidder $1$ bids just slightly above ($b_{1}=v_{2}+\delta$) to get the item.

thm. **Second Price Auction is Dominant Strategy Incentive Compatible.**
proof. There are only two cases where a bidder may lie.
1. Case one: a bidder lies to reduce the price of the item. But $p_{i}(\vec{b})$ does not depend on $\vec{v}$. Thus this is impossible
2. Case two: a bidder lies to get the item. But lying to get the item results in negative utility. ![[Auction Theory-20240212171059087.png|411]]<span style="float:right;">◆</span>

game. **Sponsored Search Auction.** This is a different game layout. Imagine a search engine selling advertisement slots.

![[Auction Theory-20240212171209827.png]]
- There are $k$ ad slots, with click-thru rate, largest to smallest: $\alpha_{1},\dots,\alpha_{k}$
- There are $n$ bidders, for whom the value-per-click is $v_{1},\dots,v_{n}$. Each bids $b_{i}$ to get any slot.
- Then, if bidder $i$ is assigned slot $l$ and charged $p_{i}(\vec{b})$ ![[Auction Theory-20240212171442906.png|366]]
	- Allocation matrix is $\mathbf{x}$ and $\mathbf{x}_{il}=1$
	- price matrix is $\mathbf{p}$ and $\mathbf{p}_{il}$ is the price charged

thm. **Myerson's Lemma.** A DSIC (=truthful) auction satisfies the following properties.
1. $x_{i}(b_{i})$ is a monotonically increasing function
2. Given $\vec{b}_{-i}$, the optimal price $p_{i}(b_{i})=b_{i}x_{i}(b_{i})-\int_{0}^{b_{i}} x_{i}(z) \, dz$
The implication goes both ways.

**Proof.**
<u>Property 1.</u> Allocation is monotonic w.r.t. bid amount. (=bid more, get more)
proof. By definition of DSIC, both of the following holds:
- reports $b_{i}$, actual value $v_{i}$: $v_{i}x_{i}(v_{i})-p_{i}(v_{i})\geq v_{i}x_{i}(b_{i})-p_{i}(b_{i})$ ⇒ $v_{i}[x_{i}(v_{i})-x_{i}(b_{i})]\geq p_{i}(v_{i})-p_{i}(b_{i})$
- reports $v_{i}$, actual value $b_{i}$: $b_{i}x_{i}(b_{i})-p_{i}(b_{i})\geq b_{i}x_{i}(v_{i})-p_{i}(v_{i})$ ⇒ $p_{i}(v_{i})-p_{i}(b_{i})\geq b_{i}[x_{i}(v_{i})-x_{i}(b_{i})]$
	- This is an argument from the fact that for any $\vec{b},\vec{v}$ DSIC guara ntees it's the best possible
From the two inequalities we get
$$
\begin{align}
v_{i}[x_{i}(v_{i})-x_{i}(b_{i})]\geq \dots \geq b_{i}[x_{i}(v_{i})-x_{i}(b_{i})] \\
\end{align}
$$
Thus $(v_{i}-b_{i})[x_{i}(v_{i})-x_{i}(b_{i})]\geq 0$ <span style="float:right;">■</span>

_Intuition_. $v_{i}-b_{i}$ and $x_{i}(v_{i})-x_{i}(b_{i})$ have the same signs. Which means $x_{i}$ is monotonically increasing.
![[Auction Theory-20240212173754652.png|424]]

<u>Property 2.</u> Optimal Price.
From the two inequalities in property 1 we get
$$
v_{i}[x_{i}(v_{i})-x_{i}(b_{i})]\geq p_{i}(v_{i})-p_{i}(b_{i})\geq b_{i}[x_{i}(v_{i})-x_{i}(b_{i})]
$$
We take the limit by pushing $v_{i},b_{i}\to v$
$$
vx_{i}'(v)\geq p_{i}'(v)\geq vx_{i}'(v)
$$
Thus $vx_{i}'(v)=p'_{i}(v)$. And integrating both sides
$$
\begin{align}
vx_{i}'(v)=p'_{i}(v)&\implies \int _{0}^v z\cdot x_{i}'(z)\, dz =\int _{0}^v p_{i}'(z)\, dx & \text{substitute }z \\
&\implies \int _{0}^v z\, d(x_{i}(z))=p_{i} (v) \\
&\implies p_{i}(v)=v\int_{0}^v 1\, d(x_{i}(z)) -\int_{0}^v 1\cdot x_{i}(z) \, dz & \text{integration by parts} \\
&\implies p_{i}(v)=vx_{i}(v)-\int_{0}^v x_{i}(z) \, dz
\end{align}
$$
<span style="float:right;">■</span>
_Intuition._ The geometric intuition for this is that the price for the allocated person is the rectangle minus the area under the graph, i.e. the blue region.
![[Auction Theory-20240212173055410.png|319]]

