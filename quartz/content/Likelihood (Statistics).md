---
aliases: []
tags:
  - Math/Statistics
created: 2023-07-25T11:51
updated: 2023-09-10T18:53
---

**Likelihood:**
- instead of asking “given parameter $\theta$ what is the probability of r.v. $X=x$”…
- …ask: “given data about $X$, what is the likelihood of parameter $\theta$ being within an interval?”

This is the best way to evaluate an [[Estimator|estimator]].

## Likelihood Function

def. The **likelihood function** for $X_1,…,X_n\overset{iid}\sim f_{X_i}(x_1,…,x_n|\theta)$ is the likelihood that given the data, the liklihood of parameter to be that value:

$$
\mathcal{L}(\theta)=f_{X}(\theta;x)\\
\mathcal{L}_n(\theta)=f_n(\theta;x_1,...,x_n)\overset{iid}=\prod_{i=1}^{n}f^\text{univar}_{X_k}(\theta;x_k)
$$

where for the liklihood function, the variable is $\theta$ and the parameters are $x_1,…,x_n$.

- The domain of the likelihood function is the parameter space.

> [!info]
 Alternatively, understanding $\mathcal{L}$ to be the (mythical) **value of the pdf** is another way to think of it.
 [확률(Probability) vs 가능도(Likelihood)](https://jinseob2kim.github.io/probability_likelihood.html)

def. the **Log liklihood** is simply the natural log of the likelihood function. It exists because it’s just easy to manipulate.

$$
\mathscr{l}(\theta)=\log[\mathcal{L}(\theta)]=\log[f_{X_i}(\theta;x)]\\[1em]
\mathscr{l}_n(\theta)=\log[\mathcal{L}_n(\theta)]=\log[\prod_{i=1}^{n}f^\text{univar}_{X_k}(\theta;x_k)]
$$

## Score

def. the **Score** is the derivative of the log likelihood. It measures how close the estimator $\hat \theta$ is to the actual value of $\theta$.

$$
s(\theta)=\frac{{\color{red}\partial} \log \mathcal{L}(\theta)}{{\color{red}\partial} \theta}
$$

- Score is best when 0, and the absolute value measures how far away $\hat\theta$ is from actual $\theta$. Signed for direction.
- $\mathbb{E}[s |\theta_{gt}]=0$ ← under regularity conditions. Obviously, if we know real $\theta$, then the score is perfect.
