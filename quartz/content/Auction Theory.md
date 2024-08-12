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

## Types of Auctions

_Remark._ An auction can be not DSIC and welfare-maximizing 🤯.

- Single-Item
    - Deterministic Valuations
        - [[Vickery Auction#^de8823|Second Price]] (DSIC, Welfare-Max)
        - [[Vickery Auction#^28769f|First-Price]] (Revenue-Max)
    - Bayesian values
        - [[Revenue-Maximizing Auctions#^ca1a42|Vickery Auction with Reserve]] (DSIC if regular, Revenue-max)
- Multi-Item
    - Single-item Demand, Indivisible (=sponsored search)
        - [[Vickery Auction#^e95333|Generalized Second Price]] (Welfare-Max)
        - Virtual Second Price (Revenue-Max)
    - Combinatorial Demand, Indivisible
        - [[VCG Auction]] (DSIC, Welfare-Max)
        - [[Ascending Price Auction#^8f0f47|Ascending Item Price]] → W.E. (Welfare-Max)
    - Combinatorial Demand, Indivisible—Price discriminatory
        - [[Ascending Price Auction#^d85cec|Ascending Individual Bundle Price]] → C.E. (Welfare-Max)
    - Combinatorial Demand, Indivisible, Bayesian
        - ? (Welfare-max)
        - ? (Revenue-max)

## Properties of an Auction

**Motivation.** An auction's goal is to:
- Make sure each person tells the truth, i.e. $v_{i}=b_{i}$
- Maximize total utility, i.e. $\sum\mu_{i}$
- Sometimes, to maximize seller revenue.
Therefore, we want an auction that will satisfy the following two properties.

def. **Welfare Maximizing** (=Socially _Efficient_). An auction is welfare-maximizing iff Given all bidders are truthful, then it maximizes $\sum_{\forall i}v_{i}x_{i}(\vec{b})$

def. **Dominant Strategy Incentive Compatibility (DISC).** Intuition: all bidders are incentivized to tell the truth. An auction is DISC iff:
$$
\forall i,\forall b,\text{regardless of }\vec{b}_{-i},\underbrace{ \mu_{i}({\color{red}v_{i}},\vec{b}_{-i}) }_{ \text{utility for telling truth} }\geq\underbrace{  \mu_{i}({\color{red}b_{i}},\vec{b}_{-i}) }_{ \text{utility for lying} }
$$

def. **Revenue Maximizing** (=Optimal). See [[Revenue-Maximizing Auctions]].
### Myerson's Lemma (or, How to Be DSIC)
Motivation. Instead of directly showing that an auction mechanism is DSIC, it is enough for it to satisfy the properties of the following Myerson's lemma.

thm. **Myerson's Lemma.** An auction is DSIC (=truthful) _if and only if_ it satisfies the following to properties:
1. Given other agent's bids $\vec{b}_{-i}$, the allocation function $x_{i}(b_{i},)$ is a monotonically increasing function
    1. i.e. if $b'_{i}>b_{i}$ then $x_i(b’_i, b_{-i}) \geq x_i(b_i, b_{-i})$
2. Given $\vec{b}_{-i}$, the optimal price $p_{i}(b_{i})=b_{i}x_{i}(b_{i})-\int_{0}^{b_{i}} x_{i}(z) \, dz$

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
