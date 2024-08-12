---
aliases: []
tags:
  - Economics/Game-Theory
---
**Motivation.** Sometimes we aim to maximize revenue instead of social welfare.
- In this case, we assume that we know a little bit about the bidder's private valuations—we know the distributions $v_{i}\sim F_{i}$. (we call this a _baysian auction._)
	- This is because unless we do this, the revenue maximization is impossible, since it is hard to guarantee DSIC.)
- Then, in a DSIC auction $M=(x(\vec{b}),p(\vec{b}))$, the revenue maximization goal can be phrased as:
$$
\text{max}_{x,p}~\mathbb{E}\left( \sum_{\forall i} p_{i}(\vec{v})\right)
$$
In order to do to this, we introduce a new concept, and as we will see later it will simplify the above problem.

def. **Virtual Value.** For a bidders' true valuation $v_{i}$ whose CDF is $F_{i}(v_{i})$, PDF is $f_{i}(v_{i})$, the virtual value is defined as:
$$
\varphi(v_{i})\coloneqq \underbrace{ v_{i} }_\text{ want to collect }-\underbrace{ \frac{1-F_{i}(v_{i})}{f_{i}(v_{i})} }_\text{ information penalty }
$$
**Properties.**
- $\varphi(v_{i}) \leq v_{i}$
- $\varphi(v_{i})$ may be negative

**Intuition.** As annotated above, treat $v_{i}$ as the amount of money we would like to collect from bidder $i$. But this is discounted by a certain factor (="information penalty") because we know a bit of information about them—their distribution.

We can rephrase the above revenue maximization problem in terms of virtual value as the following:

thm. **(expected virtual welfare is expected revenue)**
$$
\mathbb{E}\left(\underbrace{ \sum_{\forall i}p_{i}(\vec{v}) }_\text{ revenue }\right)=\mathbb{E}\left(\underbrace{ \sum_{\forall i}\varphi_{i}(v_{i})x_{i}(\vec{v})U }_\text{ virtual welfare } \right)
$$

**Motivation.** Now the revenue maximization goal is simply to maximize expected virtual welfare. However, we still need to make sure the bidders are truthful, because we need to maximize over $\vec{v}$.
- ⇒ Using Myerson's lemma, we can create auctions that are truthful. The following are conditions of Myerson's lemma, applied in the context of virtual value.
- Then, we will give an example of this in a single-item many-bidder auction where these conditions hold.

def. **Vickery Auction with Reserve** ^ca1a42
1. Calculate virtual values $\varphi_{1},\dots,\varphi_{n}$ for all bidder's bids $b_{1},\dots,b_{n}$
2. Give the item to the bidder with the highest _virtual_ value $\varphi_{1}$, unless the highest bidder's virtual value is below zero—$\varphi_{1}<0$.
	1. The the highest bidder's virtual value is below zero, throw away the item. Auction is over.
3. Calculate the reserve price $r\coloneqq \varphi ^{-1}(0)$
4. Charge them $\text{max}(v_{2},r)$—either the reserve price, or the second-price
5. This auction will maximize revenue.

**Visual Interpretation.** An example of three different cases where different distributions lead to different virtual value
![[Revenue-Maximizing Auctions-20240220172222079.png|460]]

thm. (General case of revenue maximization.)
- Assuming $F_{i}$ is regular for every bidder $i$…
1. Transform the truthfully reported valuation $v_{i}$ into corresponding virtual value $\varphi_{i}(v_{i})$
2. Allocate by maximizing virtual welfare: $x(\vec{v})=\text{argmax}_{X} \sum_{\forall i}\varphi_{i}(v_{i})\cdot x_{i}$
3. Charge payments $p(\vec{v})$ according to the

def. **Regular Distribution.** A distribution is regular iff if its virtual value function is monotonic.

thm. If all bidder's values follows an i.i.d. _regular_ distribution, Vickery Auction with Reserve is DSIC.
