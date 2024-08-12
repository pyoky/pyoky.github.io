---
aliases:
  - Prophet Inequality
tags:
  - Economics/Game-Theory
---
**Motivation.** Imagine a gambling situation, where there is a sequence of prizes inside boxes. The gambler knows the distribution of these boxes, but is only shown one at a time. They can claim only one box, and once a box is opened the prize must be claimed or trashed. How can the gambler act?
![[Optimal Stopping Problem-20240220173352303.png]]

def. **(Optimal stopping problem)** let prizes of random variables $X_{1},X_{2}\dots,X_{n}$ be distributed $F_{1},F_{2},\dots,F_{n}$. The gambler only knows the distribution of each of these boxes, and the order in which the boxes are shown is shuffled randomly.

thm. **Prophet Inequality.** There is a strategy for the gambler to achieve at least $\frac{1}{2}$ of the optimal revenue, i.e.:
$$
\mathbb{E}(\text{payoff})\geq \frac{1}{2}\mathbb{E}(\text{max}_{i=1}^{n} X_{i})
$$
where...
- $\text{payoff}$ is the payoff to the gambler
- let $X^{*}\coloneqq \text{max}_{i=1}^{n}X_{i}$, a random variable. This is what the "Prophet" gets, i.e. a optimal strategy.
Additionally, the theorem states that this strategy is a optimal cutoff strategy, which is one that stops if the payoff from the current opened box is larger than predetermined cutoff $w$.

**Proof.** We know that $\text{payoff}=\text{base payoff} +\text{excess payoff}$ where
- base payoff is $w$
- excess payoff is $X_{j}-w$, where $X_{j}$ is the box we stop at
We also know that these two are random varibles:
$$
w=\begin{cases}
w & \text{if }X^*\geq w \\
0 & \text{else}
\end{cases}
$$
$$
\text{excess payoff}=\begin{cases}
\mathbb{E}((X_{j}-w)^{+})  & \text{if stopped at }X_{j}\\
0 & \text{if never stopped}
\end{cases}
$$
Now, the expected payoff is: 
$$
\begin{align}
\mathbb{E}(\text{payoff})=\underbrace{ \mathbb{P}(X^{*}\geq w)\cdot w }_\text{ expected base }+\underbrace{ \sum_{j=1}^{n}\mathbb{P}(\text{stopping at }X_{j})\cdot \mathbb{E}((X_{j}-w)^{+}) }_\text{ expected excess }
\end{align}
$$
We know that the probability of stopping at $X_{j}$ (from the first case of excess payoff) is:
$$
\begin{align}
\mathbb{P}(\text{stopping at }X_{j}) &=\mathbb{P}(\text{max}_{i=1}^{\textcolor{red}{ j-1 }}X_{i}<w) & \text{...that boxes before }j \text{ where } <w \\
& \geq \mathbb{P}(\text{max}_{i=1}^{\textcolor{red}{ n }}X_{i}<w)  & \text{...that all boxes are } <w \\
 & = \mathbb{P}(X^{\textcolor{red}{ * }}<w) & \text{by definition of }X^{*}
\end{align}
$$

Thus:
$$
\mathbb{E}(\text{payoff})\geq \mathbb{P}(X^{*}\geq w)\cdot w+ \underbrace{ \mathbb{P}(X^{*}<w)\cdot\sum_{j=1}^{n}\mathbb{E}((X_{j}-w)^{+}) }_\text{ take out since $X^*$ is not relevant to $j$ }
$$
<span style="float:right;">(lemma 1)</span>
On the other hand, the expected prophet payoff is 
$$
\begin{align}
\mathbb{E}(X^{*}) & =\mathbb{E}(w+\text{max}_{j=1}^{n}(X_{j}-w)) \\
 & \leq w+\mathbb{E}(\text{max}_{j=1}^{n}(X_{j}-w)^{+})  & \text{by definition of $(\dots)^{+}$}\\
 & \leq w+\sum_{j=1}^{n}\mathbb{E}((X_{j}-w)^{+}) & \text{sum greater than max}
\end{align}
$$
<span style="float:right;">(lemma 2)</span>
Noticing lemma 1 and lemma 2 both have term $\sum_{j=1}^{n}\mathbb{E}((X_{j}-w)^{+})$, we can organize for that:
$$
\frac{\mathbb{E}(\text{payoff})-w\cdot \mathbb{P}(X^{*}\geq w)}{\mathbb{P}(X^{*}<w)}\geq \sum_{j=1}^{n}\mathbb{E}((X_{j}-w)^{+})\geq \mathbb{E}(X^{*})-w
$$
Simplifying we get
$$
\mathbb{E}(\text{payoff})\geq\frac{1}{2}\mathbb{E}(X^{*})
$$
<span style="float:right;">■</span>
