---
aliases: []
tags:
  - Math/Statistics
---

def. A **Hypothesis test** is a criteria to determine between two statements about an [[Estimator|unknown parameter]] of a distribution:
$$
\delta:\begin{cases}
   H_0 &\text{if } {\color{red}\text{criteria}} \\
   H_1 &\text{if } {\color{red}\text{alternative}}
\end{cases}
$$
where:
- $H_0$ is the Null hypothesis
- $H_1$ is the Alternative hypothesis

def. **Type I and II Errors**, as well as **size** and power are defined as follows:
1. Type I Error is the probability of a **false positive:**
   $P(\text{Assume }H_1~|~H_0 \text{ is true})$ → the **Size** of the test = **Level** of the test
2. Type II Error is the probability of a **false negative**:
   $P(\text{Assume }H_0~|~H_1 \text{ is true})$ → the **Power** of the test

⇒ Constructing a $\gamma=1-\alpha$ -level test is to construct one that has a true negative rate of $\gamma$ \[= a false positive rate of $\alpha$]

## P-Values

def. let $X_1,…,X_n \overset{iid}\sim F()$. then the p-value is the minimum $\alpha$ \[= false positive rate = size] at which you would adopt $H_1$.

![Untitled](Untitled%2029.png)

## Common Hypothesis Tests

- [[Likelihood Ratio Test]]
- [[Generalized Likelihood Ratio Test]]

## Multiple Hypothesis Testing

Motivation. Assume 20 sets of sample data. Then the false positive rate of one sample:

$$
P(\text{at least one significant result}~|~ \text{all is null})\\
=1-P(\text{all is null}~|~\text{all is null})\\
=1-(1-0.05)^{20}\approx0.64
$$

[What Is the Bonferroni Correction?](https://www.aaos.org/aaosnow/2012/apr/research/research7/)

A good explaination of the bonferroni correction.

⇒ This is too high to be acceptable. This is p-hacking. Thus:

def. Bonferroni Correction. In $m$-tests on a single dataset $X_1,…,X_n$, level must be changed to $\frac{\alpha}{m}$ in order to make a reasonable test.

## More Types of Tests

- [[Student's t-test]]
- [[Wilcoxon Signed Rank Test]]
- [[Wilcoxon Rank Sum Test]]
- [[Permutation Test]]
