---
aliases:
  - Subgame Perfect Nash Equilibrium
  - NE
  - SPE
tags:
  - Economics/Game-Theory
---

def. **Nash Equilibrium** is a set of strategies _(one for each player)_ which is the best response strategy of each other’s move; _i.e._ you can’t deviate without destabilizing the equilibrium

alg. Finding the Nash Equilibrium in a payoff matrix.
 **Corner Method** to find NE in payoff matrix.
	1. For each player:
	2. For each **other player’s move;** highlight the line of the best response
→ When both the left and top lines are highlighted that is NE.

## Pure Strategy Nash Equilibirum

def. PSNE. $\vec{s}=(s_{1},s_{2})$ is PSNE for two players $1,2$ iff:
$$
\begin{align}
s_{1}&=\text{argmin}_{{\color{red}s} \in S_{1}}c_{1}({\color{red}s},s_{1}) \\
s_{1}&=\text{argmin}_{{\color{red}s} \in S_{2}}c_{2}(s_{1},{\color{red}s}) \\
\end{align}
$$

## How to Find NE

- In **Simultaenous** Games: Use the **Corner method**
- In **Sequential** Games: _Make the Decision Tree into a Payoff Matrix_, and use the **Corner method**:

e.g. Driving left or Right

![[スクリーンショット 2022-11-28 14.58.42.png]]

![[スクリーンショット 2022-11-28 14.58.59.png]]

## Subgame Perfect Nash Equilibrium (SPNE)

def. A **Non-credible** threat is when the follower in a sequential move game says: “If I can’t win, I’ll take you down no matter how much it costs to me.”

- In the above game, $(R,R)$ is an example of a non-credible threat because when Player 1 chooses L, Player 2’s best response is L—but Player 2 threatens to go R. This is because they want the best possible outcome for them, ${R,(R,R)}$

def. **Subgame Perfect Nash Equilibria (SPNE)** are NE where the follwer will only choose strategies that are best for them, and can’t threaten the leader beforehand with non-credible threats.

To find the SPNE of a game, use Backwards Induction:

1. Determine the **last player’s** best strategy
2. The **second-last player** knows what the **last player** will do. Then determine what the **second-last** player will do.
3. Continue solving until the first player.

![Untitled|400](Untitled%201%207.png)

$SPNE={\{(d,d),(d,d)\}}$, payoff is (1,0) which is a lot worse off that global optimal.

