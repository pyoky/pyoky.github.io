---
aliases:
  - Subgame Perfect Nash Equilibrium
  - NE
  - SPE
tags:
  - Economics/Game-Theory
---
**Intuition.** Hierarchy of Games in game theory.
![[Equilibria in Game Theory-20240307130828585.png]]
## Pure Strategy

def. **Pure Strategy Nash Equilibrium** is a set of strategies _(one for each player)_ which is the best response strategy of each other’s move; _i.e._ you can’t deviate without destabilizing the equilibrium.
$$
\forall_{i \in \text{Players}},~s_{i}=\text{argmin}_{s \in S_{i}}c_{1}(s,\vec{s_{-i}})
$$
where:
- $\vec{s}_{-i}$: strategies of all other players (excluding $i$-th player)
- $s$: strategy for $i$-th player
- $S$: strategy set for $i$-th player
- $c_{i}(\vec{s})$: cost function for $i$-th player

### How to Find PNE
- In **Simultaenous** Games: Use the **Corner method**
- In **Sequential** Games:
	- _Make the Decision Tree into a Payoff Matrix_, and use the **Corner method**
	- Just test out every combination of [[Strategy]]

alg. **Corner Method to find NE.** Finding the Nash Equilibrium in a payoff matrix.
1. For each player:
2. For each **other player’s move;** highlight the line of the best response
→ When both the left and top lines are highlighted that is NE.

**Example.** Driving left or Right:

![[スクリーンショット 2022-11-28 14.58.42.png|530]]

![[スクリーンショット 2022-11-28 14.58.59.png|387]]

### Subgame Perfect Nash Equilibrium (for Pure Strategy)

def. A **Non-credible** threat is when the follower in a sequential move game says: “If I can’t win, I’ll take you down no matter how much it costs to me.”

- In the above game, $(R,R)$ is an example of a non-credible threat because when Player 1 chooses L, Player 2’s best response is L—but Player 2 threatens to go R. This is because they want the best possible outcome for them, ${R,(R,R)}$

def. **Subgame Perfect Nash Equilibria (SPNE)** are NE where the follower will only choose strategies that are best for them, and can’t threaten the leader beforehand with non-credible threats.

alg. **Backwards Induction.** To find the SPNE of a game, use Backwards Induction:
1. Determine the **last player’s** best strategy
2. The **second-last player** knows what the **last player** will do. Then determine what the **second-last** player will do.
3. Continue solving until the first player.
- Example. Caterpillar game unraveling![Untitled|400](Untitled%201%207.png)
- $SPNE={\{(d,d),(d,d)\}}$, payoff is (1,0) which is a lot worse off that global optimal.

## Mixed Strategy Nash Equilibrium

