---
uid: a1cca529-c123-4ab2-8086-eeea9e37b967
aliases:
  - Gaussian Distribution
tags:
  - Math/Common-Distributions
---
def. **Normal Distribution.** A random variable $X$ distributed over a Normal distribution with mean $\mu$ and standard deviation $\sigma$ is denoted:

$$
\begin{aligned}
X &\sim \text{Normal}(\mu,\sigma)\\
f_X(x)&=\frac{1}{\sigma\sqrt{2\pi}}
 \cdot e^{ -\frac{1}{2}(\frac{x-\mu}{\sigma})^2}\\[1em]

P(a<X<b)&=\int_a^b\frac{1}{\sigma\sqrt{2\pi}}
 \cdot e^{ -\frac{1}{2}(\frac{x-\mu}{\sigma})^2}dx\\
\end{aligned}
$$

def. **Cumulative Distribution Function (CDF)** of a [[Normal Distribution]]

$$
\Phi(z):=\int_{-\infty}^z \frac{e^{-t^2/2}}{\sqrt{2\pi}}dt
$$

Observe:
- $z \rightarrow +\infty, \Phi(z) \rightarrow1$
- $z \rightarrow -\infty, \Phi(z) \rightarrow0$
- $\Phi(-z)=1-\Phi(z)$

def. **Standard Normal Distribution.** A standard normal distribution is a normal distribution where $\mu=0,\, \sigma=1$

$$
X \sim \text{Normal}_{std.}(0,1)
$$

> [!hint]
> You can [[Approximating Distributions|approximate a bunch of distributions]] using the Normal.

rmk. **Linear Transformation of Normal Distribution.** If $X\sim \text{N}[\mu,\sigma^2]$, then
- $\mathbb{E}(aX+b)=a \mathbb{E}(X)+b=a\mu +b$
- $\text{Var}(aX+b)=a^2 \text{Var}(X)=a^2\sigma^2$
- - ⇒ Thus $(aX+b)\sim \text{Normal}(a\mu+b,\,a^2\sigma^2)$

remark. Exponentiating Transformation of Normal Distribution. If $X \sim N(\mu,\sigma^2)$
$$
E[e^{ X }]=e^{ \mu+\frac{\sigma^2}{2} }
$$
(using Law of Unconscious Statistician)

rmk. **Standardizing the Normal Distribution.** Given $X\sim N(\mu,\sigma^2)$:
- $Y=\frac{X-\mu}{\sigma}$ has the standard normal distribution
- The pdf is as follows:

$$
P(a<X<b)=\int_a^b\frac{1}{\sigma\sqrt{2\pi}}
 \cdot e^{ -\frac{1}{2}(\frac{x-\mu}{\sigma})^2}dx~~~
\Rightarrow ~~~\int_{\frac{a-\mu}{\sigma}}^{\frac{b-\mu}{\sigma}}\frac{e^{ -x^2/2}}{\sigma\sqrt{2\pi}}
 dz
$$

- See also [[Standardizing a Random Variable]]

