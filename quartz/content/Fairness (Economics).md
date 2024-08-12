---
aliases: 
tags:
  - Economics/Game-Theory
  - Economics/Micro-Economics
---
**Motivation.** In Game Theory we attempt to formalize our intuitive notion of fairness into rigorous mathematical statements, in order to be able to prove if our allocations are fair or not. There are many different was of doing this, and we will define a few:
1. Scale Invariance (You can't compare utilities)
2. Envy-Free
3. [[Pareto Efficiency]] (see linked definition.)
4. Proportionality
In these definitions, we assume there are $m$ divisible items, and $n$ agents. We also assume that the [[Utility Function]] of the agents are
- Continuous
- Strictly increasing across a single item, for all items
- Concave (diminishing returns)
In other words, the agents have [[Rationality (Economics)|Rational Taste]].

def. **Scale Invariace.** An Allocation is fair if it only depends on the ordinal preferences of the agents, not their cardinal value. i.e., if we scale any agent's utility $\mu_{i}$ by $\alpha \mu_{i}$, the allocation would not change.

def. **Envy-Free (EF).** An allocation is envy free if they like their allocation rather than anybody else's; $\forall i,\forall j,x_{i} \succeq_{i}x_{j}$.

def. **Proportionality (Prop).** Allocation of $\frac{1}{n}$ of each item to each agent shouldn't be a better solution than the current allocation for every agent. i.e. 
$$
\forall i,~ \vec{x_{i}} \succeq_{i} \underbrace{ \left(\frac{1}{n}x_{1}, \frac{1}{n}x_{2},\dots, \frac{1}{n}x_{n} \right) }_\text{ Proportional allocation }
$$

### Other Fairness Criteria
- When EF cannot be achieved we may attempt approximate-envy freeness [[Integer Allocation#^82f64b|EF1]]
- [[Integer Allocation#^39881e|Maximin Share]] is another benchmark based on [[John Rawls|Rawlsian]] maximin principle. 
- In [[Ordinal Allocation]] methods, in a probabilistic allocation setting, we may need to use baysian versions of the above criteria.
- In Stable [[Matching Problems]], [[Ordinal Allocation#^68a2fd|stability]] is another fairness criteria.

## Directory of Allocation Methods

### Cardinal Utility Functions
- [[Fractional Allocation]] 
    - Fischer Market (=[[Fractional Allocation#^a2beca|CEEI]]) – SI, EF, Prop, PO
- [[Integer Allocation]]
    - Serial Dictatorship (=Round Robin) – EF1, but not anything else
    - Integer Nash Welfare – EF1, MMS-bounded
### Ordinal Utility Functions
- Probabilistic Allocation
    - Random Dictatorship – DSIC
    - Proportional Eating – BEF, BPO
- Stable Allocation (Kideney)
    - Top Trading Cycles (TTC) – DSIC, Stable
- Stable Matching (Marriage)
    - Gale-Shapley—Proposer-optimal
- Online
    - Deterministic Ski Rental $<2$ even in best
    - Randomized Ski Rental $< \frac{e}{e-1}$
    - Deterministic Whole $<2$
    - Fractional Greedy ($<2$ in example bad case) 
    - Fractional Water-filling ($\frac{e+1}{2e}$ in example bad case)