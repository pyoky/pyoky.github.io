---
aliases: []
tags:
  - Computing/Algorithms
  - Economics/Game-Theory
---
Similar to [[Maximum Flow Problem]]. An instance of a [[Potential Game]].

## Atomic Traffic Routing

![[Traffic Routing-20240117174338930.png|266]]

This time, there are $n$ cars (not infinitesimally small). If player $i$ chooses path $P_{i}$, then:
1. $m_{e}$: traffic (=# of cars) flowing thru edge $e$
2. Individual cost: $c_{i}(P_{i},\vec{P_{-i}})=\sum_{e\in P_{i}}c_{e}(m_{e})$
3. **Potential Function**: $\phi(\vec{P})=\sum_{\forall e}\sum_{j-1}^{m_{e}}c_{e}(m_{e})$
	- This is similar to the integral of costs for each edge: ![[Traffic Routing-20240117174359796.png|484]]

thm. **(Potential function minimization derives PNE)** Minimizing the following potential function will give you the PNE.
$$
\Phi(f)=\underbrace{ \sum_{e \in E}  }_\text{ Over every edge }\underbrace{ \sum_{i=1}^{f_{e}}c_{e}(i) }_\text{ Area under cost function }
$$

_Proof_. The inner summation above is Intuitively the area under the cost, as illustrated above.
Then, consider an agent $i$ deviated from path $P_{i}$ to $\hat{P_{i}}$, which as a whole is a change from flow $f$ to $\hat{f}$. Then the difference in potential of these two flows is:
$$
\begin{align}
\Phi(\hat{f})   & = \Phi(f)+\underbrace{ \sum_{e \in \hat{P_{i}} \setminus  P_{i}}c_{e}(f+1) }_\text{ add deviated edges } -\underbrace{ \sum_{e \in P_{i} \setminus  \hat{P_{i}}}c_{e}(f) }_\text{ remove undeviated edges } \\
\Phi(\hat{f})-\Phi(f)  & =\underbrace{ \sum_{e \in \hat{P_{i}}}c_{e}(\hat{f}) }_\text{ $i$ 's cost at $\hat{P_{i}}$}- \underbrace{ \sum_{e \in P_{i}}c_{e}(f) }_\text{ ...at $P_{i}$ }
\end{align}
$$
![[Traffic Routing-20240307141504452.png|504]]


Thus, each user's goal is to minimize this potential function. Therefore the minimum of the potential function is the pure strategy nash eqilibirum. <span style="float:right;">■</span>

thm. **(existence of PNE).** _Proof outline._ This potential function will have one global minimum, if the cost functions are monotonically increasing (v.v. strictly increasing) and continuous, making $\Phi$ a (v.v. strictly) convex function which has a global minimum (v.v. a single global minimum). This shows that it PNE will always exist for monotonic cost functions. <span style="float:right;">■</span>

## Nonatomic Traffic Routing

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
$$
\begin{align}
\text{Total Delay}&=(x_{a}\cdot 1) + (x_{b} \cdot x_{b}) \\
&= 1-x_{b} + x_{b}^2
\end{align}
$$
⇒ Total delay minimized when half goes thru $a$, other half goes thru $b$
### Braess's Paradox
i.e. adding a new road may worsen outcome for [[Nash Equilibrium]] (but not in global minimum)
![[Selfish Traffic Routing-20240112181145692.png|326]]
- Consider before and after adding edge from $b\to a$, a superhighway with zero delay cost.
- NE _before_ adding blue edge:
	- $0.5$ on top ($s\to a\to t$)
	- $0.5$ on bottom ($s\to b\to t$)
	- $\text{Total Delay} = \frac{3}{2}$
- NE _after_ adding blue edge (superhighway):
	- all passes thru green path ($s\to b\to a\to t$)
	- $\text{Total Delay}=2$ ==(worse!)==

### For Social Planner…
 Observe that congestion network is a convex optimization problem:
- Total Delay function is a convex function
- Constraints (=conversation of flow) are linear:
	1. $\forall v$ inflow = outflow
	2. $\sum$ flow at source/target is $1$
	3. $f_{e}\geq 0$
### For Obtaining Nash Equilibirum…
thm. **Routing NE Uniqueness.** For every routing problem there is only one NE.

thm. **Obtaining NE of Congestion Network.** Minimizing the following function $\phi$ will yield the unique NE of any congestion network:
$$
\begin{align}
\phi(\vec{f})=\sum_{e \in E}\frac{a_{e}f_{e}^2}{2}+b_{e}f_{e}
\end{align}
$$

_Proof Sketch._ The following definition of $\phi$ will satisfy the definition [[Potential Game#^55d199|of a potential function]]
$$
\begin{align}
\phi(\vec{f}) & \coloneqq\sum_{e \in E}\int _{0}^{f_{e}}c_{e}(x) \, dx   \\
 & =\sum_{e \in E}\left[ \frac{a}{2}x^{2}+bx \right]_{0}^{f_{e}} \\
 & =\sum_{e \in E}\frac{a_{e}f_{e}^{2}}{2}+b_{e}f{_{e}}
\end{align}
$$

<span style="float:right;">■</span>
