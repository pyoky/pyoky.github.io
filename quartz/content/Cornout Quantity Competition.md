---
aliases: []
tags:
  - Economics/Micro-Economics
  - Economics/Game-Theory
---

Firms will choose _quantity_ as the strategic variable.

![[スクリーンショット 2022-11-29 13.31.14.png]]

- Determining Firm 2’s Best Response Curve:
	1. When firm 1’s quantity = 0, firm 2’s best response is to produce $x^M$ (=monopoly quantity)
	2. When firm 1’s quantity > 0, firm 2’s best response derived by the reduction in demand in graph (c):
		1. $D$ (=full market demand) is shifted left by $x_1$ (=firm 1’s produced quantity) to $D^r$; Firm 2’s BR is to optimize at $\text{MC}= \text{MR}$
		2. → This shows that when Firm 1 produces $2x^M$, $D$ will shift left so much that $\text{MR = MC}$ at $x_1=0$.
- Firm 1’s BRC is symmetrical, as shown in (b)
	- → Firms produce $x^C$ (= cournot quantity)
	- → $\frac{1}{2}x^M<x^C<x^B$

> [!info]
 Cornout Price $p^C$ **converges to competitive prices** $p=MC$ as the number of firms increase. (Take my word for this; it’s proven mathematically but not shown above)

### Sequential Move: Stackleberg Competition

- **Stackleberg Leader** is Firm 1, **Stackleberg Follower** is Firm 2

![[スクリーンショット 2022-11-29 15.48.46.png|408]]

Firm 1 considers Firm 2’s expected BRC before making a move:

Profit maximize knowing firm 2's BRC:
1. Graph (a) is the expected **Firm 2’s BRC**
2. When **Firm 1’s quantity $>x^*$** then firm 2 produces nothing
   → Firm 2 faces the full market demand ⇒$D=D^r$
3. When **Firm 1’s quantity $\in [0,x^M]$** then firm 2 faces the residual demand $D^r$ which is calculated by:
	- at $x_1=x^M$,
		- …then BR: $x_2=\frac{1}{2}x^M$ and $\Sigma x=\frac{3}{2}x^M$
		- …thus $D^r=D-\frac{1}{2}x^M$
		- …equivalently $D^r(x^M)=D(\frac{3}{2}x^M)$
	- at $x_1=0$,
		 - …then BR: $x_2=x^M$ and $\Sigma x=x^M$
		 - …thus $D^r=D-x^M=0$
		 - …equivalently $D^r(x_1[=0])=D(x^M)$

### Sequential Move: Entry Deterrence

#### Game Structure

- First move is _Firm 2’s entry decision_
- Second move is either _Cournot Quantity, Stackleberg Quantity competition_ (Bertrand isn’t considered)
- If firm 2 enters it must pay a **Fixed Cost (FC)** which is an economic cost to them (=matters in profit calculation).
  ![[スクリーンショット 2022-11-29 16.02.16.png]]

1. Firm 2 chooses entry;
	- …if it enters it must pay FC, and two players **cornout compete**;
	- …if it doesn’t its profit is zero, and Firm 2 is a monopoly
2. Firm 2 chooses entry;
	- …if it enters it must pay FC, and two players **stackleberg compete** with firm 1 as stackleberg leader;
	- …if it doesn’t its profit is zero, and Firm 2 is a monopoly
3. Firm 1 chooses quantity first;
	- …Firm 2 enters, paying FC, and **Firm 2 gets stackleberg follower** profit
	- …Firm 2 doens’t enter, and Firm 1 gets profit from its original quantity

⇒ The game structure of (c) allows for **strateigic entry deterrance** by firm 1:
#### Entry Deterence

- Firm 1 may deter entry to maximize profit by setting a certain quantity
- FC is an exogenous variable
  → firm 2’s entry decision will depend on how big FC is
  → thus, firm 1’s entry deterrence will depend on how big FC is

![[スクリーンショット 2022-11-29 16.05.37.png]]

(a) is the profit against a choice of production quantity for a monopoly.

→ Then, see (b):

- If $FC > \overline{FC}$: Second firm will not enter no matter
  …when $\overline{FC} =\pi^M$
- If $\underline{FC}<FC<\overline{FC}$: First firm will deter entry by increasing production
  …when $\underline{FC}= (x\text{ s.t. } \pi(x)=\pi^{SL})$
  …i.e. Firm will deter entry **until** $\pi$ drops so much that it’s better to compete (and get Stackelberg profit)
- If $FC < \underline{FC}$: normal stackleberg competition
  …where firm 1 is Stackelberg Leader (SL) and get $\pi^{SL}$
  …and firm 2 is Stackelberg Follower (SF) and get $\pi^{SF}$
