---
aliases: []
tags:
  - Computing/Algorithms
  - Economics/Game-Theory/Games
---
Similar to [[Maximum Flow Problem]]. An instance of a [[Potential Game]].
## Selfish Traffic Routing

### Definitions
- flow on edge $e$ is $x_{e}$
- Congestion Function $c_{e}(x_{e})$ i.e. time taken
- Individual Delay for Path $P$: $\sum_{e \in P}c_{e}(x_{e})$
- Total Delay for all paths: $\sum_{\forall \text{cars}}\sum_{e \in P}x_{e} \cdot c_{e}(x_{e})$

### Pigou's Example
![[Selfish Traffic Routing-20240112180121192.png]]

- Nash Equilibrium when
	1. For all users of edge $a$, $c_{a}(x_{a})\leq c_{b}(x_{b})$
	2. For all users of edge $b$, $c_{b}(x_{b})\leq c_{a}(x_{a})$
	- Total delay $=(0\cdot1)+(1 \cdot 1)=1$
- Global Optimum when:
	- 
$$
\begin{align}
\text{Total Delay}&=(x_{a}\cdot 1) + (x_{b} \cdot x_{b}) \\
&= 1-x_{b} + x_{b}^2
\end{align}
$$
⇒ Total delay minimized when half goes thru $a$, other half goes thru $b$
### Braess's Paradox
i.e. adding a new road may worsen outcome for [[Nash Equilibrium]]  (but not in global minimum)
![[Selfish Traffic Routing-20240112181145692.png|326]]
- Consider before and after adding edge from $b\to a$, a superhighway with zero delay cost.
- NE *before* adding blue edge:
	- $0.5$ on top ($s\to a\to t$)
	- $0.5$ on bottom ($s\to b\to t$)
	- $\text{Total Delay} = \frac{3}{2}$
- NE *after* adding blue edge (superhighway):
	- all passes thru green path ($s\to b\to a\to t$)
	- $\text{Total Delay}=2$ ==(worse!)==
### For Social Planner...
 Observe that congestion network is a convex optimization problem:
- Total Delay function is a convex function
- Constraints (=conversation of flow) are linear:
	1. $\forall v$ inflow = outflow
	2. $\sum$ flow at source/target is $1$
	3. $f_{e}\geq 0$
### For Obtaining Nash Equilibirum...
thm. **Routing NE Uniqueness.** For every routing problem there is only one NE.

thm. **Obtaining NE of Congestion Network.** Minimizing the following function $\phi$ will yield the unique NE of any congestion network: 
$$
\phi(\vec{f})=\frac{a_{e}f_{e}^2}{2}+b_{e}f_{e}
$$

## Atomic Traffic Routing

![[Traffic Routing-20240117174338930.png|266]]

This time, there are $n$ cars (not infinitesimally small). If player $i$ chooses path $P_{i}$, then:
1. $m_{e}$: traffic (=# of cars) flowing thru edge $e$
2. Individual cost: $c_{i}(P_{i},\vec{P_{-i}})=\sum_{e\in P_{i}}c_{e}(m_{e})$
3. **Potential Function**: $\phi(\vec{P})=\sum_{\forall e}\sum_{j-1}^{m_{e}}c_{e}(m_{e})$
	- This is similar to the integral of costs for each edge: ![[Traffic Routing-20240117174359796.png]]
