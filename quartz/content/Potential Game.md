---
aliases: []
tags:
  - Economics/Game-Theory
---
def. **Potential Game.** A game is a potential game iff there exists a potential function that satisfies the following, for any player $i$ that changes their strategy from ${\color{red}s_{i}\to s_{i}'}$:
$$
\underbrace{ \phi({\color{red}s'_{i}},\vec{s}_{-i})-\phi({\color{red}s_{i}},\vec{s}_{-i}) }_{ \text{Change in Potential} }=\underbrace{ c_{i}({\color{red}s_{i}'},\vec{s_{-i}})-c_{i}({\color{red}s_{i}},\vec{s_{-i}}) }_{ \text{Change in Cost} }
$$
def. This function $\Phi(s_{i},\vec{s}_{-i})$ is a _potential function._ ^55d199
- $\vec{s}_{-i}$ denotes the strategies of the remaining players.

thm. **Potential Games always has a PNE**. Namely, for convex potential functions that have a global minima, that minima is the equilibrium.
- This NE is also achievable; let the system run, and it will reach NE (best-response dynamics)
- Every local minimum of the potential function is a NE
_Intuition._ Consider:
1. When a player improves their strategy to reduce their own costs, the potential decreases
2. This repeats until nobody can switch their strategy

An example of potential game analaysis for computing NE is [[Traffic Routing]]
