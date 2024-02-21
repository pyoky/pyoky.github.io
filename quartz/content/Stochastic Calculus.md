---
aliases:
  - Ito Calculus
tags:
  - Math/Calculus
---

def. **Ito Integral**. Let the following:
- Brownian Motion $\mathfrak{B}=\{ \mathfrak{B}_{s}\mid s\geq 0 \}$, an Ito process $X=\{ X_{s}\mid s\geq 0 \}$
- $0=t_{1}<t_{2}<\dots<t_{n}=t$ and thus $t_{i}=\frac{t}{n}i$
- Then the Ito integral $Y_{t}$ of $X(t)$ with respect to $\mathfrak{B}(t)$ is defined as such:
  
$$
  Y(t)=\int _{0}^t X(s)\, d\mathfrak{B}(s)\coloneqq \lim_{ n \to \infty } \sum_{i=0}^nX\left(t_{i-1}\right)[\mathfrak{B}_{t_{i}}-\mathfrak{B}_{t_{i-1}}]
  
  
  
  
$$

- Visualization. Think of the 3D visualization of the [[Riemann–Stieltjes integral]], but both $f(x)$ and $g(x)$ are zigzags.
- The solution to the Ito integral is also a stochastic process $Y=\{ Y_{t}\mid t\geq 0 \}$. It also has the following properties because the integrator is $\mathfrak{B}_{t}$
	- $Y_{t}$ is a martingale
	- $\mathbb{E}(Y_{t})=0$
	- let $Z_{t}=\int _{0}^t X(s)^{\color{red}2}\, d\mathfrak{B}(s)$
		- **Ito Isometry:** $\text{Var}(Y_{t})=\mathbb{E}(Z_{t})$
		- $Y_{t}\sim \mathcal{N}(0,\mathbb{E}(Z_{t}))$

**Remark.** We often use shorthand notation (abuse of notation) to write an integral term like this:
- $d\mathfrak{B}_{t}:=\int _{0}^t 1\, d\mathfrak{B}_{s}\coloneqq\sum_{i=1}^\infty 1\cdot(\mathfrak{B}_{t_{i}}-\mathfrak{B}_{t_{i-1}})$
- $X_{t}d\mathfrak{B}_{t}\coloneqq \int_{0}^t X_{s} \, d\mathfrak{B}_{s}\coloneqq \sum_{i=0}^\infty X_{t}(\mathfrak{B}_{t_{i}}-\mathfrak{B}_{t_{i-1}})$
- $dt\coloneqq \int_{0}^t 1 \, dt\coloneqq\sum_{i=0}^\infty 1(t_{i+1}-t_{i})=t$ by definition of the [[Reimann Integral]]
- $X_{t}dt\coloneqq\int _{0}^t X_{s}\, ds\coloneqq$
Now, these also exist but they are trivial (**Ito Isometry**):
- $d\mathfrak{B}dt=dtd\mathfrak{B}=0$
- $(dt)^2=0$
- $(d\mathfrak{B})^2=dt$

**Reference Table of Common Ito Integrals**

| Stochastic Integral                | Result                                       | Variance          |
|------------------------------------|----------------------------------------------|-------------------|
| $\int_0^t dB_s$                    | $B_t$                                        | $t$               |
| $\int_0^t s dB_s$                  | $tB_t - \int_0^t B_s ds$                     | $\frac{1}{3}t^3$  |
| $\int_0^t B_s dB_s$                | $\frac{1}{2}B_t^2 - \frac{1}{2}t$            | $\frac{1}{2}t^2$  |
| $\int_0^t B_s^2 dB_s$              | $\frac{1}{3}B_t^3 - \int_0^t B_s ds$         | $3t^2$            |
| $\int_0^t e^{B_s - \frac{1}{2}s} dB_s$ | $e^{B_t - \frac{1}{2}t} - 1$              | $e^t - 1$         |

**Motivation**. Unfortunately we cannot calculate ito intergrals directly. For example, as we saw in the above example finding $\int _{0}^t\mathfrak{B}(s) \, d\mathfrak{B}(s)$ using just the definition was a laborious process. In order to make this easier, we use the following lemma.

thm. **Ito's Lemma**. (Ito's Chain Rule) The stochastic calculus chain rule. Stated in two ways.
- $X(t)$ is an Ito process $dX(t)=a(X,t)dt+b(X,t)d\mathfrak{B}$
- $f(X,t)$ is a normal function
- Then:
$$
df(X,t)=\left(f_{t}+a f_{x}+\frac{b^2}{2}f_{x x} \right)dt+b f_{x}d\mathfrak{B}
$$
- $f_{x}=\frac{\partial f}{\partial x}|_{x=X}$, $f_{t}=\frac{\partial f}{\partial t}$

