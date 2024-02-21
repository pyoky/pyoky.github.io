---
uid: 0090e3e1-1957-4e05-8935-7ce26a176987
aliases: []
tags:
  - Economics/Game-Theory
  - Economics/Micro-Economics
---
A theory of **interaction** between [[Rationality (Economics)|rational]] agents.
- [[Institutional Design]] is the field in public policy & [[Philosophy, Political Science, Economics|PPE]] that makes sure game theory & agent incentives are taken into account
- It's part of economics because it's about [[Rationality (Economics)|rational]] agents interacting

### Game
def. **Game**. Assuming $n$ players:
- $\mathcal{S}_{i}$: Strategy space of player $i$
- $\vec{s}=(s_{1},s_{2},\dots,s_{n})$: which strategy combination happened.
- $c_{1}(\vec{s}),c_{2}(\vec{s}),\dots,c_{n}(\vec{s})$: associated cost of $\vec{s}$ happening for each player

## Types of Games

- Timing:
	- _Static_ (=Simultaneous)
	- _Dynamic_ (=Sequential Move)
- Strategy Formulation:
	- _Pure Strategy_: deterministic mapping from _information set_ to action set ^hzlo35
	- _Mixed Strategy_: probabilistic mapping that depends on a [[Random Variable]]
- Information availability:
	- _Complete Information_
	- _Incomplete Information_
- Repetition:
	- _One-off_,
	- _Finite-Repetition_,
	- _Infinite-Repetition_
- Payoff structure:
	- _Zero-sum_: each strategy tuple sums to zero
	- _Positive/Negative Sum_

### Equilibria Types

→ See [[Equilibria in Game Theory]]
- Static, Pure, One-off→ Nash Equilibrium
- Dynamic, Pure → Subgame Perfect Nash Equilibirum
- Static, Incomplete, (Pure or Mixed) → Baysian Nash Equilbilibrium (BNE)
- Dynamic, Incomplete, (Pure or Mixed) → Subgame **P**erfect **B**aysian Nash **E**quilibirum (PBE)

### Games Modeled by Game Theory
> [!link] See [(DevonThink) Game Theory List of Games](x-devonthink-item://C9C859FF-EBE8-4399-B1AE-00F5850332DE) for many types of simultaneous game's payoff matricies.
- [[Oligopoly]] Games
	- [[Cartels and Collusion]]
	- [[Bertrand Price Competition]]
	- [[Cornout Quantity Competition]]
- [[Battle of the Sexes]]
- [[Prisoner's Dillemma]]
	- Public Good Game
- [[Signaling Game]]
- Stag Hunt
- Assurance Game
- Chicken Game
- [[Rock Paper Scissors]]
- Traffic Lights
- [[Traffic Routing]]

### Notation
- **Strategy Tuple** of player $A$ is denoted $S^A=(S^A_{1},S^A_{2})$
- **Payoff** to player $A$ given strategy $S^A$ by $A$, $S^B$ by player $B$, etc.
  ⇒ is denoted $\pi^A(S^A,S^\mathbf{B}\dots)$
	- Alternatively, Cost is given as: $C_{A}(S^A,\dots)$
- [[Equilibria in Game Theory|Nash Equilibria]] are **Tuples**: $NE=(S^A_{1},S^B_{2})$
	- In a simultaneous game, all player's strategy should be specified
	- In a sequential game, the second player (=follower)’s strategy should include the response **for all** **of** the first player (=leader)’s moves.
		- Notation: $SPE=(S^A_{1};S^B_{1},S^B_{2})$

## Branches of Game Theory

1. Experimental game theory
2. Evolutionary game theory—using game theory to explain strategies that affect natural selection
3. Applied game theory
