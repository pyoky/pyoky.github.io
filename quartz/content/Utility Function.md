---
aliases:
  - Preference (Economics)
  - Indifference Curve
tags:
  - Economics
---
for mapping $(p_{1},p_{2},I) \mapsto u$, see the [[Indirect Utility Function]]

def. **Utility Function.** a utility function maps $n$ goods to utility (happiness) that satisfies the assumption of [[Rationality (Economics)|Rational Taste]] including convexity.

$$
U(\vec{x}): \underbrace{ \mathbb{R}^n }_\text{ tuple of good quantity } \mapsto \underbrace{ \mathbb{R} }_\text{ utility }
$$

⇒ such that if $\vec{x_{1}} \succ \vec{x_{2}}$ then $u(\vec{x_{1}})>u(\vec{x_{2}})$
### Types of Utility Functions
Let $S_{i}$ be the allocation bundle to agent $i$. $S_{i}$ contains items ("$j$") where $x_{ij}$ defines what percentage of that item is allocated to $j$. Then $i$'s utility $\mu_{i}$ can take various forms.

- def. **Additive Utility.** $\mu_{i}=\sum_{j}\mu_{ij}x_{j}$ ^4b3170
- def. **Cobb-Douglas Utility.** $\mu_{i}\coloneqq \prod_{j}\mu_{ij}x_{j}^{\alpha_{ij}}$ where $\sum \alpha_{ij}=1$
  (See [[Cobb-Douglas Utility (Two Goods)|the case for two goods]])
- def. **Leontief Utility.** $\mu_{i}\coloneqq \text{min}_{j}\{ \mu_{ij}x_{j} \}$

## Homothetic, Quasilinear, Perfect Substitutes

In addition to the constrains of [[Rationality (Economics)|Rational Taste]] we can also have these particular tastes that characterize a utility function.

def. **Quasilinear Tastes.** If a utility function has quasilinear tastes against good $x_{1}$, then the function (or a [[Monotonic Transformation]] of the function) is linear against $x_{1}$, e.g.:

$$
u(x_{1},x_{2})={\color{red}x_{1}}+f(x_{2})
$$

![[Untitled 11 1.png|575]]
### Substitutability
def. **Perfect Substitutes.** If a utility function means goods $x_{1}$ and $x_{2}$ are perfect substitutes, then every indifference curve of the utility function is a linear function, e.g.

$$
\displaylines{
u(x_{1},x_{2})=x_{1}+x_{2} \\\implies \text{setting }u=\bar{u},\bar{u}=x_{1}+x_{2} ~\text{is linear between} ~x_{1},x_{2}
}
$$

- e.g. [[Untitled 7 2.png|$5 bills and $10 bills]]
- See [[Marginal Rate of Substitution (MRS)]]

**Perfect Compliments.**
- e.g. ![[Untitled 6 2.png|Right shoe and left shoe|380]]
- Formula looks something like: $u(x_{1},x_{2})=min(x_{1},2x_{2})$
## Indifference Curves

![[Untitled 30.png|240]]

def. **Indifference Curve**. A set of bundles that an agent with [[Rationality (Economics)|rational taste]] is indifferent about
- Indifference curves are horizontal slices of a utility function.
	- i.e. a level field of a scalar field defined by the [[Utility Function]] of two goods—$u(x_1,x_2)$.
	- Indifference curves from the same utility function cannot cross (obviously)
- North-east side is always better.
	- ∵ monotonic [[Rationality (Economics)|taste]]—if this is not the case, change the direction of the curve.
- The convexity assumption causes ICs to bend to the origin
- **Multiple indifference curves form one indifference map** =\[[[Utility Function]]].
  Indifference maps are considered the same when
	  1. the order of the indifference curves is the same
	  2. MRS at every point for every curve is the same
- [[Budget Lines]] are drawn on the same graph as ICs
- When tastes are strictly _convex_ (a taste for variety) then:
	- ⇒ $(A \succsim B) \land (B \succsim C)$ in the [[Untitled 2 10.png|Graph]]

## Analyzing Indifference Curve Shapes

$$
u(x_{1},x_{2})=x_{1}^\alpha + x_{2}
$$

![[IC shape and alpha.png|300]]
