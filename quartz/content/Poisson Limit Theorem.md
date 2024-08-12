---
aliases: []
tags:
  - Math/Probability
---
## Poisson Limit Theorem (Simplified)

thm. Poisson Limit Theorem. With a random variable $X\sim \text{Binom}(n,p)$, as $n\rightarrow \infty,p\rightarrow0$, $X\approx\text{Poi}(np)$, since:

$X=\mathbb{I}_1+\cdots \mathbb{I}_n$ where each is an indicator of success of the $i$-th event, and as $\text{lim}_{n\rightarrow \infty,p\rightarrow0}$ this defines the [[Poisson Distribution]].

## Poisson Scatter Theorem

def. An experiment process which adheres to the following creteria is a **Poisson Scatter** process.

1. Number of hits are finite
2. No multiple hits on one point
3. Hits are homogenous and independent (any non-overlapping region’s hit number is independent.)

THM **Poisson Scatter Theorem**. In a poisson scatter process:

1. Number of hits over area R is a Poisson Random variable
2. The number of hits in each disjoint region is independent of each other (definiiton #3)
3. The rate of hits ($\lambda$) is proportional to its area

## Poisson Addition Rule

thm. If $X\sim \text{Poi}(\lambda_X)$ and $Y\sim \text{Poi}(\lambda_Y)$ and $X\perp Y$ then:

$$
X+Y\sim \text{Poi}(\lambda_X+\lambda_Y)
$$
> [!info]
> Note also that the bionmial distribution as something like this too. If $X\sim \text{Bi}(n_X,p)$ and $Y\sim \text{Bi}(n_Y,p)
$$Y\sim \text{Bi}(\lambda_Y)$ and $X\perp Y$ then $X+Y\sim \text{Bi}(n_X+n_Y,p)
$$

## Poisson Point Process

def. Memory-less-ness (continuous). $X$ is memoryless iff:
$$
\forall s,t>0,\ \ \mathbb{P}(X>s+t|X\geq s)=\mathbb{P}(X>t)
$$

> [!info] Read it like this:
LHS: “probability of waiting $t$ **more** minues, given that you’ve **already** waited $s$ minutes.”
RHS: “probability of just waiting $t$ minutes in total.”

Geometric and **_Exponential_** distributions satisfy this property. See the following.

def. **Poisson Point Process (PPP)**. PPP can be described in the following _three equivalent definitions_ in region $R$ with intensity $\lambda$ _(per unit)_:

1. Given a region $R_i$, let random variable $N(R_i)$ be defined as the number of events in the region. If..:
	- $\forall i\in R, \ \ N(I_i)\sim \text{Poi}(\lambda\cdot {|R_i|})$, where $|R_i|$ is the “size” of the region and $\lambda$ the intensity
	- $N(R_i)$ are all independent of each other
	- ⇒ …then the event occurs in a PPP
2. A process where the waiting time $W_i$ between two sequential events is distributed as an exponential distribution $\forall i\in R,\ \ W_i\sim \text{Exp}(\lambda)$
3. Total region size $X$ for $r$ events is distributed over gamma $X\sim\Gamma(r,1/\lambda)$
