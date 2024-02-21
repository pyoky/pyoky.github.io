---
aliases:
  - Theory of the Firm
tags:
  - Economics/Micro-Economics
---
See also [[Cost Minimization]]
## Short Run (One-input)

$$
\text{max} ~ \pi=px-wl-r \bar{k} ~ \text{such that} ~ x=f(l,\bar{k})
$$ ...where $\bar{k}$ is fixed at the long run optimal point.
Maximization of profit (reaching maximum iso-profit line) against the [[Production Function]]
- Uses [[Constrained Optimization]]
- Optimal is where the production function is tangent to the isoprofit line: $-\frac{w}{r}=TRS$
	- reminder: [[Technical Rate of Substitution|TRS]] is the tangency of the isoprofit line.
	- the slope of the isocost line is $-\frac{w}{r}$
- Result is the [[Input Demand]]s and Output [[Supply Function]]
- As in [[Utility Maximization]], you can substitute these results into profit formula $\pi-px-wl$ to get the [[Profit Function]].

Alternative Characterization
$$

max_{x,l}~p\cdot f(l,\bar{k})-wl-r\bar{k}

$$
- Where $c(w,x)$ is the reformulation of the production function into a function of input $l$, multiplied by $w$ (= $\text{input quantity}\times \text{input price}$ given a certain level of output $x$)
- Solvable simply by finding where tangent is zero.
- You will get short run [[Input Demand]]s 

## Long Run (Multiple Input)

$$

max_{x,l,k}~ \pi=px-wl-rk ~ \text{such that} ~ x=f(l,k)

$$
- First Order Condition (FOC) is equivalent to $pMP_{L}=w,pMP_{k}=r$
	- i.e. produce when the additional revenue is equal to price of inputs
	- i.e. $MR_{L}=MC_{L},MR_{k}=MC_{k}$
- Gets you [[Input Demand]] functions
- ! Beware returns to scale: If Increasing Returns/Constant Returns to scale, then only one of the inputs are used. (See below for more details)

## Profit Maximization Problem

There are two main ways for profit maximization:

- One-step: 
	- $\text{max}\ \pi=px-wl-rk \ \text{ s.t. } x=f(l,k)$ to get profit-maximization condition $p\cdot \text{MP}_l=w, \ \ p\cdot MP=r$
	- This gets you the input demand functions $l(p,w,r), k(p,w,r)$ and output supply $x(p,w,r)$.
- Two-step:
	  1. $\text{min} \ c=wl+rk \ \text{ s.t. } \ x=f(l,k)$ to get cost-minimization condition $-\frac{w}{r}=\frac{\text{MP}_l}{\text{MP}_k}(=\text{TRS})$
		 This gets you conditional input demand functions $l(x,w,r), k(x,w,r)$
	  1. Solve $p=\text{MC}^{\text{LR}}$ by using above conditional input demand functions (recall $\text{MC}=\frac{\delta C}{\delta x}$)
     This gets you output supply $x(p,w,r)$


### Special Case: Labor and Capital Are Perfect Compliments
$$

f(x)=min(l^\alpha,k^\alpha)

$$
- When $0<\alpha<1$ it has decreasing returns to scale
	- → simply solve two [[Unconstrained Maximization]] problems:
	- $max_{l}\pi =pl^a-wl-rk$, 
	- $max_{k}\pi =pk^a-wl-rk$,
	- $l^\alpha = k^\alpha$ <- **dont forget!**

### Special Case: Labor and Capital Are Perfect Substitutes
$$f(l,k)=(l^\alpha+k^\alpha)^\beta
$$
- when $0<\alpha \cdot\beta<1$: decreasing returns to scale
- when $\alpha\geq 1$: Isoquant is bowed in the wrong direction
	- → Use only one of the inputs (corner solution)
- when $0<\alpha<1$ but $\beta\geq \alpha$: Isoquant may or may not be bowed in the wrong direction.
	- → May or may not use only one input (corner solution)

Example plot to demonstrate this
```mathematica
Manipulate[
 Plot3D[(l^alpha + k^alpha)^beta, {l, 0, 5}, {k, 0, 5}, 
  AxesLabel -> {"l", "k", "x"}, PlotRange -> All], {alpha, 0.1, 
  5}, {beta, 0.1, 5}]
```