rmk. **Empirical Rule**: Rule of thumb for calculating probabilities (integrals) of normal distributions
- ! Generalized version: [[Chebyshev's Inequality]]
- 1 std. dev. away is $\approx66\%$; 2 std.dev. away is $\approx0.95\%$![[Untitled 26.png|273]]

### Box-Mueller Transform
Motivation. Computers can easily sample from a uniform distribution, but it cannot randomly generage a normal distribution. The Box-Mueller Transofrm is a method of transforming a uniform unit random variable into a standard normal random variable. (From [[CS 675 HW1#Problem 3]])
thm. **Box-Mueller Transform.** Let uniform distrubtions $U_{1}\sim \text{Unif}[0,1],U_{2}\sim \text{Unif}[0,1]$. Then let:
$$
\begin{align}
R &= \sqrt{ -2\ln U_{2} } \\
\Theta &= 2\pi U_{1}
\end{align}
$$
And then let:
$$
\begin{align}
Z_{1} &= R\cos \Theta \\
Z_{2} &= R\sin \Theta
\end{align}
$$
Then $Z_{1},Z_{2}$ are standard normal distributions.
*proof.* First, $U_{1},U_{2}$ to $R,\Theta$. Consider that 
- $U_{1}=\frac{\Theta}{2\pi}$, $\frac{dU_{1}}{d\Theta}=\frac{1}{2\pi}$
- $U_{2}=\exp\left( -\frac{R^{2}}{2} \right)$, $\frac{dU_{2}}{dR}=R\exp\left( -\frac{R^{2}}{2} \right)$
Using [[Change of Variable (Probability)]]s we have:
- $f_{\Theta}(\theta)=\frac{1}{2\pi}$
- $f_{R}(r)=r \exp\left( -\frac{r^{2}}{2} \right)$
 Then, from $R,\Theta$ to $Z_{1},Z_{2}$:
Note that: 
1. $Z_{1}^{2}+Z_{2}^{2}=R^{2}(\cos ^{2}\Theta+\sin ^{2}\Theta)=R^{2}$ thus $R=\sqrt{ Z_{1}^{2}+Z_{2}^{2} }$
    - $\frac{dR}{dZ_{1}}=Z_{1}(Z_{1}^{2}+Z_{2}^{2})^{-1/2}=\frac{Z_{1}}{R}$
    - Symmetrically $\frac{dR}{dZ_{2}}=\frac{Z_{2}}{R}$
2. $\frac{Z_{2}}{Z_{1}}=\frac{R\sin \Theta}{R\cos \Theta}=\tan \Theta$ thus $\Theta=\arctan\left( \frac{Z_{2}}{Z_{1}} \right)$
    - $\frac{d\Theta}{dZ_{1}}=\frac{1}{1+\frac{Z_{2}^{2}}{Z_{1}^{2}}}\cdot Z_{2}(-1)Z_{1}^{-2}=-\frac{Z_{2}}{Z_{1}^{2}+Z_{2}^{2}}=-\frac{Z_{2}}{R^{2}}$
    - Symmetrically $\frac{d\Theta}{dZ_{2}}=\frac{Z_{1}}{Z_{1}^{2}+Z_{2}^{2}}=\frac{Z_{1}}{R^{2}}$
Now, calculate the jacobian for a multivariate change of variables:
$$
\begin{align}
|J|&=\begin{vmatrix}
\frac{ \partial r  }{ \partial z_{1} }  & \frac{ \partial r }{ \partial z_{2} } \\
\frac{ \partial \theta }{ \partial z_{1} } & \frac{ \partial \theta }{ \partial z_{2} }    
\end{vmatrix} \\
&=\begin{vmatrix}
\frac{Z_{1}}{R} & \frac{Z_{2}}{R} \\
-\frac{Z_{2}}{R^{2}}  & \frac{Z_{1}}{R^{2}}
\end{vmatrix} \\
&= \frac{Z_{1}^{2}}{R^{3}}+ \frac{Z_{2}^{2}}{R^{3}} \\
&=\frac{1}{R}
\end{align}
$$
And thus the join probability being:
$$
\begin{align}
f_{\Theta,R}(\theta,r)&=f_{\Theta}(\theta)\cdot f_{R}(r)\cdot |J|\\
&=\frac{1}{2\pi}r\exp\left( -\frac{r^{2}}{2} \right)\cdot \frac{{1}}{r} \\
&= \frac{1}{2\pi}\exp\left(- \frac{z_{1}^{2}+z_{2}^{2}}{2} \right) \\
&=  \frac{1}{\sqrt{ 2\pi }}\exp\left( -\frac{z_{1}^{2}}{2} \right) \cdot  \frac{1}{\sqrt{ 2\pi }}\exp\left( -\frac{z_{2}^{2}}{2} \right) \\
&=f_{Z_{1}}(z_{1})\cdot f_{Z_{2}}(z_{2})
\end{align}
$$

This show both that:
1. $f_{Z_{1}},f_{Z_{2}}$ is the standard normal pdf
2. $Z_{1},Z_{2}$ are independent because the joint pdf is a simple product of each pdf. ∎


## Estimators

let
- $X\sim \mathcal{N}(\mu,\sigma^2)$
- $X_1,…,X_n\overset{iid}\sim \mathcal{N}(\mu,\sigma^2)$
⇒ Log likelihood:

$$
\ln \mathcal{L}_n(\mu,\sigma^2|x_1,...,x_n)=-\frac{n}{2}\ln(2\pi)-\frac{n}{2}\ln(\sigma^2)-\frac{1}{2\sigma^2} \sum_{i=1}^n(x_i-\mu)^2
$$

### Score

|                        One R.V.                         |                               Multiple Data                               |
|:-----------------------------------------------------: |:-----------------------------------------------------------------------: |
|             $s(\mu)=\frac{x-\mu}{\sigma^2}$             |             $s_n(\mu)=\frac{n\mu-\sum_{i=1}^nx_i}{\sigma^2}$              |
| $s(\sigma)=\frac{(x-\mu)^2}{\sigma^3}-\frac{1}{\sigma}$ | $s_n(\sigma)=\frac{\sum_{i=1}^{n}(x_i-\mu)^2}{\sigma^3}-\frac{n}{\sigma}$ |

### MLEs

^d3u3hp

$$
\hat\mu=\frac{1}{n}\sum_{i=1}^nx_i
$$

$$
\hat \sigma^2=\frac{1}{n}\sum_{i=1}^n(x_i-\bar x)^2
$$
- ! divisor for variance MLE is not $\frac{1}{n-1}$ as opposed to [[Besset Correction]]
### Fisher Information
- Unknown $\mu$, known $\sigma^2$

$$
I(\mu)=\frac{1}{\sigma^2}\\[1em]I_n(\mu)=\frac{n}{\sigma^2}
$$

- Known $\mu$ unknown $\sigma^2$

$$
I(\sigma^2)=\frac{1}{2\sigma^2}\\[1em]

I_n(\sigma^2)=\frac{n}{2\sigma^2}
$$

# Multivariate Normal distribution

def. Multivariate Normal Distribution.[^1]

$$
\underbrace{ \frac{1}{(2\pi)^{\frac{d}{2}}|\Sigma|^{\frac{1}{2}}} }_\text{ scale down }
e^{-\frac{1}{2}(X-\mu)^T\Sigma^{-1}(X-\mu)}
$$
where

The image shows part of a larger equation or expression, as indicated by the curly brace on the right side, but the complete right-hand side is not visible in this image.





[^1]:  [Multivariate Normal (Gaussian) Distribution Explained - YouTube](https://www.youtube.com/watch?v=UVvuwv-ne1I)