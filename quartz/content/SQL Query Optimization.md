---
aliases: 
tags:
  - Computing/Data-Science
---
> [!info] Problem: How to actually process this:
> ![[SQL Query Optimization-20231215221808381.png|401]]
### Basic Strategies
- SQL Query rewriting
	- Make everything into joins!
- De-correlation: Correlated subqueries are de-correlated using "Magic" de-correlation
- Iterated (=pipelined) algorithm processes
	- Process one tuple, up the chain, one at a time
	- Will start producing results faster, but may not be fast in total
- Bottom-up Evaluation
	- Process the bottommost query, then up one level, etc.
	- Use temporary files to store intermediate results
## Heuristics-based Optimization

- Idea: estimate size of intermediate results to calculate total operation count
	- Cardinality estimation
- Given knowledge: $|\pi_{A}R|,|R|$
- Principles:
	- Preservation of Value

**Selection**

$$
\begin{align}
|\sigma_{A=val}|&\approx|R|\cdot\frac{1}{|\pi_{A}R|}=\frac{\text{Size of }R}{\text{Distict }
A \text{ values in }R} \\
|\sigma_{A=val}|&\approx |R|\cdot(1-\frac{1}{|\pi_{A}R|})
\end{align}
$$

- divide by the "selectivity factor"

**Conjunction, Disjunction** (AND, OR operations)
- Best when $A,B$ are independent columns

$$
\begin{align}
|\sigma_{A=u\land B=v}|&\approx|R|\cdot\frac{1}{|\pi _{A}R|\cdot |\pi_{B}R|}  & \text{Conjunction}\\
|\sigma_{A=u\lor B=v}|&\approx|R|\cdot\left( \frac{1}{|\pi _{A}R|}+\frac{1}{|\pi _{A}R|}-\frac{1}{|\pi _{A}R|\cdot |\pi_{B}R|} \right) & \text{Disjunction}
\end{align}
$$

**Range**
- Without $max,min$ values: just say $\frac{1}{3}$
- With $max=$`hi(R.A)` and $min=$`lo(R.B)`
	- & sometimes, highest and lowest is "invalid" → use second highest & lowest

$$
|\sigma_{A>v}|\approx|R|\cdot \frac{ max-v}{max-min}
$$

### Joins Estimation

**Natural Join**
- Assumption: containment—every tuple in smaller table joins with bigger table
- ⇒ selectivity factor is the bigger one one

$$
|R \bowtie S|\approx|R\times S|\cdot \frac{1}{max(|\pi_{A}R|,|\pi_{A}S|)}
$$

**Multi-way Join**
- Assumption: _preservation of value sets_—non-join attribute doesn't lose values
- ⇒ reduce by selectivity factor for every join

$$
|R(A,B) \bowtie S(B,C) \bowtie T(C,D)|\approx|R \times S\times T|\cdot \underbrace{ \frac{1}{|\pi_{B}R|,|\pi_{B}S|} }_{ \text{selectivity of first join} } \cdot\underbrace{ \frac{1}{|\pi_{C}S|,|\pi_{C}T|} }_{ \text{selectivity of second join} }
$$

**Projection over Join**
- Due to assumption of preservation of value sets…
- …when $R(A,B),S(B,C)$, $A$ does not appear in $S$. Therefore we estimate: 
$$
|\pi_{A}(R \bowtie S)|\approx |\pi_{A}S|

$$

> [!info] Nowadays people use histograms and ML for better estimation

## Join Plans
Q. given $n$ relations to join, how to join?![[SQL Query Optimization-20231212172740605.png|194]]
1. Brute Force: $\frac{(2n-2)!}{(n-1)!}$
2. Left-Deep Plan: $n!$ ![[SQL Query Optimization-20231212172910194.png|237]]
3. Greedy: $n^2$ ![[SQL Query Optimization-20231212172941783.png]]
4. Dynamic Programming:
	- Need to consider: _interesting orders_ (=sorted? deduped? etc.) need to be considered too!
	- ![[SQL Query Optimization-20231212173006952.png|495]]
