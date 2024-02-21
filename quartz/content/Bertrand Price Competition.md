---
aliases: []
tags:
  - Economics/Micro-Economics
---

Firms will choose _price_ as the strategic variable.
- Market Demand $x(p)=A-bp$ where $A,b$ are constants
- Simultaneous game
- Firm with lower price captures all of demand
### Case: Constant and Same Marginal Cost
- Marginal Cost is constant for both firms: $c(x)=cx$, $MC=c$
- Both firms will attempt to undercut each other.
	- $BRC_{1}:p_{1}(p_{2})=max\Big(p_{2}-\epsilon,MC\Big)$
	- $BRC_{2}:p_{2}(p_{1})=max\Big(p_{1}-\epsilon,MC\Big)$
	- $NE=\{ p_{1}=c,p_{2}=c \}$ where both firms have zero profit
	- ![[スクリーンショット 2022-11-29 13.17.08.png]]

### Case: Different but Constant Marginal Cost
- Marginal Cost is constant, but different for both firms
	- $c_{1}(x)=c_{1}x$, $c_{2}(x)=c_{2}x$, $c_{1}<c_{2}$
- Then…
	- $BRC_{1}:p_{1}(p_{2})=max(p_{2}-\epsilon,c_{1})$
	- $BRC_{2}:p_{2}(p_{1})=max(p_{1}-\epsilon,c_{2})$
	- $NE=\{ p_{1}=c_{2}-\epsilon,p_{2}=c_{2} \}$
		- & firm 1 can set undercut the price because they still have $c_{1}<c_{2}-\epsilon$
	- Firm 1 will make positive profit; firm 2 will make zero profit.

### Case: Sequential Move
- Change assumption: Dynamic game; firm 1 sets price first, then firm 2 sets price. ($c_{1}<c_{2}$)
	- Then, there cannot be a best response curve. Instead, consider the following subgame perfect Nash equilibirum: 
