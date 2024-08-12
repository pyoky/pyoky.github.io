---
aliases:
  - BSM
tags:
  - Economics/Finance
---
thm. **BSM Formula for European Call Options** The Fair price of a European call option is $C(t)$ given by

$$
\begin{align}
C(t) &= e^{-\tau q} S(t) N(d_1) - e^{-\tau r} K N(d_-)  &  \text{where...} \\
\\
d_+ &= \frac{\ln(S(t)/K) + [(r - q) + \frac{\sigma^2}{2}]\tau}{\sigma\sqrt{\tau}} \\
d_- &= d_+ - \sigma\sqrt{\tau} = \frac{\ln(S(t)/K) + [(r - q) - \frac{\sigma^2}{2}](\tau)}{\sigma\sqrt{\tau}} \\
 \tau &= T-t  & \text{time to expiration} 
\end{align}
$$

where
- $t$ is entry date, $T$ is execution date
- $r$ is the risk-free rate
- $K$ is the strike price
- $N(d)$ is the CDF of the Standard [[Normal Distribution]]
- $S(t)$ are the price of the underlier, modeled as log-normal R.V.s (=geometric brownian motion) as $S(t)=S_{0}e^{ \mu t+\sigma \sqrt{ t }\mathfrak{B}_{t} }$

> [!link] There are other derivations of BSM, notably:
> - Using the [[Binomial Option Pricing Model]] 
> - [[Risk-Neu[](Binomial%20Option%20Pricing%20Model.md)k-Neutral%20Derivation%20of%20BSM.md)tfolio

**Proof (Derivation) Sketch.** We use a similar strategy to when we priced [[Forwards]]—by constructing a portfolio whose value is always equal to the derivative we want to price, and then using the [[No-Arbitrage|Law of One Price]] to find its current price.
We first outline the _replicating portfolio_ as a combination of cash and a certain number of securities. We have $b_{t}$ units of cash and $n_{t}$ units of cash. We model them as the following:
- Cash value: $B_{t}$
    - ! Not $\mathfrak{B}_{t}$. It's just denoted $B$ because it's [[Bonds (Finance)|a bond]] with risk-free
    - $b_{t}$ units; changes along time. (How? See below)
    - $B_{t}=B_{0}e^{ rt }$ where $r$ is the risk-free rate
        - Thus $dB_{t}=rB_{t}dt$
- Stock value: $S_{t}$
    - $n_{t}$ units; changes along time. (How? See below)
    - Stochastic process with $dS_{t}=(m-q) S_{t}dt+ \sigma S_{t}d\mathfrak{B}_{t}$
        - This is a simple geometric brownian motion process. $m$ is the instantaneous rate of return, and $q$ is the dividend yield
    - Simplify the stock paying the dividend by re-modeling it as $S_{t}^{C}=S_{t}e^{ qt }$
- Stock value with dividend: $S_{t}^{C}$
    - same $n_{t}$ units
    - Stochastic process with $dS_{t}^{C}=(m-q)S_{t}dt+\sigma S_{t}d\mathfrak{B}_{t}$
Thus we have the following value of our portfolio $V_{t}$
$$
V_{t}=b_{t}B_{t}+n_{t}S_{t}^{C}=^\text{must be}f(S_{t},t)
$$

_Valuing the Self-fiancing Portflio_
This portfolio must be self-financing; i.e. we must use cash to buy stock, or sell stock to buy cash, in order to exactly track the value of the derivative. This condition translates to: ^6d80d7
$$
\begin{align}
\underbrace{ \textcolor{red}{ n_{t} }S_{t+dt}^{C}+\textcolor{red}{ b_{t} }B_{t+dt} }_\text{ before dt } & =\underbrace{ \textcolor{red}{ n_{t+dt} } S_{t+dt}^{C}+\textcolor{red}{ b_{t+dt} }B_{t+dt} }_\text{ after dt }  & \text{self-financing cond.}\\
\underbrace{ (dn_{t})S_{t+dt}^{C} }_\text{ change in asset value } & =\underbrace{ -(db_{t})B_{t+dt}  }_\text{ change in cash value } & \text{compact form} \\
 dV_{t}& = n_{t}dS_{t}^{C}+b_{t}dB_{t}  & \text{trust the textbook}
\end{align}
$$
Now, expanding this using the properties of $dS_{t}^{C}$, $dB_{t}$ , and also that $b_{t}=^\text{must be}\frac{f(S_{t},t)-n_{t}S_{t}^{C}}{B_{t}}$, we simplify to:
$$
dV_{t}=\left( \underbrace{ n_{t}(m-r)S_{t}^{C}+rf(S_{t},t)  }_\text{ A }\right) dt+\underbrace{ n_{t }\sigma S_{t}^{C} }_\text{ B }d\mathfrak{B}_{t}
$$
_Valuing the Security Itself_
Alternatively, we can use Ito's lemma to value $f(S_{t},t)$ directly. (Recall that we always have $\frac{ \partial f }{ \partial x }(S_{t},t)\coloneqq \frac{ \partial f }{ \partial x }(x,t)\mid_{x=S_{t}}$
$$
df(S_{t},t)=\left( \underbrace{  \frac{ \partial f }{ \partial t } +(m-q)S_{t}\frac{ \partial f }{ \partial x } (S_{t},t)+\frac{1}{2}\sigma^{2}S_{t}^{2} \frac{ \partial^{2} f }{ \partial x^{2} }(S_{t},t)   }_\text{ C }\right)dt +\underbrace{ \sigma S_{t}\frac{ \partial f }{ \partial x }  }_\text{ D }(S_{t},t)d\mathfrak{B}_{t}
$$

_Equating the two_
Now, due to the fact that an Ito process as a unique representation in the differential form, we know that $A=C$ and $B=D$ in the above formulae. Using the latter:
$$
n_{t}=\frac{S_{t}}{S_{t}^{C}} \underbrace{ \frac{ \partial f }{ \partial x } (S_{t},t) }_{ \coloneqq \Delta_{f} }
$$
Using the former:
$$
n_{t}(m-r)S_{t}^{C}+rf(S_{t},t)=_{\text{set}}\frac{ \partial f }{ \partial t } +(m-q)S_{t}\frac{ \partial f }{ \partial x } (S_{t},t)+\frac{1}{2}\sigma^{2}S_{t}^{2} \frac{ \partial^{2} f }{ \partial x^{2} }(S_{t},t) 
$$
And substituting the former $n_{t}$ into the latter, we have the partial differential equation:
$$
\frac{1}{2}\sigma^{2}S_{t}^{2} \frac{ \partial^{2} f }{ \partial x^{2} } (S_{t},t) + (r-q)S_{t} \frac{ \partial f }{ \partial x } (S_{t},t)+\frac{ \partial f }{ \partial t } (S_{t},t)-rf(S_{t},t)=0
$$

Now, this PDE will satisfy any derivative; we can use any boundary conditions on it. But if we solve it for a European Call option, we will get the BSM formula.
- $f(S_{t},t)\coloneqq C(S_{t},t)$ starting at $t$ and ending at $T$. Strike price is $K$
- $C(x,T)=\text{max}\{ x-K,0 \}$
- $C(0,t)=0$ and $C(x,t) \overset{ x\to \infty }{ \to }e^{ -q(T-t) }$

<span style="float:right;">■</span>
