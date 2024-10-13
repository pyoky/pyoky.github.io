---
aliases: []
tags: []
origins: 
---
Motivation. Suppose there was a transformation from the input space into a "feature space", where all datapoints where nicely linearly dividable, like the following:
![[Logistic Model-20240912172439007.png]]
Then, let's run a classifier using a logistic model (=[[Softmax and Sigmoid]]) We will: ^e8atta
1. Construct a likelihood of a single datapoint being classified correctly
2. Construct a likelihood of all datapoints classified correctly
3. Use the negative of log-likelihood as a error function to minimize
4. Calculate the gradient of that error function
The input data is mapped into a output classification like this:
$$
\mathbb{R}_{\text{input space}}^{D} \overset{ \phi }{ \longmapsto }\mathbb{R}_{\text{feature space}}^{F} \overset{ w_{1},\dots,w_{k} }{ \longmapsto } \underbrace{ a_{1}\dots a_{K} }_\text{ 'activations' } \overset{ \text{softmax} }{ \longmapsto } p(C_1|\phi) =: y_{1}\dots y_{K}
$$
- $D$ is the dimension of the input space
- $F$ the feature space (how many features there are).
- $K$ is the number of classes.
    - Note that the output $\vec{y}=(y_{1},\dots,y_{K})$ is a _one-hot encoding._
    - We have a weight vector $\mathbf{w}_{k}$ for each feature $k$.
- We are given $N$ datapoints $\{ (\mathbf{x}_{n},\mathbf{t_{n}}) \}$
    - $\mathbf{t_{n}}$ is in this case also a vector because the target is one-hot encoded as well
**Visualization.** The following visualization of matrix-vector multiplication may clarify this process:
![[Logistic Model-20240912174725842.png]]
### Constructing the Likelihood Function
We start with $p(C_{k_{\text{class}}}|\phi_{n_{\text{data}}}(\mathbf{x_{n_{\text{data}}}}))$ which is the density given one data point, $n_{\text{data}}$ for a single class, $k_{\text{class}}$. We omit the $\mathbf{x_{n_{\text{data}}}}$ for clarity. Let's omnit subscript labels too.
Then consider the density that a single data point, $n$ has the correct classification (one-hot encoding):
$$
p(t_{n_{\text{data}}}|\phi_{n_{\text{data}}};\mathbf{w}_{1},\dots,\mathbf{w}_{K})= \prod_{\forall k \in [K]}p(C_{k}|\phi_{n})^{t_{n,k}}
$$
Raising to the power simply has the effect of only obtaining $p(\cdot)$ for the class where $t=1$. The rest of the elements of the vector are ignored.
And finally that all datapoints have the correct classification:
$$
p(\mathbf{T}|\phi_{n};\mathbf{w}_{1}\dots \mathbf{w}_{K})=\prod_{\forall n \in  [N]}\prod_{\forall n \in [K]}p(C_{k}|\phi_{n})^{t_{n,k}}
$$
### Error Function
The error function is the negative-log of the likelihood. Simply: ^4qw2dk
$$
\begin{align}
E(\mathbf{w}_{1},\dots,\mathbf{w}_{K})&=-\ln\prod_{\forall n \in  [N]}\prod_{\forall k \in [K]}{\underbrace{ p(C_{k}|\phi_{n}) }_\text{ $=: \textcolor{red}{ y_{n,k} }$ }}^{t_{n,k}} \\
&= - \sum_{\forall n \in [N]}\sum_{\forall k \in [K]}t_{n,k} \ln y_{n,k}
\end{align}
$$
Coincidentally this error function is the [[Information Theory#^56f391|cross-entropy]] between "distributions" $t_{n,k}$ and $y_{n,k}$. This is just a coincidence and [[Math is an Abuse of Notation|abuse of notation]] to call it cross-entropy.
Moving on; now, consider optimizing for a single weight class, $\mathbf{w}_{j}$. We have:
$$
\frac{dE}{d \mathbf{w}_{j}}=-\sum_{\forall n \in [N]}\sum_{\forall k \in [K]} \frac{t_{n,k}}{y_{n,k}}\cdot \frac{dy_{n,k}}{d\mathbf{w_{j}}}
$$
requires the chain rule. Observing the mapping from the input data to the output probabilities, let's consider the gradient for just one of the weights, $\mathbf{w}_{k}$ for class $k \in[K]$
$$
\frac{dE}{d\mathbf{w}_{k}}= \frac{dE}{dy_{k}}\cdot \frac{dy_{k}}{d\mathbf{a}} \cdot \frac{d\mathbf{a}}{d\mathbf{w_{k}}}
$$
We calculate all three of these:

-1. ^02k7nz
$$
\begin{align}
\frac{dE}{dy_{k} }& =  
\end{align}
$$
