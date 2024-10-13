---
aliases: []
tags:
  - Computing/Information-Theory
---
[A Short Introduction to Entropy, Cross-Entropy and KL-Divergence - YouTube](https://www.youtube.com/watch?v=ErfnhcEV1O8)

*Motivation.* Suppose a weather station is sending you information about the current weather. There is 50% chance of sun, and 50% chance of rain. Then the weather station can send you just one bit of information to sum this information: 1 if sunny, 0 if rainy.

def. **Shannon Information.**[^1] Given a random variable $X$, the information given in a particular realization $x$ of $X$ is:
$$
I_{X}(x):= -\log_{b}(p(x))
$$
where $b$, the base, determines the units (either bits when $b=2$ or nats when $b=e$)

def. **Shannon Entropy.**[^2] Given a random variable $X$, the entropy of this random variable is:
$$
\begin{align}
H(X)&:= -\sum_{\forall x}p(x)I_{X}(x) =\mathbb{E}_{X}[I_{X}(x)]
\end{align}
$$
*Intuition*. Entropy is the average amount of information transmitted in total.

_Example._ In our weather station example, $X$ is the random variable:
$$
X=\begin{cases}
1  & \text{if sunny with } p=0.5 \\
0  & \text{if rainy with }p=0.5
\end{cases}
$$
When $1:\text{sunny}$, transmitted is $I_{X}(1)=-\log_{2}0.5=1 \text{ bit}$ of information; same when $0: \text{rainy}$ is transmitted. Entropy of $X$ is:
$$
H(X) = -\left(0.5\log_{2}(0.5) + 0.5\log_{2}(0.5)\right)=1 \text{ bit}
$$
which matches our intution that entropy is the average amount of information transmitted.

def. **Cross Entropy.** The cross-entropy of the distribution $q$ relative to distribution $p$ is:^bic1ka ^56f391
$$
H(p,q)=-\underbrace{ E_{p} }_\text{ expectation }[\log q]
$$

*Intution*. Cross-entropy is a measure of a "distance" between two distributions.
*Remark*. Often used in [[Deep Learning]] but it doesn't have anything to do with information theory, but simply that coincidentally they had to calculate the "distance between two distributions."

def. Kullback-Leibler Divergence (KL Divergence). 

[^1]: [Information content - Wikipedia](https://en.wikipedia.org/wiki/Information_content)
[^2]: [Entropy (information theory) - Wikipedia](https://en.wikipedia.org/wiki/Entropy_(information_theory))