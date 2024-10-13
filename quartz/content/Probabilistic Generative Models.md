---
aliases: 
tags: 
origins: 
---
**Motivation.** Inspiration is from [[Maximum Likelihood Estimator]]s. Consider classifying into two classes, $\mathcal{C_{1},C_{2}}$ If we consider $\mathbf{w}$, the weights as a parameter is a probability distribution for class $\mathcal{C_{1}}$, classification output as such:
- $p(\mathcal{C_{1}}\mid \mathbf{x})$: given datapoint $\mathbf{x}$ the probability (distribution) of it being in class $1$. *The pdf of this is what we want to find.*
- $p(\mathbf{x}\mid \mathcal{C_{1}})$: given that data is in class $1$, what is the distribution of the datapoints? *We know this from the data.*
We will construct the former from the latter.

### From $\mathbf{x}$ as a multivariate [[Normal Distribution]]
If we have $\mathbf{x}$ as a multivariate normal distribution, it has the probability distribution:
$$
p(\mathbf{x}\mid\mathcal{C_{1}}) =\frac{1}{(2\pi)^{\frac{d}{2}}|\Sigma|^{\frac{1}{2}}} 
e^{-\frac{1}{2}(X-\mu_{1})^T\Sigma^{-1}(X-\mu_{1})}
$$
where
- $\vec{\mu_{1}}$ is the mean point of datapoints in class $1$
- $\Sigma$ is the [[Covariance]] matrix for this distribution
Both off these we do not know yet. Then using Bayes' Rule:
$$
\begin{align}
p(\mathcal{C_{1 }}\mid \mathbf{x})   & = \frac{p(x|C_{1}) \cdotp(\mathcal{C_{1}})}{p(x|C_{1})p(C_{1})+p(x|C_{2})p(C2)}  & \text{by Bayes'}\\
&= \frac{\exp[\overbrace{ \ln p(x|\mathcal{C_{k}})p(\mathcal{C_{k}}) }^\text{ let $a_{k}$ }]}{\sum_{\forall j}\exp[\underbrace{ \ln p(x|\mathcal{C_{j}})p(\mathcal{C_{j}}) }_\text{ let $a_{j}$ }]} & \text{add exp \& log for sigmoid}\\[1em]
&= \sigma(a_{k}|a_{1},\dots,a_{n}) & \text{by def of sigmoid}
\end{align}
$$
where 
- See [[Softmax and Sigmoid#^unj2yy]] for the definition
- Softmax ensures this is a probability distribution.
Now, we calculate $a_{k}$. Substitute the multivarate normal pdf into $a_{k}$:
$$
\begin{align}
a_{k} & =\ln p(x|\mathcal{C_{k}})p(\mathcal{C_{k}}) \\
 & = \underbrace{ \ln \frac{1}{(2\pi)^{D/2}} +\ln \frac{1}{|\Sigma|^{1/2}} }_\text{ let $C$ }- \frac{1}{2} (\mathbf{x}^{\top}-\mu_{k}^{\top})\Sigma ^{-1}(\mathbf{x-\mu_{k}})+\ln p(\mathcal{C_{k}}) \\
&= C - \frac{1}{2}\mathbf{x^{\top}}\Sigma ^{-1}\mathbf{x}+\frac{1}{2}\mathbf{x}^{\top} \Sigma ^{-1}\mu_{k}+\frac{1}{2}\mu_{k}^{\top}\Sigma ^{-1}\mathbf{x}\underbrace{ -\frac{1}{2}\mu_{k}^{\top}\Sigma ^{-1}\mu_{k}+\ln p(\mathcal{C_{k}})
 }_\text{ let $w_{k_{0}}$ }\\
 &=C-\frac{1}{2}\mathbf{x^{\top}}\Sigma ^{-1}\mathbf{x}+ \underbrace{ \mu_{k}^{\top}\Sigma ^{-1} }_\text{ let $\mathbf{w}_{k}$ }\mathbf{x}+w_{k_{0}}
 \\&= \mathbf{w_{k}}^{\top}\mathbf{x}+w_{k,0}-\frac{1}{2}\mathbf{x}^{\top}\Sigma ^{-1}\mathbf{x}+C & \Sigma ^{-1} \text{ is symtrc}
 \end{align}
$$
Finally, we plug this into our softmax function to get:
$$
\begin{align}
p(\mathcal{C_{k}}|\mathbf{x})&=\frac{\exp\left( \mathbf{w_{k}}^{\top}\mathbf{x}+w_{k,0}\cancel{ -\frac{1}{2}\mathbf{x}^{\top}\Sigma ^{-1}\mathbf{x}+C } \right)}{\sum_{\forall j}\exp\left( \mathbf{w_{j}}^{\top}\mathbf{x}+w_{j,0}\cancel{ -\frac{1}{2}\mathbf{x}^{\top}\Sigma ^{-1}\mathbf{x}+C } \right)} \\
 & = \frac{{\exp\left( \mathbf{w_{k}}^{\top}\mathbf{x}+w_{k,0} \right)}}{\sum_{\forall j}\exp(\mathbf{w_{j}^{\top}\mathbf{x}}+w_{j,0})} \\ \\
\end{align}
$$
### Finding the optimal parameters $\mathbf{w}$




