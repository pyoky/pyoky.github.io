---
aliases: []
tags:
  - Economics/Game-Theory
---
**Motivation.** When a government auctions of wireless spectrums to AT&T, Sprint, etc., they are not simply allocating one item per bidder. Instead the wireless carriers may want two spectrums but not one individually, or they might want all the spectrums to monopolize. We model these cases as a combinatorial auction.

def. **Combinatorial Auction**.
- $1\dots n$ bidders
- $M=\{ 1\dots m \}$ items
- $\Omega=\{ (S_{1},\dots,S_{n})\mid\text{is partition of } M \}$ ← "outcomes"
- Each bidder $i$ has valuation $v_{i}$ for every $S_{i}\in 2^{M}$; i.e. every possible allocation they can get

The following type of auction mechanisms are applicable in a combinatorial auction situation.
- [[VCG Auction]]
- [[Ascending Price Auction]]
