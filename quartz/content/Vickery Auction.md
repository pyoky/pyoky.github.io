---
aliases: 
tags:
  - Economics/Game-Theory
---

**Motivation.** A first-price auction (=give the highest bidder the item, then charge them their bid) is a bad idea because, assuming the highest bidder was truthful ($v_{i}=b_{i}$) then their utility is $v_{i}-b_{i}=0$. Thus this is not DISC and not a good auction. It's also very hard to reason about. Therefore we have… ^28769f

def. **Second Price Auction.** (=Vickery Auction) Give to the highest bidder; charge them the second highest price. ^de8823
- An ascending bid auction (=an e-bay auction) is actually a second price auction if you think about it. The last two bidders $(v_{1},b_{1})\geq(v_{2},b_{2})$ will increase their bids continually until they reach $b_{2}$, and then bidder $1$ bids just slightly above ($b_{1}=v_{2}+\delta$) to get the item.
- ! Not to be confused with [[Ascending Price Auction]]; they're ascending two different things.

thm. **Second Price Auction is DSIC.**

_proof._ There are only two cases where a bidder may lie.
1. Case one: a bidder lies to reduce the price of the item. But $p_{i}(\vec{b})$ does not depend on $\vec{v}$. Thus this is impossible
2. Case two: a bidder lies to get the item. But lying to get the item results in negative utility. ![[Auction Theory-20240212171059087.png|411]]<span style="float:right;">◆</span>

[[Sponsored Search Auction]]
