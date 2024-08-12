---
aliases: 
tags:
  - Economics/Game-Theory
---
def. **Sponsored Search Auction.** This is a different game layout. Imagine a search engine selling advertisement slots. ^e95333

![[Auction Theory-20240212171209827.png]]
- There are $k$ ad slots, with click-thru rate, largest to smallest: $\alpha_{1},\dots,\alpha_{k}$
- There are $n$ bidders, for whom the value-per-click is $v_{1},\dots,v_{n}$. Each bids $b_{i}$ to get any slot.
- Then, if bidder $i$ is assigned slot $l$ and charged $p_{i}(\vec{b})$ ![[Auction Theory-20240212171442906.png|366]]
	- Allocation matrix is $\mathbf{x}$ and $\mathbf{x}_{il}=1$
	- price matrix is $\mathbf{p}$ and $\mathbf{p}_{il}$ is the price charged

def. Generalized Second Price Auction. 