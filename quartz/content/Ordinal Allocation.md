---
aliases: []
tags:
  - Economics/Game-Theory
---
**Motivation.** We move on from cardinal allocations where the [[Utility Function]] is numerically defined, into a situation where there is only an ordinal ranking by the agents. This is more realistic in real life, since most people are able to identify which item they prefer even if they can't assign it a numerical utility value.
In order for any of this to be remotely fair, we need to allow probabilistic allocation. This means that the allocation solution $P$ is for each item $a$ and agent $i$, gives a probability $P_{i,a}$ that the item is allocated to the agent:
$$
P_{i,a}\coloneqq \mathbb{P}(\text{$a$ is allocated to $i$})
~\text{s.t.} \sum_{\forall a}P_{i}=1
$$
For convenience, let's also define a cumulative distribution function, for each agent.
$$
P_{i}(t)=\sum_{a \preceq t}P(a)
$$
We might visualize two different allocation $P,Q$ for which for agent $i$ the cumulative allocation function $P_{i},Q_{i}$ is visualized like this:
![[Pasted image 20240329162300.png|312]]

Now we can define a few properties of baysian allocations.

def **Stochastic Dominance (SD)**. Allocation $P_{i}$ stoastically dominates distribution $Q_{i}$ for agent $i$ iff
$$
\nexists a \text{ such that }\underbrace{ \sum_{a'>a}P_{i}(a') }_\text{ probability to get at least a or better }< \sum_{a'> a}Q_{i}(a') 
$$
*Example.* Agents $1..4$ want items $a,b$ with the preferences shown below.
![[Pasted image 20240329163003.png]]
- First allocation $P$ is stochastically dominated by second allocation $Q$ for agents $1,2$ because:

| Probability under.. | $a$            | $a \lor b$     | $a \lor b \lor \emptyset$ (=get sth) |
| ------------------- | -------------- | -------------- | ------------------------------------ |
| $P$                 | $\frac{5}{12}$ | $\frac{6}{12}$ | $1$                                  |
| $Q$                 | $\frac{1}{2}$  | $\frac{1}{2}$  | $1$                                  |
There is no item where getting $P$ gets clearly better than $Q$. Therefore $Q$ stochastically dominates $P$. 

