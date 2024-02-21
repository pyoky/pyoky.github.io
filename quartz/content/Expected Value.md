---
aliases: []
tags:
  - Math/Statistics
---

## Expected Value

def. **Expected Value.** For random variable $X$ with countably many outcomes, its expected value $\mathbb{E}(X)$ is defined as:

$$
\begin{align}
\mathbb{E}(X)&:=\sum_{\forall x\in \text{range(X)}}x\cdot \mathbb{P}(X)  &  \text{for discrete} \\

\mathbb{E}(X)&:=\int_{-\infty}^\infty x\cdot f_X(x)dx & \text{for continuous}
\end{align}
$$

**Properties**. The following identities hold for expected values, with constant $k$, random variables $X,Y$.
- $\mathbb{E}(k)=k$
- $\mathbb{E}(X+Y)=\mathbb{E}(X)+\mathbb{E}(Y)$ <span style="float:right;">Linearity</span>
- $\mathbb{E}(k\cdot X)=k\cdot \mathbb{E}(X)$
- $\mathbb{E}(X\cdot Y)=\sum_{\forall z}z\cdot \mathbb{P}(X\cdot Y=z)$
	- If $X\perp Y$ then $\mathbb{E}(X\cdot Y)\Rightarrow\mathbb{E}(X)\cdot \mathbb{E}(Y)$ (reverse does **not** hold)
- let $g$ be a function over $\text{range}(X)$. Then, $\mathbb{E}(g(x))=\sum_{\forall x}g(x)\cdot \mathbb{P}(X=x)$ (Law of Unconscious Statistician)
	- ! $\mathbb{E}(g(x))\neq g(\mathbb{E}(x))$
	- $\mathbb{E}(X^k)=\sum_{\forall x}x^k \cdot \mathbb{P}(X=x)$

thm. **Tail Sum Formula.** when $X$ is a non-negative discrete random variable:
$$
\mathbb{E}(X)=\sum_{i=0}^\infty  \mathbb{P}(X\geq i)
$$
**Remark.** The Tail Sum formula is useful when the random variable is defined as the minimum or maximum of a certain set of events (e.g. minimum of multiple dice rolls, etc.)

> [!hint] A Quick Summary of all the **Expectation Manipulation** from class:
![[スクリーンショット 2022-12-15 16.16.08.png]]

## Conditional Expected Value

$$
\mathbb{E}(g(X,Y))=\iint_\mathbb{R^2}g(x,y)f_{X,Y}(x,y)dA
$$

def. **Conditional Expectation.** let $X,Y$ be jointly distributed. Then the conditional expected value is defined…
- …over an event: $\mathbb{E}(X|A)=\sum_{\forall A}x\cdot \mathbb{P}(X=x|A)$
- …over an event on a random variable $\mathbb{E}(X|Y=y)=\int_{-\infty}^\infty x \cdot f_{X|Y=y}(x)~dx$
- …over a random variable: $\mathbb{E}(X|Y)=\sum_{\forall x\forall y}x\cdot \mathbb{P}(X=x|Y=y)$
	- ! While expectation conditioned on an event is a value, an expectation conditioned over a random variable is another random variable
	- with more rigour: $\mathbb{E}(X|Y)\coloneqq \mathbb{E}(X|\sigma(Y))$
	- _Intuition._ Think of it as "given all information by $Y$, what's the new random variable?"

**Properties.**
- $\mathbb{E}(aX+bY|{\color{red}A})=a \cdot\mathbb{E}(X|{\color{red}A})+b\cdot \mathbb{E}(Y|{\color{red}A})$ <span style="float:right;">linearity</span>
- $\mathbb{E}(X)=\sum_{\forall i}\mathbb{E}(X|{\color{red}A_i})\cdot \mathbb{P}({\color{red}A_i})$ where ${\color{red}A_1,…,A_n}$ is a partition of $\Omega$.<span style="float:right;">weighted summation</span>
- If $X$ is $\mathcal{F}$-measurable, $\mathbb{E}(X\mid \mathcal{F})=X$
- If $X$ is independent of $\mathcal{H}$ then $\mathbb{E}(X|\mathcal{H})=\mathbb{E}(X)$ <span style="float:right;">Taking out independent factors. </span>
- if $X$ is $\mathcal{F}$-measurable, $\mathbb{E}(XY|\mathcal{F})=X\mathbb{E}(Y|\mathcal{F})$ <span style="float:right;">Taking out what's known</span>
	- e.g. $\mathbb{E}(X_{t+0.2}X_{t}\mid \mathcal{F})=X_{t}\mathbb{E}(X_{t+0.2})$
- Tower Property: if $X$ is a random variable, and $\mathcal{F} \subset \mathcal{G}$ then: $\mathbb{E}(\mathbb{E}(X|\mathcal{G})|\mathcal{F})=\mathbb{E}(X|\mathcal{F})$
	- & Think of it as "high-res camera" then "low-res camera"; the final picture is low-res.

thm. **Conditional Joint Expectation.** $X,Y$ and $R\in [\text{Range(X)}\times \text{Range}(Y)]$. Then:

$$
\begin{align}
\mathbb{E}(X|x,y\in R)&=\iint_Rx\cdot f_{X,Y|x,y\in R}(x,y)~dA \\
\text{where}~f_{X,Y|x,y\in R}(x,y)&=\frac{f_{X,Y}(x,y)}{\mathbb{P}(x,y\in R)}
\end{align}
$$

thm. **Calculating Expected Value from Conditional Expected Value.** (Identity 2 above) let $X,Y$ be jointly distributed. Then the expected value of $X$ is calculated:

$$
\begin{align}
\mathbb{E}(X)&=\sum_{\forall y}\mathbb{E}(X|Y=y)\cdot\mathbb{P}(Y=y)={\mathbb{E}\color{green}(\mathbb{E}(X|Y)})
\\
\mathbb{E}(X)&=\int_{-\infty}^\infty\mathbb{E}(X|Y=y)\cdot\ f_Y(y)\cdot dy={\mathbb{E}\color{green}(\mathbb{E}(X|Y)})
\end{align}
$$

- Useful for computing $\mathbb{E}(X)$ when $X$ depends on $Y$.
- Works regardless of whether $X,Y$ are random or discrete, and when mixed.
