---
aliases: []
tags:
  - "#Economics/Game-Theory"
  - Economics/Micro-Economics
---
_Motivation._ As opposed to [[Fractional Allocation]] where an item can be infinitely divided (and thus much [[Fairness (Economics)|fairness criteria]] are satisfied), in a situation where you cannot divide the items it is much harder to find a "fair" allocation. We will try nevertheless; here are a few attempts:
1. Converting fraction allocation to integer allocation
2. Serial Dictatorship
3. Nash Welfare Objective
> [!warning] In this document, we will always assume that $\mu_{i}$ is an [[Utility Function#^4b3170|additive utility]] function.
## Fractional to Integer

First use fractional, then convert to integer allocation.

## Serial Dictatorship

def. **Serial Dictatorship.** (Round Robin). The following process of allocation is a SD allocation:
1. Round $i$: Each agent picks favorite item
2. Repeat until all items allocated
_Properties._
- SD is EF1 (defined and proved below)
- SD is _not_ PO
- Comparable to MMS (bounded; see below)
def. **Envy-Free without one item (EF1).** An allocation is envy-free without one item if:
$$
\forall i,j~\exists \text{item }g \text{ s.t. } \underbrace{ \mu_{i}(S_{i}) }_\text{ i's alloc.}\geq \mu_{i}(\underbrace{ S_{j}-\{ g \} }_\text{ some other's alloc without $g$ })
$$
_Intuition._ If $i$ envies $j$'s basket $S_{j}$ (=traditional Envy) then take out one item $g$, and then $i$ no longer envies $S_{j}-\{ g \}$. ^82f64b

thm. **SD is EF1.**
_Proof._ For all agent $i$, let's say $i$ envies $j$.
1. Due to SD game order, $i$'s pick in the $k$-th round will always be preferred to $j$'s pick in the $k+1$-st round. Therefore, $i$ will: $\text{i's picks from round 1 to finish} \succ_{i} \text{j's picks from round 2 to finish}$
2. The issue arises because $j$ may pick before $i$ in round $1$. If we simply remove that item, $i$ will not envy $j$ anymore.
3. Therefore, in any pair of agents $i$ envying $j$, removing one item that was picked by $j$ before $i$ in the first round is enough to make $i$ no longer envy $j$. <span style="float:right;">■</span>
_Example._
![[Pasted image 20240324140918.png]]
- $2$ may envy $1$ because $2$ prefers $a$ to $d$, its first pick.
- But $2$ does not envy any other of $1$'s pick, because it picked it.
- Removing $a$ from $1$'s set makes $2$ no longer envy $1$.

### Comparison to MMS

def. **Maximin Share (MMS).** Imagine first an allocation process where ^39881e
1. $i$ splits the items first
2. All other agents chooses which item to have
3. $i$ gets the remaining item.
In this case, it is in $i$'s best interest to maximize the minimum utility bundle (for itself)'s utility. Thus we have the definition of MMS as the _utility_ of this maximin bundle:
$$
\mu_{i}(\text{MMS}_{i})\coloneqq \underbrace{ \text{max}_{S} }_\text{ maximize the... } \underbrace{ \text{min}\{ \mu_{i}(S_{i}) \} }_\text{ minimum utility bundle }
$$

_Example._ The blue groups are what each agent splits the items into to maximize their minimum utility. The red circles are an example allocation that give more utility than MMS for every agent. ![[Integer Allocation-20240415192540772.png|348]]
lem. **(MMS utility worse than proportional utility)**. If we allow a fractional allocation on items $T$, a proportional allocation will give utility $\frac{\mu_{i}(T)}{n}$ for agent $i$. On the other hand, if you use (integer) MMS allocation:
$$
\begin{align}
\mu_{i}(\text{MMS}_{i}) & =\max_{\text{allocation } S} ~\min_{S_{i} \in S} \mu_{i}(S_{i}) \\
 & \leq \max_{S} \underbrace{ \frac{\sum_{S_{i} \in S}\mu_{i}(S_{i})}{n} }_\text{ avg. utility of each good }  & \text{min. < avg.}\\
 & = \max_{S} \frac{\mu_{i}(T)}{n}  & \text{max doesn't apply}\\
 & =\frac{\mu_{i}(T)}{n}
\end{align}
$$
Therefore we $\mu_{i}(\text{MMS}_{i})\leq \frac{\mu_{i}(T)}{n}$ <span style="float:right;">■</span>

thm. **(Serial Dictatorship vs. Proportional vs. MMS)** Let $S_{i}$ be a serial dictatorship allocation. For agent $i$, let $\mu_{i}^{\max}$ be a single item that $i$ values the most. Then:
$$
\underbrace{ \mu_{i}(S_{i}) }_\text{ SD }+ \mu_{i}^{\text{max}}\geq\underbrace{  \frac{\mu_{i}(T)}{n} }_\text{ prop }\geq \mu_{i}(\text{MMS}_{i})
$$
_Proof._ Model the round robin with $n$ agents and items from set $T$, s.t. we call round 1 starting with agent $i$. All items allocated before $i$ in round 1, let $T_{0}$. These are ignored for now.
![[Integer Allocation-20240416144801676.png|158]]
Let the items allocated to agents in round $k$ be $T_{k}$. Let $\mu_{i}^{(k)}$ be the utility to agent $i$ by the single item allocated to $i$ on round $k$. For agent $i$ in every round:
$$
\begin{align}
\mu_{i}^{(k)} & \geq \max_{t \in T_{k}}\mu_{i}(t) \\
 & \geq \frac{\mu_{i}(T_{k})}{n} & \text{max}\geq \text{avg.} \\
\sum_{\forall_{k}}\mu_{k}^{(k)} & \geq \sum_{\forall k}\frac{\mu_{i}(T_{k})}{n}
\end{align}
$$
Now, consider the ignored items $T_{0}$. We can easily establish that:
$$
\begin{align}
\mu_{i}(T_{0})  & = |T_{0}| \underbrace{ \frac{\mu_{i}(T_{0})}{|T_{0}|} }_\text{ avg. } \\
 & \leq |T_{0}|\max_{t \in T_{0}}\mu_{i}(t)  & \text{avg.}\leq \max \\
 & \leq n\cdot \max_{t \in T_{0}}\mu_{i}(t) \\
& \leq n\cdot \max_{t \in T}\mu_{i}(t)
\end{align}
$$
Continuing on from above:
$$
\begin{align}
\sum_{\forall_{k}}\mu_{k}^{(k)} & \geq \frac{\sum_{\forall k}\mu_{i}(T_{k})}{n} \\
 \mu_{k}(\underbrace{ S_{i} }_\text{ SD alloc })& \geq\frac{ \mu_{i}(T\setminus T_{0})}{n}=\frac{\mu_{i}(T)-\mu_{i}(T_{0})}{n} \\ \\
&\geq \frac{\mu(T)-n \max_{t \in T}\mu_{i}(t)}{n} =\frac{\mu_{i}(T)}{n}-\max_{t\in T}\mu_{i}(t)

\end{align}
$$
Thus we have the final inequality w.r.t proportional allocation and thus MMS (due to theorem before).
$$
\mu_{i}(S_{i}) + \max_{t \in T} \mu_{i}(t) \geq \frac{\mu_{i}(T)}{n} \geq \mu_{i}(\text{MMS}_{i})
$$

<span style="float:right;">■</span>

thm. **(Alternative SD vs MMS)** Serial Dictatorship allocation $S_{i}$ satisfies for each agent that:
$$
\mu_{i}(S_{i})\geq \frac{1}{2} \text{MMS}_{i}
$$
_Proof._

<span style="float:right;">■</span>

## Integer Nash Welfare

def. **Integer Nash Welfare.** For integer allocation $x$, Nash welfare is:
$$
\text{Nash Welfare}\coloneqq \underbrace{ \prod_{i} }_\text{ product of everybody }\underbrace{ \sum_{j}\mu_{ij}x_{ij} }_\text{ Sum a person's utility }
$$
- NP hard to compute
- …but satisfies EF1

thm. (**Integer Nash Welfare objective satisfies EF1**).
_Proof._ Suppose in the allocation $S$, $i$ envies $j$ even remove one item. Now, choose $g^{*}$ as the most bang-for-buck item to move from $S_{j}$ to $S_{i}$:
$$
g^{*}\coloneqq \text{argmin}_{g \in S_{j}} \frac{\mu_{j}(g)}{\mu_{i}(g)}
$$
And we also note the inequality (1):
$$
\frac{\mu_{j}(g^{*})}{\mu_{i}(g^{*})}\leq \frac{\mu_{j}(S_{j})}{\mu_{i}(S_{j})}
$$

Now per our assumption, $i$ still envies $S_{j} \setminus \{ g^{*} \}$:
$$
\begin{align}
\mu_{i}(S_{i})  & <\mu_{i}(S_{j})-\mu_{i}(g^{*}) \\
\mu_{i}(S_{i})+\mu_{i}(g^{*})  & <\mu_{i}(S_{j})  & \text{multiply by } \frac{\mu_{j}(g^{*})}{\mu_{i}(g^{*})}\\ 
\frac{\mu_{j}(g^{*})}{\mu_{i}(g^{*})}(\mu_{i}(S_{i})+\mu_{i}(g^{*}))  &  < \underbrace{ \frac{\mu_{j}(g^{*})}{\mu_{i}(g^{*})} \mu_{i}(S_{j})\leq \frac{\mu_{j}(S_{j})}{\mu_{i}(S_{j})}\mu_{i}(S_{j}) }_\text{ by inequality (1) }  \\
 &  =\mu_{j}(S_{j}) \\
\frac{\mu_{j}(g^{*})}{\mu_{i}(g^{*})}\mu_{i}(S_{j})   & \leq \mu_{i}(S_{j}) & \text{inequality (2)}

\end{align}
$$
Now, on the other hand, since $S_{i},S_{j},\dots$ are NW allocations, it is the maximum product:
$$
\begin{align}
\mu_{i}(S_{i})\mu_{j}(S_{j})  & \geq \underbrace{ (\mu_{i}(S_{i})+\mu_{i}(g^{*})) }_\text{ give to i }\underbrace{ (\mu_{j}(S_{j})-\mu_{j}(g^{*})) }_\text{ remove from j } \\
\mu_{j}(g^{*})(\mu_{i}(S_{i}+\mu_{i}(g^{*})))  & \geq \mu_{j}(S_{j})\mu_{i}(g^{*})  & \text{expand and simplify}\\
\frac{\mu_{j}(g^{*})}{\mu_{i}(g^{*})} (\underbrace{ \mu_{i}(S_{i})+\mu_{i}(g^{*}) }_{ \leq \mu_{i}(S_{j}) \text{since I } })  & \geq \mu_{j}(S_{j})
\end{align}
$$

<span style="float:right;">■</span>