def. **(Preferences in Ordinal Allocation)** This is how we define preferences in ordinal situations. $P$ stochastically dominates $Q$ for $i$ is equivalent to saying $P \succ_{i}Q$. 
- ! But note that we cannot say anything about indifference. Stochastic dominance is defined over a partial ordering (we won't go into more detail) which means there cannot be two different sets $i$ is indifferent about.

We define [[Fairness (Economics)]] in the following ways:

def **Ordinal Efficiency (OE).** Allocation $P$ is pareto-optimal when there does not exist any other allocation $Q$ which is a pareto improvement than $P$:
- Nobody are worse off: $\forall i, Q_{i} \succeq P_{i}$
- Some are improved: $\exists i^{*} Q_{i^{*}} \succ P_{i^{*}}$

def. **Ex-Post Pareto Optimality.** Allocation $P$ is Ex-post PO when every possible matching in the distribution $P$ is Ordinally Efficient.

There are two definitions of envy-freeness in probabilistic allocations:
- def. **Weak Envy-Free (WEF).** Allocation $P$ is WEF when there exists no $P_{j}$ that stochastically dominates for $P_{i}$.
- def. **Strong Envy-Free (SEF)**. Allocation $P$ is SEF when it stochastically dominates all other agent's allocation.


## Random Dictatorship


- [x] Proofs of various ordinal allocation schemes #task

thm. **RD is DSIC.** Trivially. You are best off when you choose your item on the first try. Induction.

thm. **RD is Ex-post PO.** Trivially. If there are at least as many agents as items, then every agent picks their favorite among that's left, and nobody can really improve by swapping. Induction.

thm. **RD is WEF.** (will not prove)

thm. *(Not strong envy-free.)* *Counterexample*.

![[Ordinal Allocation-20240417193139158.png]]
- agent $1$'s allocation's cumulative allocation is $\left( \frac{1}{2}, \frac{4}{6},1\right)$ 
- agent $3$'s allocation's cumulative allocation w.r.t. $1$'s preferences is $\left( 0, \frac{5}{6}, 1 \right)$ 

thm. *(RD is not ordinally efficient.)* *Counterexample*. (Same example from above)
![[Ordinal Allocation-20240417193933427.png|421]]
## Proportional Eating

thm. **PE is not truthful.** *Counterexample.*  ![[Ordinal Allocation-20240418154122103.png|446]]

thm **PE is SEF if all agents have different preference orderings** (WEF if exists two agents with same ordering). *Proof sketch* by induction:
- Let $S_{1}$ be the timepoint $a_{1}$ is fully eaten, $S_{2}$ when $a_{2}$ is fully eaten, and so on. 
- Let agent $i$ have preference $a_{1}\succ a_{2} \succ \dots \succ a_{m}$ of $m$ items of set $T$. 
Then, agent $i$ eats $a_{1}$ first. Everybody eats at the same rate, so there is no agent who can eat even more than agent $i$. Agent $i$ eats it from time $0$ to $S_{1}$:
$$
\forall j,S_{1}=P_{i,a_{1}}\geq P_{j,a_{1}}
$$
Then, $i$ moves on to eat $a_{2}$ from time $S_{1}$ to $S_{2}$. No other agent can eat more of $a_{1}$ AND $a_{2}$ than agent $i$ (unless they both eat identically):
$$
\forall j,P_{i,a_{1}}+P_{i,a_{2}}>P_{j,a_{1}}+P_{j,a_{2}}
$$

Induce into all $m$ items:
$$
\forall j, \sum_{\forall a}P_{i,a}>\sum_{\forall a}P_{j,a}
$$
(equality when $i,j$ have identical preferences). Considering all of these cases together:
$$
\forall a,\forall j \sum_{a'>a}P_{i,a}> \sum_{a'>a}P_{j,a}
$$
Therefore $i$ does not envy anybody else. <span style="float:right;">■</span>


thm **PE is Ex-Post PO.** We will go through a lemma first.
def. In allocation $P$, call $a_{2} \overset{ \tau }{ \to }a_{1}$ ("$a_{2}$ tau-s $a_{1}$") iff there exists an agent $i$ which prefers $a_{2}$ over $a_{2}$, but has also eaten some of $a_{1}$ (and obviously ate $a_{2}$ beforehand). Allocation-wise, $a_{2} \succ_{i}a_{2}$ and $P_{i,a_{1}}>0$.
*Lemma.* If an allocation $P$ is *not* Ex-Post PO, then there exists a cycle, i.e. $a_{1}\overset{ \tau }{ \to }a_{2} \overset{ \tau }{ \to }\dots \overset{ \tau }{ \to }a_{1}$
Then *Proof by contradiction.* Assume $PE$ produces and allocation $P$ that is not EX-post PO; by the lemma this allocation must have a tau-cycle:
For the tau'ing $a_{\gamma-1} \overset{ \tau }{ \to }a_{\gamma}$ in this cycle, Find the agent $i_{\gamma}$ that tau'ed these items. Let the timepoint when $i$ starts eating $a_{\gamma}$ be $S_{\gamma}$. By this time $a_{\gamma-1}$ must have been fully eaten; thus $S_{\gamma-1}< S_{\gamma}$.
We can do this for every tau'ed agent in the cycle. But then $S_{1}<S_{\gamma}$, but by cycle $S_{1}>S_{\gamma}$. This is a contradiction. Thus allocation $P$ which is produced by PE must be Ex-Post PO. <span style="float:right;">■</span>
*Proof Sketch of Lemma.* Assume allocation $P$ which is not ex-post PO, i.e. there exists another allocation $Q$ where some agent $i$ is better off in $Q$, i.e. $Q_{i} \succ P_{i}$ (=$Q_{i}$ stochastically dominates $P_{i}$.) Focus on this agent $i$. 
Then, there must exist for this agent a pair of items (call them $a_{2},a_{1}$) where:
1. $a_{2} \succ_{i}a_{1}$
2. $Q_{i,a_{2}}>P_{i,a_{2}}$ because for $i$ $Q$ is better because it eats more of the better one.
3. $Q_{i,a_{1}}<P_{i,a_{1}}$ because probability for each row must both sum to $1$. 
![[Ordinal Allocation-20240418153655574.png|443]]
  Thus $P_{i,a_{2}}>0$ and in alloc. $P$, $a_{2} \overset{ \tau }{ \to }a_{1}$. Then, find another agent $j$ that $Q_{j,a_{2}}<P_{j,a_{2}}$. This $j$ exists because probability of each column sums to $1$ (for each allocation).
Now, for this agent $j$, find item $a_{3}$ that satisfies:
1. $a_{3} \succ_{j}a_{2}$
2. $P_{j,a_{3}}<Q_{j,a_{3}}$
This item $a_{3}$ must exist because row must sum to one. Then $P_{j,a_{2}}>0$ and in alloc. $P,$ $a_{2} \overset{ \tau }{ \to }a_{1}$
We can continue on but we must form a cycle of tau-ing because there are finite number of items. <span style="float:right;">■</span>



