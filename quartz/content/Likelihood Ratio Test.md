---
aliases: []
tags:
  - Math/Statistics
created: 2023-07-27T08:27
updated: 2023-09-10T18:52
---

def. let $X_1,…,X_n \sim f(;\theta)$. To compare hypotheses:

1. $H_0: \theta =\theta_0$
2. $H_1: \theta=\theta_1$
   We define the **[[Likelihood (Statistics)]] Ratio** $\Lambda$ as:

   
$$
   \Lambda(X_1,...,X_n)=\frac{\mathcal{L}({\color{red}\theta_1}; X_1,...,X_n)}{\mathcal{L}({\color{red}\theta_0}; X_1,...,X_n)}






   
$$

   Then devise the Likelihood Ratio Test (LRT) for cutoff ${\color{red}c}$:

   
$$
   \delta:\begin{cases}
      H_0 &\text{else }  \\
      H_1&\text{if } \Lambda>{\color{red}c}
   \end{cases}






   
$$

The Significance of the LRT is in that it is the most powerful test:

thm. Neymann—Pearson Lemma. Given level $\alpha$ [=false positive rate = type I error rate], then the LRT is the **Uniformly Most Powerful** (UMP) test.

There is also another significant result for certain likelihood ratio. But first define:

def. Monotone Likelihood Ratio (MLR) is when the likelihood ratio $\Lambda$ is never decreasing for some variable $x$.

Then we can determine the UMP of such $\Lambda$:

thm. Karlin—Rubin Theorem. In a distribution with $\Lambda$ that is MLR for region $T(x)$ [statistic] for a sampling $X_1,…,X_n$ in this distribution the UMP is:

$$
\delta:\begin{cases}
   H_0 &\text{else }  \\
   H_1&\text{if } {\color{red}T}>c
\end{cases}
$$
