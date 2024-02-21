---
aliases: []
tags:
  - Computing/Algorithms
---
### Notation
- $p$: a point
- $\phi:p\to c$: which center is assigned to point $p$
- $c_{1}\dots c_{k}$: centers
	- $k$: number of centers we want

## K-Max

Q. **K-Max.** K-Clustering with cost as maximum distance from center

alg. **K-Max approximation**.
1. Choose any point as one center
2. Choose the point most distant from any chosen center points
3. Repeat until you have any many centers as you wish
- Tight 2-approximation
	- Use triangle inequality

## K-Means

Q. **K-Means.** K-Clustering with cost total squared distance (equiv. to cost mean squared distance): 
$$
C=\sum ||p-\phi(p)||^2

$$
alg. **Lloyd's Approximation Algorithm.** (=K-Means Approximation)
1. Initialize $k$ centers arbitrarily
2. Divide into clusters
3. Recompute new centers as the mean point of each cluster
4. Repeat as many times as you want
Analysis
- Guaranteed that every iteration will only decrease cost (=will converge)
- Converged centers are *not* guaranteed to be global optimum

alg. **K-Means++ Approximation Algorithm.**
1. Initialize $k$ centers by...
	1. Choose any first center $c_{1}$
	2. Choose randomly another point as the next center, but the probabiliy of choosing point $p$ is proportional to distance between $c_{i}$ and $p$
	3. Repeat until we have all centers $c_{1}\dots c_{k}$
2. Run Llyod's algorithm
3. Re-initialize, re-run Llyod for $T$ trials
Analysis
- $E(\text{ALG}[T=1])=O(5\ln k+10)\text{OPT}$
- $ALG\left[ T=O\left( \log \frac{1}{\epsilon} \right) \right]=O(\ln k)OPT$ with probability $1-\epsilon$ 
	- i.e. after $T=O\left( \log \frac{1}{\epsilon} \right)$ trials...
	- the best trial run will *very likely* have cost $O(\ln k)OPT$
