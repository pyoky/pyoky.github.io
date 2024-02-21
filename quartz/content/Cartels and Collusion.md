---
aliases: []
tags:
  - Economics/Game-Theory
  - Economics/Micro-Economics
---

## Cartels and the Natural Incentive to Defect

def. Cartels are when firms collude to act as a single monopolistic firm.

However, cartels cooperating is not a stable set of strategies, because it has a tendency to unravel, as it is a [[Prisoner's Dillemma]] situation.

We can analyze this for two firms in the following two ways:

![[スクリーンショット 2022-12-01 22.05.49.png|675]]

1. Using the profit for the hypothetical monopoly firm (graph a)

   1. Two firms each produce $\frac{1}{2}x^M$, and thus together produce $x^M$ at $p^M$.
   2. If I secretely produces one more unit of good:
      …both will lose red area together [=half each]
      …I will gain the profit of selling the additional units [blue area]

   → Thus I am incentivized to defect and produce more.

2. Using residual demand for one of the firms

   1. Assume the other firm is diligently cooperating to produce their $\frac{1}{2}x^M$.
   2. I will face a residual demand curve \[=$D^r$] which is shifted left $0.5x^M$
   3. my best option is to produce at $MR^r=MC$ which is $0.75x^M$, bigger than the promised $0.5x^M$

   → Thus I am incentivized to defect and produce more

> [!info] This is equivalent to the following **Prisoner’s Dillemma** situation:※

![Untitled](Untitled%2011.png)

## Aside on Prisoner’s Dilemma

> [!quote]
> def. **Prisoner’s Dillemma (PD)** is any game where the following payoff structure holds…
> …where $T> R> P> S$:
>
> ![[スクリーンショット 2022-12-01 22.23.06.png|350]]

### Finitely Iterated PD

In a finitely iterated PD, the Subgame Perfect Nash Equilibrium is to defect every game.

![Untitled|300](Untitled%201%206.png)

Solving from the last game:

1. Last Game: Knowing there will be no more games [= same as one-shot game], your dominant strategy is defection.
2. 2nd to last: Knowing that next game both will defect, your dominant strategy is defection.
3. …
4. The whole game **unravels** into a defection.

### Infinitely Iterated PD

Game design with:

- Infinitely many games
- probability that one will meet \[$\gamma$]
- discount parameter \[$PV= \frac{FV}{r}$]

In this case there are multiple Nash Equilibirum Strategies

1. ALL C is a BR to ALL C → **(ALL C, ALL C) is an NE**
2. TRIGGER is a BR to TRIGGER → **(TRIGGER, TRIGGER) is an NE**
   **Trigger Strategy**:= strategy where the opponent’s **current action** triggers my **future behavior.** e.g. “I will coop. until opp. defects, and defect always after that.”
3. TFT is a BR to TFT → **(TFT, TFT) is an NE**

> [!info] These strategies are subgame perfect. Let’s prove that for (TRIGGER, TRIGGER):

1. If we’ve always cooperated before, this subgame is same as original game
   → (TRIGGER, TRIGGER) is an NE
2. If there was non-cooperation before, this subgame has NE:
   → (ALL D, ALL D) is an NE

→ All subgames have NE (TRIGGER, TRIGGER).

∴ (TRIGGER, TRIGGER) is a SPNE
