---
aliases:
  - RELU
  - GELU
tags:
  - Computing/Maching-Learning
---
## RELU
REctifier Linear Units.

$$
f(x) :=  \max\{ 0,x \}
$$
Used as an activation function of a neuron in a neural network.
- Rectifier since it removes
![[Rectifier Linear Unit-20240516183026167.png]]
## GELU
Gaussian Error Linear Unit
$$
f(x):= x\cdot \Phi(x)
$$
Where $\Phi(x)$ is the CDF of the standard [[Normal Distribution]].
The GELU function can be approximated by the following two approximations, the second one with less accuracy:
- $f(x)\approx 0.5 \cdot x\cdot(1+\tanh\left[\sqrt{ \frac{2}{\pi}}(x+0.044715x^{3}) \right]$
- $f(x)\approx x \cdot\sigma(x)$ where $\sigma(x)$ is the CDF of the logistic distribution
