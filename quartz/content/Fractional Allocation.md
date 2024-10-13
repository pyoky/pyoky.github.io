---
aliases: []
tags:
  - Economics/Game-Theory
  - Economics/Micro-Economics
---
_Motivation._ Given the [[Fairness (Economics)]] properties, we can start allocating things to people. Different allocation methods satisfy different fairness criteria. The most important allocation method is the _CEEI Allocation_, which is achieved by the _Fischer market_.

def. **Fischer Market.** The following describes a Fischer market. There are $m$ items and $n$ agents. There are $q_{j}$ units of item $j$.
1. All agents given $\$1$
2. Set prices at a certain point, $\vec{p}$ (ignore how we find this for now)
3. Agents fine their demand set:
$$
\vec{x}_{i}= \underbrace{ arg\text{max}_{x_{i}}~\mu_{i}(\vec{x_i}) }_\text{ Utility Maximization }\text{ s.t. } \underbrace{ \vec{p}\cdot \vec{x}\leq 1 }_\text{ Budget Constraint }
$$
To clarify the notation:
- $q_{1}^{(i)}$ is the amount of item $1$ allocated to agent $j$
- $q_{1}\coloneqq \sum_{\forall i}q_{1}^{(i)}$ which is the total amount of item allocated to

def. **Competitive Equilibrium with Equal Incomes (CEEI).** In a Fischer market, if we set the prices $\vec{p}$ just right, we will get a solution where: ^a2beca
1. All agents spend all their money $\forall i, \vec{p_{i}}\cdot\vec{x_{i}}=1$
2. All items are fully allocated (=market clears).
$$
\begin{align}
(q_{1}^{(i)},\underbrace{ \dots.,q_{j}^{(i)},\dots }_\text{ each item quantity to $i$},q_{m}^{(i)})& \coloneqq\vec{x_{i}}  & \text{then} \\
 \sum_{j}q_{j}^{(i)}  & =1  & \text{equivalently}
\end{align}
$$
3. The above two properties implies $\vec{p}\cdot\sum_{i}\vec{x_{i}}= \sum_{\forall j}\sum_{\forall i}q_{j}^{(i)}=n$
Then, this allocation is a CEEI.

thm. **CEEI always exists.**
(We won't prove.)

thm. *CEEI satisfies Scale Invariance, EF, Prop, and [[Pareto Efficiency]]*. Let $\vec{x_{1}},\vec{\dots}x_{n}$ be the CEEI allocation.
_Proof of SI._ In the Fischer market process agents will find their demand set. Demand set doesn't change depending on the scale of the utility; only the ordinal preferences.
_Proof of EF_. By contradiction. Assume $i$ envies $j$ s.t. $\vec{x_{j}} \succ \vec{x_{i}}$. But everybody has the same $1 thus $i$ could have just demanded $\vec{x_{j}}$ instead. Thus there is no envy.
*Proof of PR*. Since all money is spent by CEEI definition, $\sum_{j} p_{j}q_{j}=n$ where $q_{j}$ is the amount of units of item $j$. Then divide both by $n$ to get $\sum_{j}p_{j} \frac{q_{j}}{n}=1$ which means that the proportional allocation $\left(\frac{q_{1}}{n},\dots \frac{q_{m}}{n} \right)$ is feasible. But all agents demanded some other set $S_{i}$ thus it's at least as good as proportional allocation bundle.
*Proof of Pareto Optimality.* By contradiction.
Assume there is an alternative allocation $\vec{y_{1}},\dots,\vec{y_{n}}$ such that it is a Pareto improvement such that winners set $W$ denotes "winners" agents who improved: $\vec{y_{i}}\succ_{\forall i \in W} \vec{x_{i}}$ and "indifferents" set $I$ denotes agents who has same utility: $\forall i \in I,~ \mu_{i}(\vec{y_{i}})=\mu_{i}(\vec{x_{i}})$.
Now, for the winners, they didn't demand set $\vec{y_{i}}$ in CEEI allocation $\vec{x_{i}}$, so they clearly couldn't afford it: $\vec{p} \cdot \vec{y_{j}}>1$.
Now for the Indifferents; if $\vec{p} \cdot \vec{y_{i}}<1$ then they could have initially bought $\vec{x_{i}}=\vec{y_{i}}$ and a few more stuffs with leftover money. But they didn't demand anything other than $\vec{x_{i}}$, thus $\vec{p} \cdot \vec{y_{i}}\geq 1$ by contradiction.
Combining the inequality for winners and losers:
$$
\begin{align}
\sum_{i \in W}\vec{p} \cdot  \vec{y_{i}}+ \sum_{i \in I} \vec{p} \cdot  \vec{y_{i}} & >n \\
\sum_{\forall i} \vec{p} \cdot  \vec{y_{i}}  & >n \\ 
\vec{p}\cdot \sum_{\forall i} \vec{y_{i}}  & > \underbrace{ n=\vec{p}\underbrace{ \sum_{\forall i} \vec{x_{i}} }_{= (q_{1},\dots,q_{m})  } }_\text{ b/c CEEI clears market} \\
\sum_{\forall i}\vec{y_{i}}>\sum_{\forall i}\vec{x_{i}}
\end{align}
$$
But we also know that CEEI allocation $\vec{x_{1}},\dots, \vec{x_{n}}$ guarantees market clearing but $\vec{y_{1}},\dots,\vec{y_{n}}$ does not, so:
$$
\sum_{\forall i}\vec{y_{i}}\leq \sum_{\forall i} \vec{x_{i}}
$$
And this is a contradiction. <span style="float:right;">■</span>

Now, for the mystical $\vec{p}$, we can find that by using…

def. **Eisenberg-Gale (EG) convex program** is a [[Convex Programming]] for finding CEEI in additive utility. This maximizes:
$$
\text{max} \sum_{\forall i}\ln \mu_{i}
$$
w.r.t. the following constraints:
1. $\mu_{i}=\sum_{\forall j}\mu_{i,j}\cdot x_{i,j}$ ← utility is summation utility
2. $\sum_{\forall i}x_{i,j}\leq 1$ ← nobody overspends
3. $x_{i,j}\geq 0$ ← no under-allocation

thm. the EG Convex program finds the CEEI.
_Proof._ <span style="float:right;">■</span>
