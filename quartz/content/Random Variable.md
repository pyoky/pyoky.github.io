---
aliases: []
tags:
  - Math/Probability
---
def. **Random Variable** A Random Variable $X$ from probability space $(\Omega,\mathcal{F},\mathbb{P})$ to measurable space $(\mathbb{R},\mathcal{B})$ is a _function_:
$$
X:\Omega\to \mathbb{R}
$$
- $\mathcal{B}$ is the Borel sigma-algebra on real numbers (=Borel set)
	- This is a set of open intervals on $\mathbb{R}$ that satisfies $\sigma$-algebra properties
- for all $B \in \mathcal{B}$, it is true that $X^{-1}(B)=\{ \omega \in \Omega\mid X(w)\in B \}\in\mathcal{F}$
	- You're given an open interval (=set) $B$ on real numbers
	- Get all $\omega$ such that $X(\omega)$ is within this range (=_pre-image_)
	- This set (a subset of $\Omega$) must be in the sigma-algebra of $\Omega$
	- This applies to any range $B=(a,b)$
	- & We can then say "$X$ is $\mathcal{F}$-measurable" or "$\mathcal{F}$ has enough information to measure $X$".
	- *Intuition.* Let there be other sigma-algebras $\mathcal{G,H}$ such that $\mathcal{G} \subset \mathcal{F}\subset\mathcal{H}$, in addition to $X$ being $\mathcal{F}$-measurable. In this case...
		- $X$ is $\mathcal{H}$-measurable because $\mathcal{H}$ has more information than $\mathcal{F}$.
		- However, $X$ is not $\mathcal{G}$-measurable because $\mathcal{G}$ has less information than $\mathcal{F}$.

def. **Probability on a Random Variable.** Probability function on random variable $X$ is a function $\mathbb{P}_{X}:\mathcal{R}\to[0,1]$ such that:
$$
\mathbb{P}_{X}(B)\coloneqq \mathbb{P}(X^{-1}(B))=\mathbb{P}({\{ \omega \in\Omega \mid X(\omega)\in A \}})
$$
- & i.e., the probability we encounter daily $\mathbb{P}(X\dots)$ is simply a shorthand notation $\mathbb{P}_{X}=\mathbb{P} \circ X^{-1}$
- You put the interval $B$, and get the probability of all $\omega$ in that interval's pre-image
- thus by abuse of notation we write: $\mathbb{P}_{X}(B)\equiv \mathbb{P}(X \in B) \equiv \mathbb{P}(X^{-1}(B))$

**Example**. Let $\Omega$ is the trajectory of a coin toss. This is a very big set, and probably also infinite. On the other hand, let $X$ a random variable for
$$
X=\begin{cases}
1 & \text{if heads} \\
0 & \text{if tails}
\end{cases}
$$
- * This is much simpler and more useful.
- This means $X^{-1}(1)=\{ \text{All trajectories that land in heads} \}$.
- If $X^{-1}\in \mathcal{F}$, then we can try to measure the probability of $\mathbb{P}(X^{-1}(1))=\mathbb{P}(\{ \text{All trajectories that land in heads} \})$
- Because we know the pre-image of $1$ is in $\mathcal{F}$, we know that $\mathbb{P}(X^{-1}(1))$ is defined.

thm. **Addition Rule** for Random Variables. For a discrete random variable $X$:
$$
 \mathbb{P}(a \leq X \leq b) = \sum_{k=a}^b \mathbb{P}(X=k)
$$
### Functions of Random Variables

**Motivation.** Functions can be made of random variables; for example let $Y=|X-1|$. In order to investigate $Y$, need a way to derive the probability distribution of $Y$ from $X$.

**Example.** Let $Y$ be a random variable defined by a function of another random variable $X$; $Y=f(X)$. Then:

$$
 \mathbb{P}(Y=y)=\mathbb{P}(f(X)=y)=\sum_\text{all x \\s.t. f(x)=y}\mathbb{P}(X=x) 
$$

thm. Random variables $X,Y$ are equal when:
1. $\text{Range}(X)=\text{Range}(Y)$
2. $\forall _{k \in \text{Range}}\mathbb{P}(X=k)=\mathbb{P}(Y=k)$

## Indicator Functions

def. **Indicator Functions**. For event $A\subset \Omega$, the indicator function $\mathbb{I}_A$ is a random variable (i.e. function) such that:

$$
 \mathbb{I}_A:\Omega\rightarrow\{0,1\} \\[1em] \text{s.t.} \\[1em] \mathbb{I}_A(\omega) = \begin{cases}

0 & \omega \notin A \\ 1 & \omega \in A

\end{cases} 
$$

**Remark.**
- Indicator functions are useful in probability for solving problems, not for being a fundamental mathematical object.
- Remember that indicator functions are also random variables. All the rules for random variables apply, including the [identities for expected values.](https://www.notion.so/Expected-Value-Variance-Identities-3e137535435a44e592726e77e25e0a9e?pvs=21)

**Properties.** let $\mathbb{I}$ an indicator function describing an event with probability $p$, then:
- $\mathbb{E}(\mathbb{I})=p$
- $\text{Var}(\mathbb{I})=p(1-p)$