$$
\begin{align}
1&:p_{1}=c_{2}-\epsilon \\
2&:p_{2}=\begin{cases}
	min(p^M_{2},p_{2}-\epsilon) & \text{if}~c_{2}<p_{1} & \text{(can undercut price)}\\
	c_{2} & \text{if}~c_{2}\geq p_{1} & \text{(can't b/c MC)}
\end{cases}
\end{align}

$$
	- The following is a non-subgame perfect Nash equilibirum. The non-credible threat is when firm 2 threatens "I'm just gonna lose money if you don't listen.". Given a constant $k$, 
$$
\begin{align}
1&:p_{1}=p_{2}^M+k \\
2&:p_{2}=\begin{cases}
p_{2}^M & \text{if}~p_{1} \text{ sets what I want} \\
0 & \text{if}~p_{1}~ \text{isn't what I want}
\end{cases}
\end{align}
$$

- Different order: Dynamic game; firm 2 sets price first, then firm 1 sets price. ($c_{1}<c_{2}$ still assumed)
	- Then, SPNE 
$$
\begin{align}
2&:p_{2}=c_{2} \\
1&:p_{1}(p_{2})=\begin{cases}
min(p_{1}^M,p_{2}-\epsilon) & \text{if}~p_{2}>c_{1}\\
c_{1} & \text{else}~p_{2}<c_{1}
\end{cases}
\end{align}

$$


## If Product Can Be Differentiated
When we assume that products can be differentiated (=diversified), then we can improve on the Bertrand model;.
1. Consumers’ preferences are uniformly distributed across differentiation space $\mathbb{R}$
2. Firms can produce a product with a certain value $P$ of differentiated characteristic $P\in \mathbb{R}$
3. A consumer with preference $C$ will pay a cost when consuming $P$ which is proportional to the distance $\text{Cost}=|P-C|$
- Assume there exists a possibility of differentiation space ($\exists \mathbb{R}\in[0,1]$)
- However firms are **not allowed change product characteristics**.
- The only strategic variable is **price**.

![[スクリーンショット 2022-11-30 12.34.40.png]]

- First consider firm 1’s BRC:
	- If firm 1 gives away products for free $p_1=0$
		- …firm 2 can still charge a price since some consumers will prefer their products
		- …and $p_2>MC$ because firm 1 will exit otherwise.
	- If firm 2 charges a price $p_1>0$
		- …firm 2 can charge an even higher price since some consumers will prefer their products
	- Therefore the BRC is a positively sloping curve
- Firm 2’s BRC is symmetrical:
	- → Equilibrium is at the intersection of the two BRCs, and at this point $p_1^*=p_2^*$.
	- → Equilibirum price is above marginal cost, unlike pure Bertrand Price Competition

> [!info]
  Differentiation **“softens”** price competition. Therefore **firms want more differentiation**

### Determining Firm 2’s Best Response Curve:

![[スクリーンショット 2022-11-29 13.25.01 1.png]]

1. when **firm 1’s price < MC**, firm 2’s best response is set price at MC
2. when **firm 2’s price > MC**, firm 2’s best response is the _undercut_ firm 1’s price by a very small amount ($\epsilon$)

- Firm 2’s BRC is symmetric
→ Firms’ prices will unravel to both pricing to **p = MC (Bertrand price = MC)**
→ At $p=MC$, market will purchase $2x^M$, and firms produce $x^M$ each.

$$\begin{align}
p_{1}&=max[MC_{2}-\epsilon,MC_{1}] \\
p_{2}&=max[MC_{1}-\epsilon,MC_{2}]
\end{align}
$$

### Hotelling Model

- Products can be differentiated by one characteristic variable which ranges from 0 to 1.
- Differentiation is the only strategic variable; i.e. price, etc. cannot be changed.
  ![[スクリーンショット 2022-11-29 20.50.19.png]]

> [!hint]
> The graph and its corresponding explaination in the textbook is wrong; the following is the correct explaination.

Thinking about Firm 1’s BRC:
1. when firm 2 produces a product with **characteristic < 0.5,** then firm 1 will produce a product that is **just closer to 0.5 [=larger]** to capture more consumers
2. when firm 2 produces a product with **characteristic > 0.5,** then firm 1 will produce a product that is **just closer to 0.5 [=smaller]** to capture more consumers
3. when firm 2 produces a product with characteristic = 0.5, then firm 1 will produce a product with characteristic = 0.5.

> [!info]
> In a single axis (1-dim. differentiation space)
> ![[Humanities/Econ 201 Microeconomics/Monopolistic Competition c2ea385534ce4bb581e01fdfc17ee239/Untitled.png]]

→ Firm 2’s BRC is symmetrical; this unravels to the equilibrium where both firms produce product with characteristic = 0.5

### Circle Model

The circle model combines the Price Competition and Differentiation.

- This is a **sequential game** where firms will enter [first move] and then it will compete with price [second move]
  - Firms who enter incurs entry cost (an economic cost) of **FC** when they enter.
- **Price _and_ differentiation** are the two strategic variables.
  - Product differentiation space is around a circle whose circumference is 1.

Then the following conclusions:

> [!info]
 Each firm is respresented as a point on the circle.
 ![[Humanities/Econ 201 Microeconomics/Monopolistic Competition c2ea385534ce4bb581e01fdfc17ee239/Untitled 1.png]]

1. Firms will enter as long as $FC>\pi$ …①
2. Firms compete with their immediate neighbors
   → Firms will **space themselves out** around the circle

The number of firms entering $N$ and the equilibrium price given that $N$ firms have entered $p$ are determined in the following order:
1. $FC\mapsto N^*$ where $N \propto \frac{1}{FC}$ (∵ ①)
2. $N^* \mapsto p^*$ where $p \propto \frac{1}{N}$ but $p >MC$. Specifically:

![[Untitled 2 11.png|394]]
