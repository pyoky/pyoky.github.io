---
aliases: 
tags:
  - Math/Statistics
---
Simultaneous Equation Models use [[Two-Stage Lease Squares Regression]] to analyze circular causality.
![[Simultaneous Equation Model-20240428165936477.png|390]]
- The two dependent variables with circular causality is $Y_{1},Y_{2}$
- $Y_{1},Y_{2}$ are caused respectively by $Z_{1},Z_{2}$
- $W$ cause both $Y_{1},Y_{2}$.
The equation is thus:
$$
\begin{align}
\textcolor{red}{ Y_{1i} }&=\beta_{0}+\beta_{1}\textcolor{blue}{ Y_{2i} }+\beta_{2}W_{i}+\beta_{3}Z_{1}+\epsilon_{1i} \\
\textcolor{blue}{ Y_{2i} }&=\gamma_{0}+\gamma_{1}\textcolor{red}{ Y_{1i} }+\gamma_{2}W_{i}+\gamma_{3}Z_{1}+\epsilon_{1i}
\end{align}
$$
The process for regression is same as the [[Two-Stage Lease Squares Regression]]:
1. For the first equasion $Y_{1i}$:
    1. First stage: regress $Y_{2}$without $Y_{1}$: 
$$
Y_{2i}=\pi_{0}+\pi_{1}W_{i}+\pi_{2}Z_{1}+\nu_{i}
$$
    2. Second stage: regress $Y_{1}$ againt $\hat{Y_{2}}$ (the original equation):
$$
Y_{1i}=\beta_{0}+\beta_{1}\hat{Y_{2i}}+\beta_{2}W_{i}+\beta_{3}Z_{1}+\epsilon_{1i}
$$
1. Perform the same 2SLS regression for the second equation as well
