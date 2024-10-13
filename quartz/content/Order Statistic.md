---
aliases: 
tags:
  - Math/Statistics
origins:
---
*Motivation.* When you have iid random variables $X_{1},\dots,X_{n}$ with a known pdf, you sometimes want the pdf of the minimum, maximum or k-th smallest/biggest of the realizations.

def. **$k$-th order statistic** $X_{(k)}$is the $k$-th ==smallest== of iid rv $X_{1},\dots,X_{n}$. Equivalently, $X_{(1)}$ is the smallest, and $X_{(n)}$ is the largest.

thm. *pdf of order statistic.* For iid rv $X_{1},\dots,X_{n}$:
$$
\begin{align*}
P(X_{(k)} \in [x, x + \epsilon]) &= P(\text{one of the X's} \in [x, x + \epsilon] \text{ and exactly } k - 1 \text{ of the others } < x) \\[10pt]
&= \sum_{i=1}^n P(X_i \in [x, x + \epsilon] \text{ and exactly } k - 1 \text{ of the others } < x) \\[10pt]
&= nP(X_1 \in [x, x + \epsilon] \text{ and exactly } k - 1 \text{ of the others } < x) \\[10pt]
&= nP(X_1 \in [x, x + \epsilon])P(\text{exactly } k - 1 \text{ of the others } < x) \\[10pt]
&= nP(X_1 \in [x, x + \epsilon]) \left(\binom{n-1}{k-1} P(X < x)^{k-1} P(X > x)^{n-k}\right)
\end{align*}
$$
And the pdf is:
$$
f_{(k)}(x) = nf(x) \binom{n-1}{k-1} F(x)^{k-1} (1 - F(x))^{n-k}
$$