**Example.** Suppose we want to find the integral $\int _{0}^t \mathfrak{B}_{u}^2-u\, d\mathfrak{B}_{u}$. Since it's nearly impossible to find it from the definition of the Ito integral, let us use Ito's lemma. Arbitrarily set an ordinary function $f(x,t)=\frac{x^3}{3}-tx$.
- ! Now, it is important to note that we normally don't know what function to use, but in this case assume we are given a nice $f(x,t)$ that will lead to the answer. Given this function, we then have:
- $f_{x}=x^2-t$, $f_{xx}=2x$, and $f_{t}=-x$
- Because $\mathfrak{B}$ is a standard brownian motion it conforms to the form $d\mathfrak{B}=0\cdot dt+1\cdot d\mathfrak{B}$ which means for Ito's lemma $a=0,b=1$.
Then, we use Ito's lemma:
$$
\begin{align}
df(\mathfrak{B},t)&=\left( f_{t}+af_{x}+\frac{b^2}{2}f_{x x} \right)dt+b f_{x}d\mathfrak{B} \\
f(B_{t},t)-\cancelto{ 0 }{ f(B_{0},0) }&=\cancelto{ 0 }{ \left( -x+0+\frac{1}{2}\cdot2x \right) }dt+(x^2-t)d\mathfrak{B} \\
\frac{\mathfrak{B}_{t}^3}{3}-t\mathfrak{B}_{t}&=(\mathfrak{B}^2-t)d\mathfrak{B} \\
&=\int _{0}^t \mathfrak{B}_{u}-u\, d\mathfrak{B}_{u} 
\end{align}
$$
<span style="float:right;">■</span>

**Reference.**

| Motion: $X_t$ | Differential: $dX_t=udt + udB_t$ |
| ---- | ---- |
| $B_t$ | $dB_{t}$ |
| $B_t^2$ | $2B_tdB_t + dt$ |
| $B_t^2 - t$ | $2B_tdB_t$ |
| $B_t^3$ | $3B_t^2dB_t + 3B_tdt$ |
| $e^{B_t}$ | $e^{B_t}dB_t + \frac{1}{2}e^{B_t}dt$ |
| $e^{B_t-\frac{1}{2}t}$ | $e^{B_t-\frac{1}{2}t}dB_t$ |
| $e^{\frac{1}{2}t}\sin B_t$ | $e^{\frac{1}{2}t}\cos B_tdB_t$ |
| $e^{\frac{1}{2}t}\cos B_t$ | $-e^{\frac{1}{2}t}\sin B_tdB_t$ |
| $(B_t + t)e^{-B_t-\frac{1}{2}t}$ | $(1 - B_t - t)e^{-B_t-\frac{1}{2}t}dB_t$ |

thm. **Ito's Product Rule.** for two stochastic processes $X_{t},Y_{t}$
$$
d(X_{t}Y_{t}) = X_{t}dY_{t} + Y_{t}dX_{t} + dX_{t}d_{t}
$$

---
### Ito Processes

def. **Ito Process.** An Ito process $X(t)=\{ X_{t}\mid t\geq 0 \}$ is a type of [[Stochastic Process]] that is defined by a certain $a(X_{t},t),b(X_{t},t)$:
$$
X(t)=X(0)+\int _{0}^t {\color{red}a(X_{s},s)}\, ds +\int _{0}^t {\color{red}b(X_{s},s)}\, d\mathfrak{B} 
$$
- $a(X_{t},t)$ must be integrable in the ordinary sense
- $b(X_{t},t)$ must be integrable in the stochastic sense
	- It actually needs to be integrable twice
As an abuse of notation we can write:
$$
dX=a(X_{t},t)\cdot ds+b(X_{t},t)\cdot d\mathfrak{B}
$$
- This is called a Stochastic Differential Equation (even if it's not actually a differential equation).
_Essentially, a function of an Ito process is also an Ito process._

**Properties.**
- $\mathbb{E}(dY\mid \mathcal{F}_{t})=(f_{t}+a f_{x}+\frac{b^2}{2}f_{x x})\cdot dt$
- $\text{Var}(dY\mid \mathcal{F}_{t}) =(b f_{x})^2$
