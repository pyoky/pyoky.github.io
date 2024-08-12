---
aliases: 
tags:
  - Economics/Finance
---
- Notation is equivalent to the [[Black Scholes European Option Pricing Formula|BSM]] formula. 
- Derivative of CDF of [[Normal Distribution]] 
$$N'\coloneqq \frac{ \partial N }{ \partial x }=\frac{e^{ -x^{2} / 2 }}{\sqrt{ 2\pi }}
$$

## Delta

i.e. sensitivity to either underlier price or strike price

$$
\begin{align}
\Delta_{C,S}  & \coloneqq \frac{ \partial C }{ \partial S }   \coloneqq \frac{ \partial C }{ \partial x } \mid_{x=S_{t}}  & = e^{ -q(T-t) }N(d_{1}) \\
\Delta_{C,K}   & \coloneqq \frac{ \partial C }{ \partial K } & =e^{ -r(T-t) }N(d_{2})
\end{align}
$$

Table of Deltas for Call/Put options as execution time approaches.

| $t \to T$ or <br>$\tau\to_{0}$ | At the Money Call<br>$S_{t}-K=0$<br><br><br> | In the Money Call<br>$S_{t}-K>0$<br>        | Out of the Money Call<br>$S_{t}-K<0$<br> |
| ------------------------------ | -------------------------------------------- | ------------------------------------------- | ---------------------------------------- |
| $d_{1}$                        | $0$                                          | $\infty$                                    | $-\infty$                                |
| $N(d_{1})$                     | $\frac{1}{2}$                                | $1$                                         | $0$                                      |
| $\Delta_{C}$                   | $\frac{1}{2}$                                | $1$                                         | $0$                                      |
| $\Delta_{P}$                   | $-\frac{1}{2}$                               | $0$                                         | $-1$                                     |
| For puts                       | **At the money Put**<br>$K-S_{t}=0$<br>      | **Out of the Money Put**<br>$K-S_{t}<0$<br> | **In the Money Put**<br>$K-S_{t}>0$<br>  |

## Gamma

i.e. second derivative sensitivity to underlier price

$$
\Gamma_{C}:= \frac{ \partial^{2} V }{ \partial S^{2} } = \Gamma_{P}= \frac{e^{ -q\tau }N'(d_{+})}{S_{t}\sigma \sqrt{ \tau }}
$$

## Theta

i.e. sensitivity to time (=time decay)
$$
\begin{align}
\Theta_{C}\coloneqq \frac{ \partial V }{ \partial \tau } &  = -S_{t}e^{ -q\tau  }\sigma N'(d_{+}) & +q S_{t}e^{ -q\tau }N(d_{+}) & -rKe^{ -r\tau }N(d_{-}) \\
 \Theta_{P}\coloneqq \frac{ \partial V }{ \partial \tau } &  = -S_{t}e^{ -q\tau  }\sigma N'(d_{+}) & -q S_{t}e^{ -q\tau }N(-d_{+}) & +rKe^{ -r\tau }N(-d_{-})
\end{align}
$$

## Vega

i.e. sensitivity to volatility
$$
\mathcal{V}_{C}:= \frac{ \partial C }{ \partial \sigma } 
$$
