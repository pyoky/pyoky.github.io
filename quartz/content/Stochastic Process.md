---
aliases: []
tags:
  - Math/Statistics
---

def. **Time Series** is a stochastic process indexed by discrete (integer) time points.
- See discussion: [Is a time series the same as a stochastic process? - Cross Validated](https://stats.stackexchange.com/questions/126791/is-a-time-series-the-same-as-a-stochastic-process)

def. **Stochastic Process** is simply the sum of the sequence of random variables: $X_{1},\dots,X_{n}$:

$$
W_{k}=\begin{cases}
\sum_{i=1}^k R_{i} & \text{if }k>0\\
w_{0} & \text{if } k=0
\end{cases}
$$

- $R_{i}$ are identically distributed.: **Stationary**
- $E(W_{k+1}|W_{1}\dots W_{k})=W_{k}$ then: **Martingale**
- $P(W_{k+1}=w_{k+1}|W_{1}=w_{1},\dots W_{k}=w_{k})=P(W_{k+1}=w_{k+1}|W_{k}=w_{k})$: **Markov**

  > [!hint] Is a stochastic process just a function with time as input?
  > [random variable - Why do stochastic processes involve time? - Cross Validated](https://stats.stackexchange.com/a/448280)

## Weiner Process

### Standard Weiner Process

**Motivation.** Assume there are random variables $X_{1}\dots$ as:

$$
   X_{i}=\begin{cases}
   \frac{1}{\sqrt{ n }} & 0.5 \text{ probability} \\
   -\frac{1}{\sqrt{ n }} & 0.5 \text{ probability}
   \end{cases}

   
$$

1. let $W_{k}$ be a stochastic process such that:
$$
W^{(n)}(t)=\begin{cases}
0 & \text{if } t=0 \\
R_{1}+\dots+R_{t} & \text{if}~t\in \mathbb{N} \\
\text{affine extension on closest interval } & \text{else}
\end{cases}
$$

Then we get the Weiner process as:
$$
\mathfrak{B}(t)=\lim_{ n \to \infty } W^{(n)}(t)
$$
def. **Brownian Motion.** (=Weiner process) $\mathfrak{B}(t)$ (written as $\mathfrak{B}_{t}$) is a set of random variables continuous-time indexed and has the following properties:
1. Is a continuous process
2. $\mathfrak{B}_{0}=0$
3. $\mathfrak{B}_{t}-\mathfrak{B}_{s}\sim_{d}N(0,t-s)$
	1. Thus, $\mathfrak{B}_{t}=_{d}\mathcal{N}(0,t)$
4. Any interval $\mathfrak{B}_{a}-\mathfrak{B}_{b}$ and $\mathfrak{B}_{c}-\mathfrak{B}_{d}$ where $[a,b]$ and $[c,d]$ do not overlap is independent.
Notation wise, we think of $\mathfrak{B}=\{ \mathfrak{B}_{t} \}_{t\geq 0}$, i.e. a set of random variables indexed by $t$.

**Remark.** Brownian Motion can also be defined as an [[Stochastic Calculus|Ito Process]] that satisfies the following stochastic differential equation:
$$
d\mathfrak{B}=\mu \cdot dt+\sigma^2 d\mathfrak{B}
$$
Trivially, in the case of standard brownian motion, $\mu=0,\sigma^2=1$ Thus $d\mathfrak{B}=0\cdot dt+1\cdot d\mathfrak{B}$.

**Properties.** Brownian Motion satisfies the following properties:
- Martingale Property: Brownian motion is martingale: $\forall s\leq t,\mathbb{E}(\mathfrak{B}_{t}|\mathcal{F}_{s})=\mathfrak{B}_{s}$ where $\mathcal{F}_{s}=\sigma(\mathfrak{B}_{s})$
- Markov Property:
	- $\forall s\geq 0,\{ \mathfrak{B}_{s+t},t\geq 0 \}$ is independent of $\mathcal{F}_{s}$ and…
	- $\{ \mathfrak{B}_{s+t},t\geq 0 \}=_{d}\{ \mathfrak{B}_{t} \}$
	- Alternatively: $\mathbb{P}(X_{u} \in A\mid \sigma(X_{s}))=\mathbb{P}(X_{u} \in A\mid X_{t})$ where any combination $s\leq t\leq u$
- Scaling Invariance: If $\mathfrak{B}_{t}$ is a brownian motion, then $\frac{\mathfrak{B}(a^2t)}{a}$ is also a brownian motion $\forall a>0$
- [[Quadratic Variation]] property: $[\mathfrak{B}]_{t}\coloneqq \sum_{i=1}^n(\mathfrak{B}_{t_{i}}-\mathfrak{B}_{t_{i-1}})^2=t$
### With Scale and Drift
def. **Weiner Process with Drift and Scaling (WPDS).** Such is a Weiner process $X(t)$ that has the following properties:
1. Is a continuous process
2. $X(0)=x_{0}$
3. $X(t+\Delta t)-X(t)=_{d}N({\color{red}\mu} \Delta t,{\color{red}\sigma^2}\Delta t)$
4. Any interval $X(a)-X(b)$ and $X(c)-X(d)$ where $[a,b]$ and $[c,d]$ do not overlap is independent.
- Properties:
	- $\mu$: drift; the higher, the more it climbs ![[Screenshot 2023-11-15 at 12.51.25.png|350]]
	- $\sigma^2$: scaling; the higher, the more volatile (See y-axis:) ![[Screenshot 2023-11-15 at 12.51.20.png|400]]

thm. **Standard WP to Scale and Drift.** Given:
- $B(t)$ is a standard Weiner process
- $X(t)$ is a Weiner process with drift $\mu$ and scaling $\sigma^2$, with initial value $x_{0}$
- ⇒ Then the following relationship holds (two equivalent definitions)
$$
\begin{align}
X(t)&=_{d}x_{0}+\mu t+\sigma B(t) \\
dX(t)&=\mu \cdot dt+\sigma\cdot dB(t)
\end{align}
$$
### Geometric Brownian Motion

thm. **Geometric Brownian Motion**. Given $X(t)$ is a WPDS $\mu,\sigma^2,x_{0}$ then the following is a geometric brownian motion with initial value $S(0)$: (two equivalent definitions)
$$
\begin{align}
G(t)&=G_{0}\exp[X(t)]=G_{0}\exp[x_{0}+\mu t+\sigma B(t)] \\
dG(t)&=\left(\mu+\frac{\sigma^2}{2} \right)G(t)\cdot dt+\sigma G(t)\cdot dB(t)
\end{align}
$$
> [!hint] Geometric to WPSD
> The following is equivalent:
$$
\begin{align}
dS(t)&=\left(\mu+\frac{\sigma^2}{2} \right)S(t)\cdot dt+\sigma S(t)\cdot dB(t) \\
S(t)&=S_{0}\exp\left[\left(\mu-\frac{\sigma^2}{2} \right)t+\sigma B(t) \right]
\end{align}
$$
## Properties of Stochastic Processes

def. **Adapted process.** A stochastic process $\{ X_{t} \}_{t\geq 0}$ is adapted to filtration set $\{ \mathcal{F}_{t} \}_{t\geq 0}$ if $\forall i,X_{i}$ is a $\mathcal{F}_{i}$-measurable function.

**Intuition.** Recall that a sigma algebra $\mathcal{F}$ can be thought of as "resolution of information". $X_{i}$ is realized and its information is $\mathcal{F}_{i}$. The series of filtrations $\mathcal{F}_{1}\subset \mathcal{F}_{2}\subset\dots \subset \mathcal{F}_{t}\subset\dots \subset \mathcal{F}$ correspond to the series of random variables $X_{1},X_{2},\dots$; for each timestep, the information gets higher and higher resolution.
### Martingale Process

**Motivation.** Many stochastic processes, including the standard brownian motion $\mathfrak{B}_{t}$ has the property that you can't predict future trajectory based on information from its past trajectory. We formalize this as a martingale.

def. **Martingale**. A stochastic process $\{ X_{t} \}_{t\geq 0}$ on a filtered probability space $(\Omega,\mathcal{F},\{ \mathcal{F_{t}} \}, \mathbb{P})$ is a martingale w.r.t. its adapted filtration $\{ \mathcal{F}_{t} \}$ if:
$$
\forall s\leq t,\mathbb{E}(X_{t}|\mathcal{F}_{s})=X_{s}
$$
This is equivalent to saying
- $\forall s\leq t,\mathbb{E}(X_{t})=\mathbb{E}(X_{s})$ by taking expectation on both sides of above
- $\forall s\leq t,\mathbb{E}(X_{t}-X_{s})=0$
	- This is a simple proof that brownian motion is a martingale; $\mathbb{E}(\mathfrak{B}_{t}-\mathfrak{B}_{s}=_{d}\mathcal{N}(0,t-s))=0$

### Quadratic Variation

**Motivation**. Quadratic variation is not about variation of probability distributions. It's a way to measure how "shaky" a function (in this case, a Brownian motion) is in a given interval.

def. **Quadratic Variation.** For a stochastic process $\{ X_{t} \}$, its quadratic variation on interval $[0,t]$, $[X]_{t}$ for $0=t_{0}<t_{1}<\dots<t_{n}=t$, is:
$$
\lim_{ n \to \infty }\sum_{i=1}^n(X_{t_{i}}-X_{t_{i-1}})^2
$$
