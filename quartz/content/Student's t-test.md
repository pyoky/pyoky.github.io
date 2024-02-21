---
aliases:
  - Student's T-test
tags:
  - Math/Statistics
---

def. let $X_1,…,X_n \overset{iid}\sim \mathcal{N}(\mu, \sigma^2)$. We are comparing two hypothesis:

1. $H_0: \mu \leq \mu_0$
2. $H_1: \mu > \mu_0$
   Then, let $T=\frac{\bar{X}_n-\mu_0}{\hat\sigma/ \sqrt{n}}$ where $\hat\sigma=\frac{E[(\bar{X}_n-X_i)]}{n-1}$ is the besset-corrected variance estimator. We know that $T\sim t_{n-1}$. Thus the $\gamma=1-\alpha$-level student’s (=Gosset’s) t-test is:

   
$$
   \delta:\begin{cases}
      H_0 &\text{else }  \\
      H_1&\text{if } T>t_{n-1}(1-\alpha)
   \end{cases}






   
   
$$
