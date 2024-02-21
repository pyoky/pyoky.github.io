---
aliases: []
tags:
  - Math/Statistics
created: 2023-07-27T08:23
updated: 2023-09-10T18:55
---
Fisher information helps us find better estimators.
1. Cramer-Rao Lower Bound shows what the best estimators can do with their precision
2. Reaching the CRLB means it’s **finite-sample efficient**
3. The [[Maximum Likelihood Estimator]] is also a very good estimator.

def. **Fisher Information** is the amount of information we have about the unknown parameter. It's the [[Expected Value]] of [[Likelihood (Statistics)#Score and Fisher Information Information|score]].
- Given $f_X(x;\theta)$, if $X$ has a high peak we may assume that $X$ carries a lot of information about $\theta$.
- If $X$ is spread out a lot, we may assume that $X$ carries little information. Thus:

$$
\begin{align}
\mathcal{I}(\theta)&:=\text{Var}[s]\\
&= E[s^2]-E[s]^2\\
&= E[s^2]\\
\end{align}
$$

- (2) → (3) as we know that $E[s^2|\theta_{gt}]=0$

thm. **Addition of fisher information**. if $X_1,…,X_n\overset{iid}\sim f_{X_i}(x_1,…,x_n|\theta)$, then:

$$
\mathcal{I}_n=n\cdot\mathcal{I}
$$

thm. **Score and Fisher Information**. if $f_X(\theta;x)$ is twice differentiable wrt $\theta$, and under certain regularity conditions:

$$
\mathcal{I}(\theta)=-E\Big[\frac{\partial^2}{\partial \theta^2}\ln f_X(X;\theta)\Big]
$$

- Knowing this we also know that $E[s’]=-E[s^2]$.