def. **Mixed Strategy Nash Equilibrium**
1. Each player $i$ chooses a distribution $\sigma_{i}$ over strategy set $S_{i}$ ← $\sigma_{i}$ is public knowledge
2. At runtime, each player chooses strategy $s_{i} \sim \sigma_{i}$ independent of other players
3. $(s_{1},\dots,s_{n})$ is a Mixed Nash Equilibrium if:
$$
\forall_{i}\forall s_{i}\in S_{i},~~\underbrace{ E_{\vec{s}_{-i}\sim \vec{\sigma}_{-i}}[C_{i}(s'_{i},\vec{s_{-i}})] }_{ \text{Expected cost after switching} }\geq \underbrace{ E_{\vec{s}_{-i}\sim \vec{\sigma}_{-i}}[C_{i}(s_{i},\vec{s_{-i}})] }_{ \text{Expected cost of potential equal. strat.} }
$$
thm. **(Existence of MNE, John Nash)** Any game with finite players and finite set of strategies for each player has an MNE.
*Proof.* The proof as three parts: the proof of [[Sperner's Lemma]], using it to prove [[Brouwer's Fixed Point Theorem]], and then reducing a mixed Nash Equillibrium to a fixed point in Brouwer's Fixed Point theorem. We will only reveal the last part in this proof.
Consider the following:
- Agent $i$ has the strategy set $S_{i}$. There are $k$ agents. Their payoff is $\pi_{i}(S_{i},S_{-i})$.
- $\Delta_{i}\coloneqq (p_{1},p_{2},\dots)$ is the mixed strategy set of agent $i$ with each corresponding to the probability of each strategy in $S_{i}$.
    - This makes it a unit simplex in $\mathbb{R}^{|S_{i}|}$
- $C\coloneqq \Delta_{1}\times \dots \times \Delta_{k}$ is all possible combinations of mixed strategy of all agents.
    - $C$ is a compact set, and we want to apply Brouwer's theorem on this space
Let function $f_{i}:\underbrace{ C }_\text{ combination of mixed strat. } \mapsto \underbrace{ \Delta_{i} }_\text{ i's mixed strat. }$ be:
$$
f_{i}(x_{i},\vec{x_{-i}})\coloneqq \underbrace{ \arg\max_{x' \in \Delta_{i}} }_\text{ maximize, return mixed strategy $x'$ } \underbrace{ \mathbb{E}(\pi_{i}(S)) }_\text{ ...that maximizes expected payoff }-\underbrace{ \mid\mid x_{i}'-x_{i}\mid\mid_{2}^{2} }_\text{ regularizaer (don't move fast) }
$$
Then, let function $f: C \mapsto C$ be defined $f(\vec{x})=(f_{1}(x_{1}),f_{2}(x_{2}),\dots,f_{k}(x_{k}))$. Then $f$ is continuous, thus there exists a point in which $f(\vec{x}^{*})=\vec{x^{*}}$. This means at $\vec{x^{*}}$ there is no more expected payoff maximization that can be made by any individual, i.e. MNE.
<span style="float:right;">■</span>

alg. **Computation of MNE** using [[Linear Programming]].
- The payoff matrix denotes what the column player (=minimizing player) gives to row player (=maximizing player)
1. Row player thinks that column player will minimize exchange (stackleberg solution)
2. Column player thinks that row player will maximize exchange (stackleberg solution)
3. Strategy tuple that satisfies both conditions is an MNE.

## Correlated Nash Equilibrium (CNE)

def. **Correlated Nash Equilibrium**
1. 3rd party computes joint distribution of all parties $S_{1}\times S_{2}\times\dots \times S_{n}$, to joint distribution $\sigma$ ← this joint distribution is public knowledge.
2. At runtime, 3rd party draws strategy vector $\vec{s}=(s_{1},s_{2},\dots,s_{n})\sim \sigma$
3. 3rd party tells player $i$ to play $s_{i}$
4. Player $i$ computes the posterior distribution of what other players will do: $\sigma_{-i}$
5. $(s_{1},\dots,s_{n})$ is a Correlated Nash Equilibrium iff:
$$
\forall_{i}\forall s_{i}\in S_{i},~~\underbrace{ E_{\vec{s}_{-i}\sim \vec{\sigma}_{-i}}[C_{i}(s'_{i},\vec{s_{-i}})] }_{ \text{Expected cost after switching} }\geq \underbrace{ E_{\vec{s}_{-i}\sim \vec{\sigma}_{-i}}[C_{i}(s_{i},\vec{s_{-i}})] }_{ \text{Expected cost of potential equal. strat.} }
$$
alg. **CNE Computation** Using [[Integer Linear Programming]]:
![[Equilibria in Game Theory-20240125140121780.png]]

Example of Correlated Nash Equilibirum: Traffic Lights game:
![[Equilibria in Game Theory-20240125140851557.png|533]]

# Imperfect Information

## Baysian Nash Equilibrium

In a
- mixed strategy (players each have probability of action)
- one-shot game
def. **Baysian Nash Equilibirum** is a set of strategies that are mutual best responses given a certain probability of other's actions

- For a BNE to exist, each person's strategy must assign probabilities such that the opponent is neutral to each of their options. (if not, it means there is a dominant strategy for the opponent)

def. **Perfect Baysian Equilibirum.** In a mixed strategy, finitely repeated game, with each player having a **belief** a Perfect Baysian Equilibirum is one that
- the player's beliefs are consistent with strategy (rational)
- is a BNE for each subgame
→ [[Signaling Game]] is a good example
