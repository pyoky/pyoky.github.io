---
aliases: []
tags:
  - Economics/Game-Theory
---
**Motivation.** Suppose you have to choose which route to take every day driving to work. You devise a complicated strategy, but one day your neighbor and coworker, who takes the same route to work every day, says "I don't have a strategy, I just take this one route every day." Wouldn't it be _regretful_ if it turns out, in total, your route took more time than your co-worker?

def. Online Decision Making Game.
- Player has $N$ actions to choose from, $X=\{ 1,\dots,N \}$
- At time $t$…
	1. Player constructs a distribution $p^t$ over the set of actions $X$
	2. Adversary chooses a loss for each action taken, $l_{i} \in \{  0,1 \}$, for every action $i\in X$ where $0$ represents no loss and $1$ represents a loss. (In our example, think of it as traffic conditions causing a delay.)
	3. Player's distribution $p^t$ is realized into action $k^t \in X$. The player incurs a loss of $l_{k^t}^t$.
- The player's goal is to minimize _total loss_, which we will define shortly.
- We play for time $t=0,\dots,T$. Number of iterations $T$ is predetermined.

We characterize the loss if we always chose action $i$ (like how our neighbor always takes the same route) for time $t=1,\dots,T$ as: 
$$
L_{i}^T\coloneqq\sum_{t=1}^Tl_{i}^t
$$
Thus we can define also:
- $L_{\text{min}}^T$ is the minimum total loss if we could only choose one action every time
- $L_{ALG}^T\coloneqq\sum_{t=1}^T l_{ALG}^t$ is the total loss of player playing strategy of $ALG$, $l_{ALG}^{t=1},l_{ALG}^{t=2},\dots$.

def. External Regret. For a player playing strategy $ALG$, the regret for this strategy is:
$$
R_{ALG}\coloneqq L_{ALG}^T-L_{\text{min}}^T
$$
i.e. the difference between total loss of algorithm and the best total loss of one-action-every-time strategy.

## Algorithms for Online Games

alg. **Greedy algorithm.** This algorithm chooses the action whose one-action-fits-all-time loss is smallest
1. Initially: $x^1=1$
2. At time $t$, choose $x_{i}$ such that we take the minimum possible $L_{i}^T$. In other words: 
$$
x_{i}^t \text{ such that }=\text{argmin}_{i}L_{i}^T
$$
- Breaks ties determinimistically, with the action with lowest index.

**Motivation.** This algorithm is really bad. Instead, we can try to confuse our adversary by mixing our strategy, i.e. a randomized algorithm.

alg. **Randomized Weighted Majority.**
1. Initially, play $i$ with probability $p_{i}^1=\frac{1}{N}$ for all $i\in X$
2. At time $t$... 
$$
w_{i}^t=\begin{cases}
w_{i}^{t-1}(1-\eta) & \text{if incurred loss, i.e. }l_{i}^{t-1}=1 \\
 w_{i}^{t-1} & \text{if incurred loss, i.e. }l_{i}^{t-1}=1 \\
\end{cases}
$$
- where $\eta$ is the discount factor
3. Calculate this new weight for every strategy $i$, and then play $i$ with probability 
$$p_{i}^t=\frac{w_{i}^t}{W^t}
$$
- where $W^t\coloneqq\sum_{i\in X} w_{i}^t$

This is a much better algorithm; in fact we can show how small its regret is.

thm. **(Regret Bound of Randomized Weighted Majority)** For $\eta\leq \frac{1}{2}$, the loss of RWM algorithm satisfies: 
$$
L_{\text{RWM}}^T\leq (1+\eta)L_{\text{min}}^T+\frac{\ln N}{\eta}
$$
**Proof.** Let $F^t$ denote the fraction of weights that are discounted because they incurred a loss. We show this is equal to the expected loss at timestep $t$:
$$
\begin{align}
F^t&\coloneqq\frac{\sum_{i;l_{i}=1}w_{i}^t}{W^t} \\
&=\sum_{i;l_{i}=1}\frac{w_{i}^t}{W^t} \\
&= \sum_{i\in X} \frac{w_{i}^t}{W^t}l_{i}^t \\
&=\sum_{i\in X} p_{i}^tl_{i}^t \\
&=\mathbb{E}(l^t)
\end{align}
$$
Now, we can express $W^{t+1}$ using $F^t$ way, by splitting the summation into those that incurred a loss and those that didn't.
$$
\begin{align}
W^{t+1}&\coloneqq\sum_{i\in X}^t w_{i}^t=
\underbrace{ \sum_{i;l_{i}=1}w_{i}^t(1-\eta) }_{
(1-\eta)\sum_{i;l_{i}=1}w_{i}^t
 }
\underbrace{ \sum_{i;l_{i}=0}w_{i}^t }_{ W^t-\sum_{i;il_{i}=1} }\\
&=(1-\eta)F^tW^t+(W^t-F^tW^t) \\
&=W^t-\eta F^tW^t \\
&=W^t(1-\eta F^t)
\end{align}
$$
We can now construct the inequality:
$$
\begin{align}
\text{max}_{i}w_{i}^{t+1}&\leq W^{t+1} &\text{sum is greater than max} \\
(1-\eta)^{L_{\text{min}}^T}&\leq W^{t+1} &\text{max weight is one with min loss} \\
&=W^1(1-nF^1) \times\dots \times(1-nF^T) & W^1= {N} \\
&=N\prod_{t=1}^T (1-\eta F^t) \\
L_{\text{min}}^T\ln(1-\eta)&=\ln N+\sum_{t=1}^T\ln(1-\eta F^t) & \text{Taking log on both sides} \\ \\
&\leq\ln N+\sum_{t=1}^T \eta F^t & \forall x\in\mathbb{R},\ln(1-x)\leq -x \\
&=\ln N+\eta\sum_{t=1}^TF^t \\
&=\ln N+\eta L_{\text{RWM}}^T
\end{align}
$$
And with some algebra and inequality: $\forall z\in \mathbb{R},-\ln(1-z)\leq z+z^2$
$$
L_{rwm}^T\leq \frac{\ln N}{\eta}- \frac{L_{\text{min}}^T\ln(1-\eta)}{\eta}
\leq \frac{\ln N}{\eta}-(1+\eta)L_{\text{min}}^T
$$
<span style="float:right;">■</span>
