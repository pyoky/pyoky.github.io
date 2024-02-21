---
aliases: []
tags:
  - Math/Probability
---

## Discrete Joint Distribution

def. Joint Distributions of two discrete random variables $X, Y$ encode the probabilities for every pair of $(x,y)$ for $(X,Y)$. Following is an example of a joint distribution where $X$ is the result of rolling a first dice and $Y$ the result of a second roll.

![[スクリーンショット 2022-09-26 20.57.27.png]]

REMARK. Joint Distributions are distributions too, which means it has to follow all the rules of distributions (e.g. $\sum=1$)

## Continuous Joint Distribution

def. **Joint Probability Density.** Let $X,Y$ be two independent continous random variables. Then the joint probability density function is defined as the derivative of the cumulative density function:

$$
f_{X,Y}(x,y):=\frac{\partial^2F_{X,Y}(x,y)}{\partial x \partial y}
$$

$$
f_{X,Y}(x,y)\Delta x \Delta y=\mathbb{P}((x,y)\in R)\\[1em]

\therefore f_{X,Y}(x,y)=\lim_{\Delta x, \Delta y \rightarrow 0} \frac{\mathbb{P}(x,y)\in R}{\Delta x \Delta y}
$$

And thus the following holds:

- $\mathbb{P}((x,y)\in R)=\iint_Rf(x,y)\ dA$ where $R$ is an event
- $\iint_\mathbb{R^2}f\,dA=1$
- $X\perp Y \Leftrightarrow f_{X,Y}=f_X \cdot f_Y$

![The blue volume in the picture is the probability of the event X and Y are in R.](Untitled%2028.png)

The blue volume in the picture is the probability of the event X and Y are in R.

- See [[Marginal Distribution#Joint Marginal Distribution]]
- See [[Expected Value#Joint Expected Value]]

### Full Visual Example

![Untitled](Untitled%202%209.png)

- Blue is the probability density function, $f_{X,Y}(x,y)=\begin{cases}\frac{1}{\pi}&(x-1)^2+y\le1\\0&\text{else}\end{cases}$
- Red is the marginal probability density of $Y$,

$f*Y(y)=\begin{cases}\int*{x=1-\sqrt{1-y^2}}^{1+\sqrt{1+y^2}} f\_{X,Y}(x,y)dx & y\in[-1,1]\\0 & \text{else}\\\end{cases}$

### Minimum and Maximum Joint Dist

thm. Let $X_1,…X_n$ be i.i.d.; let $P=\text{min}(X_1,…,X_n)\,,\,Q=\text{max}(X_1,…,X_n)$. Then:

$$
f_{P,Q}(p,q)=\begin{cases}
n(n-1)\cdot f_{X_i}({\color{red}p})\cdot f_{X_i}({\color{red}q}) \cdot[\int_p^q f_{X_i}(x)dx]^{n-2}&y<z\\
0&else
\end{cases}
$$

---

## Examples of Joint Distributions

> [!hint]
Recall that joint distributions are also distributions \[=encapsulate fully the information of an experiement].

### Uniform Joint

thm. If $X,Y$ are both uniformly distributed over $[x_1,x_2],[y_1,y_2]\equiv \Omega$, then…

- height of the distribution is $\frac{1}{|\Omega|}$ (where $|\Omega|$ denotes the _area_ of the outcome space.)
- $\mathbb{P}((x,y)\in R)=\frac{|R|}{|\Omega|}$

![Untitled](Untitled%203%207.png)

### Normal Joint (Linear Combination)

thm. Linear Combination of Normal Distributions. If $X_1\sim N(\mu_1,\sigma_1)$ and $X_2\sim N(\mu_2,\sigma_2)$ then:

$$
\forall {\color{red}a,b} \in \mathbb{R}\, ,
aX_1+bX_2\sim N({\color{red}a} \mu_1+{\color{red}b}\mu_2,{\color{red}a^2}\sigma_1^2+{\color{red}b^2}\sigma_2^2)
$$

### Normal Joint (Product)

thm. if $X\sim N(\mu_1,\sigma^2)$ and $Y\sim N(\mu_2,\sigma^2)$ (i.e. std. dev. is the same) then

- $f_{X,Y}=f_X\cdot f_Y$
- Volume of sector $\theta$ from $(\mu_1,\mu_2)$ is $\frac{\theta}{2\pi}$

![Untitled](Untitled%204%205.png)

### Rayleigh Distribution

\[=Squared & Rooted Joint Normal]

def. **Rayleigh Distribution.** let $X,Y\sim \text{Normal}(0,\sigma)$ and $W=\sqrt{X^2+Y^2}$, then:

$$
\begin{aligned}
W&\sim \text{Rayleigh}(\sigma)
R\sim \text{RL}(\sigma)\\[.5em]
f_R(r)&=
\frac{r}{\sigma^2}e^\frac{-r^2}{2\cdot\sigma^2}{} \text{ for }r>0

\\[.5em]
F_R(r)&=1-e^\frac{-r^2}{2\cdot\sigma^2}\text{ for }r>0

\\
\mathbb{E}(X)=\sigma\sqrt{\frac{\pi}{2}}
~~~&~~~~~~
\mathbb{SD}(X)=\sigma\sqrt{\frac{4-\pi}{2}}
\end{aligned}
$$

- Where $\sigma$ is the “scaling factor” (standard dev. must be same for $X,Y$)
- If $\sigma=1$ then $W$ is a **Standard Rayleigh distribution:**

thm. Standardizing Rayleigh Distributions. If $W\sim \text{RL}(\sigma)$:

$$
\frac{W}{\sigma}\sim \text{RL}(1)
$$
