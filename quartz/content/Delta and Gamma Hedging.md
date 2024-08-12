---
aliases: 
tags:
  - Economics/Finance
---
Motivation. Imagine you are an investment bank, selling (which is equivalent to short-selling) a call option. At the end, you have to pay to the holder $C_{T}=\max\{ S_{T}-K,0 \}$. When the option is [[Options (Finance)#^22ed5c|on the money]] at expiration time $T$, you have to pay $S_{T}-K$. You want to pay less, though; so you try to hedge against small changes in underlyer price.

## Delta Hedging for Call/Put Options

### At time $t=0$ (day 0)
- Sell the option $-C_{t}^{E}$, and get the cash $C_{t}^{E}$
- Borrow $\mathbb{L}_{t}$ amount of money to buy $\Delta_{t}$ units of stock. (this is the hedging part)
    - & this $\Delta_{t}$ is the same as the delta of the call option.
$$
V_{t}=\underbrace{ -C_{t}^{E} }_\text{ short-sell }+\underbrace{ C_{t}^{E} }_\text{ cash }-\underbrace{ \mathbb{L}_{t} }_\text{ loan }+ \underbrace{ \Delta_{t}S_{t} }_\text{ underlyer }
$$
It is obvious that the value of this portfolio is $V_{t}=0$, at time $t=0$, but to show that this portfolio at any time $t$ always has value $0$, we observe the fact that *the last three terms (let $C_{t}^{\text{syn}}\coloneqq +C_{t}^{E}-\mathbb{L}_{t}+ \Delta_{t}S_{t}$) is a self-financing portflio that tracks the call price exactly.* 
Observe from [[Black Scholes European Option Pricing Formula#^6d80d7|BSM derivation]] that a portfolio $W_{t}=n_{t}S_{t}^{C}+b_{t}B_{t}$ (we already used $V$) is self-financing and replicates when:
- $n_{t}=\frac{S_{t}}{S_{t}^{c}}\Delta_{f}$
- $b_{t}=\frac{f(S_{t},t)-n_{t}S_{t}^{C}}{B_{t}}$
In our case, we have:
- $n_{t}=\frac{S_{t}}{S_{t}^{C}}\Delta_{t}$
- $b_{t}=\frac{C_{t}^{E}-S_{t}}{B_{t}}$
And thus $\underbrace{ C_{t}^{E}-\mathbb{L}_{t} }_{ =b_{t}B_{t} }+\underbrace{ \Delta_{t}S_{t} }_{ =n_{t}S_{t} }$ by the above equation.

### At time $t=0+dt$ (day 1)
- Option value changes to $-C_{t+dt}$
- Cash holding grows to $C_{t}^{E}e^{ r\cdot dt }$
- We must "Re-hedge" or "balance" the loan and underlier such that we maintain $\Delta_{t+dt}$ units of underlyer. We break it out into three cases:
    - $\Delta_{t+dt}=\Delta_{t}$ (delta stays same): time value of money, and use dividend to pay back loan
        - $\mathbb{L}_{t+dt}=\mathbb{L}_{t}\underbrace{ e^{ (r-q)\cdot dt } }_\text{ time value }$
    - $\Delta_{t}<\Delta_{t+dt}$ (delta increases): Borrow more money to buy more stock:
        - $\mathbb{L}_{t+dt}= \mathbb{L}_{t}e^{ (r-q)dt }+ |d\Delta_{t}|S_{t+dt}$
    - $\Delta_{t+dt}>\Delta_{t}$ (delta decreases): Sell stock to reimburse loan.
        - $\mathbb{L}_{t+dt}= \mathbb{L}_{t}e^{ (r-q)dt }- |d\Delta_{t}|S_{t+dt}$
    - In all three cases, we can say: 
$$
\mathbb{L}_{t+dt}=\mathbb{L}_{t}e^{ (r-q)dt }+(d\Delta_{t})S_{t+dt}
$$
- We then purchase or sell $d\Delta_{t}$ units of the security to get $\Delta_{t+dt}S_{t+dt}$
As we show above, $C_{t+dt}^{\text{syn}}\coloneqq +C_{t+dt}^{E}-\mathbb{L}_{t}+ \Delta_{t+dt}S_{t+dt}$ is self-financing. This means that total value of the portfolio is:
$$
\begin{align} 
V_{t+dt}&=-C_{t+dt}^{E}+C_{t}^{E}e^{ r\cdot dt }-\mathbb{L}_{t+dt} \\
&=-C_{t+dt}^{E}+\underbrace{ C_{t}^{E}e^{ r\cdot dt }-\overbrace{ \mathbb{L}_{t}e^{ (r-q)dt }+(d \Delta_{t})S_{t+dt} }^\text{ loan } +\Delta_{t+dt}S_{t+dt}}_{ =C_{t+dt}^{E} } \\
&=0
\end{align}
$$
### At time $t=T$, (expiration date)

On expiration and *before* the call is cashed out, the value of the portfolio is:
$$
V_{T}=0=-\max\{ S_{T}-K,0\}+C_{0}^{E}e^{ r\tau }- \underbrace{ \mathbb{L}_{0}e^{ (r-q)\tau }+(d\Delta_{T-dt})S_{T} }_{\mathbb{L}_{T}  }+ \Delta_{T}S_{T}
$$
We then consider our customer cashing out their loan:
1. If $S_{T}>K$ in the money, 
    1. $-C_{T}^{E}$ becomes $-S_{T}+K$
    2. $\Delta_T =1$
    3. Thus $V_{T}=-S_{T}+K+C_{0}^{E}e^{ r\tau }-\mathbb{L}_{T}+S_{T}=0$ since synthetic call still holds
        1. i.e., liquidate the stock to pay $S_{T}$
    4. Thus $\mathbb{L}_{T}=K+ C_{0}^{E}e^{ r\tau }$
        1. i.e., pay back the loan with remaining $K$ and cash invested
2. If $S_{T}\leq K$ out of the money:
    1. $-C_{t}^{E}$ becomes $0$
    2. Thus $V_{T}=+C_{0}^{E}e^{ r\tau }-\mathbb{L}_{T}+\Delta _TS_{T}=0$ since synthetic call still holds
    3. Thus $\mathbb{L}_{T}=C_{0}^{E}e^{ r\tau }+\Delta_{T}S_{T}$
        1. i.e. pay back the loan with cash invested and liquidating the stock

## Greek Neutral Portfolio of Derivatives

Any derivative we can modify to make delta-neutral. For a security modeled by geometric brownian motion (with no dividends, $q=0$):
$$
dS_{t}=mS_{t}dt+\sigma S_{t}d\mathfrak{B}_{t}
$$
> [!info] Notation
> Since there are lots of notaions here, let's outline them first:
> - $S_{t}$ is the underlying security
> - $C_{t}^{E}$ is the call option
> -  $\tilde{V}$ is the delta-neutral portfolio when parameter $N_{s}=\Delta_{C}$
> - $\hat{V}$ is the gamma-neutral portflio when parameters $N_{s}=\Delta_{C}$, $N_{C}=- \frac{\tilde{\Gamma}}{\Gamma_{C}}$
> - $V'$ is the delta-gamma neutral portflio when parameters

let us create a portfolio of a derivative of this stock by having one call option and $N_{s}$ units of the underlier. The value of this portflio is:
$$
\tilde{V}(S_{t},t)=C_{t}^{E}+N_{s}S_{t}
$$
- $C_{t}^{E}$ have greeks $\Delta_{C}, \Gamma_{C},\Theta_{C}$
- which have greeks $\tilde{\Delta}=\Delta_{C}+N_{S}$, $\tilde{\Gamma}=\Gamma_{C}$, $\tilde{\Theta}=\Theta_{C}$.
Using ito's formula, we get:
$$
\begin{align}
d \tilde{V}& = \left( \underbrace{ \frac{ \partial \tilde{V} }{ \partial t } }_{ \tilde{\Theta} } +mS_{t} \underbrace{ \frac{ \partial \tilde{V} }{ \partial S_{t} } }_{ \tilde{\Delta} } +\frac{1}{2} \sigma^{2}S_{t}^{2} \underbrace{ \frac{ \partial^{2} \tilde{V} }{ \partial S_{t}^{2} } }_{ \tilde{\Gamma} }  \right)dt+\sigma S_{t} \underbrace{ \frac{ \partial \tilde{V} }{ \partial S_{t} } }_{\tilde{\Delta} }d\mathfrak{B}_{t}  \\
&= \tilde{\Gamma}\frac{1}{2}\underbrace{ \sigma^{2}S_{t}^{2}dt }_\text{ See below }+\tilde{\Theta}dt+\tilde{\Delta}(\underbrace{ mS_{t}dt+\sigma S_{t}d\mathfrak{B}_{t} }_{ =dS_{t} }) \\
&= \frac{1}{2}(dS_{t})^{2}\tilde{\Gamma}+\tilde{\Theta}dt+\tilde{\Delta}dS_{t}
\end{align}
$$
Where from [[Stochastic Calculus#^5b91f3|Ito Isometries]]
$$\begin{align}
(dS_{t})^{2}&=m^{2}S_{t}^{2}\underbrace{ (dt)^{2} }_{ =0 }+\sigma^{2}S_{t}^{2}\underbrace{ d\mathfrak{B}_{t}^{2} }_{ = dt}+2m\sigma S_{t}^{2}\underbrace{ dtd\mathfrak{B}_{t} }_{ =0 } \\
&= \sigma^{2}S_{t}^{2}dt
\end{align}
$$
Now, from the above formula we see that there are three components that cause changes in $d\tilde{V}$
- $|\tilde{\Delta}|>0$ i.e. non-zero delta
- $|\tilde{\Gamma}|>0$, i.e. non-zero gamma
- $|\tilde{\Theta}|>0$, but considering $\Theta\coloneqq \frac{ \partial S }{ \partial t }$ it's impossible for this to be zero.

### Delta hedging.

Lets make $\tilde{\Delta}=0$. We can do this simply by setting $N_{s}\equiv \Delta_{C}$:
$$

\begin{align}
\tilde{V} &= -C_{t}^{E}+\Delta_{S} S_{t} \\
\frac{ \partial \tilde{V} }{ \partial S_{t} } &=- \frac{ \partial V }{ \partial S_{t} } + \Delta_{C}=-\Delta_{C}+\Delta_{C}=0
\end{align}
$$

### Delta-Gamma Hedging

After the delta hedging we still have a positive gamma. Lets make $\tilde{\Gamma}=0$. We create a new portfolio of the delta-neutral portfolio, and $N_{C}$ units of the call:
$$
\begin{align}
\hat{V}&=\tilde{V}+N_{C}C_{t}^{E}\\
\hat{\Gamma}&=\frac{ \partial^{2} \hat{V} }{ \partial S_{t}^{2} } = \tilde{\Gamma}+N_{C}\Gamma_{C}
\end{align}
$$
Setting $N_{C}\equiv - \frac{\tilde{\Gamma}}{\Gamma_{C}}$ will make $\hat{\Gamma}=0$. But this incurs a new problem: $\hat{\Delta}$ is non-zero again. We add $N_{\text{more}}$ more units of $S_{t}$ to combat this:
$$
V'=\tilde{V}+N_{C}C_{t}^{E}+N_{more}
$$

