---
aliases: []
tags:
  - Math/Statistics
---

thm. **Generalized Likelihood Ratio Testing** (GLT). Comparing Hypotheses:

1. $H_0\in \Theta_0$
2. $H_1 \in \Theta_1$
   The Generalized Likelhood Ratio is:

   
$$
   \tilde \Lambda = \frac{\sup_{\theta\in\Theta_0\cup\Theta_1}\mathcal{L}(\theta)}{\sup_{\theta\in\Theta_0}\mathcal{L}(\theta)}\overset{\text{usually}}=\frac{\mathcal{L}(\theta_0)}{\mathcal{L}(\hat\theta_\text{MLE})}




   
$$

   The Generalized Likelihood Ratio Test (GLT) is:

   
$$
   \delta:\begin{cases}
      H_0 &\text{else }  \\
      H_1&\text{if } \tilde \Lambda>{\color{red}c}
   \end{cases}




   
$$

> [!info] The Generalized Likehoold Ratio $\tilde \Lambda$ is often very hard to manipulate. Use Wilk’s phenomenon in order to approximate the cutoff regions.

- thm. Wilk’s Phenomenon. For Hypotheses

  1. $H_0\in \Theta_0$ ← $r_0$ dimentions
  2. $H_1 \in \Theta_1$ ← $r_1$ dimensions
     i.e. $H_0 \subset H_1$ then:

     
$$
     2\ln\Lambda\underset{d}{\overset{n\rightarrow\infty} \longrightarrow} \chi^2_{r_1-r_0}




     
$$
