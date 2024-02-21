---
aliases:
  - Amortization
tags:
  - Economics/Finance
created: 2023-09-06T23:27
updated: 2023-09-10T18:11
---

**Annuities** are…

- Money you borrowed: mortgages, etc. ⇒ pay regularly to pay off large amount
- Money you lent: social security credit, etc. ⇒ give large money, get regular payments later

**Amortization** is the same thing but from a different perspective
⇒ You're spreading a one-time cost into multiple years. Formulae are same if the recurring payments are of the same amount.

Types of Annuities

- Ordinary Annuity: payment occurs at the end of each period
- Simple Ordinary Annuity:
  $\text{Current balance}=\text{Prev. balance}+\text{Interest on previous balance}-\text{Payment}$

## Formulae for Constant Payment $P$

- $n$: Term; time from first payment to last payment (in years)
- $A_{n}$: Present value of annuity of $n$ terms.
- $S_{i}$: Total payment accrued after $i$ periods **(not a present value!)**
- $y=1+\frac{r}{k}$ for formula simplification

1. Preset value of annuity (=$A_{n}$) formula. (see below for more)
   - (i.e. the principal loan amount, mortgage loan amount, etc.) 
$$
A_{n}:= \frac{P}{(1+ r /k)} +  \frac{P}{(1+ r /k)^2}+ \dots \frac{P}{(1+ r /k)^n}
$$
1. Payment accrued after all $n$ periods (=$S_{n}$ =Future value of annuity after all payments made)
   ([[Proof.png|Demonstration]], use geometric sum formula)
$$
\begin{align}
S_{n}&= P+ \left(1+\frac{r}{k} \right) P+\left(1+\frac{r}{k} \right)^2P+ \dots +\left(1+\frac{r}{k} \right)^{n-1}\cdot P\\[0.5em]
&=\frac{\left(1+r / k \right)^n -1}{r / k}\cdot P & \dots\text{(0)}\\[.5em]
&=\frac{y^n-1}{y-1} \cdot P
\end{align}
$$
1. Simplified formula of PV using 1. and 2.
$$
\begin{align}
A_{n} & =\frac{S_{n}}{\left(1+ r / k \right)^n} & \text{time value}\\[0.5em]
&= \frac{1- (1+{ r / k})^{-n}}{r / k} \cdot P & \text{from (0)} \\
&= \frac{1-y^{-n}}{y-1}\cdot P \\
\end{align}
$$
1. Remaining balance after $i$ periods (=$B_{i}$)
   
$$
   \begin{align}
   B_{i}&=\frac{\left(1+\frac{r}{k} \right)^n -\left(1+\frac{r}{k} \right)^i}{\left(1+\frac{r}{k} \right)^n -1}A_{n} \\[.5em]
   &= \frac{y^n-y^i}{y^n -1}A_{n} &
   \end{align}

$$
Portion of the $i$-th payment $P_{i}$ that goes to…
_Principal_
$$
\mathfrak{B}_{i}=\frac{r}{k} \frac{y^{i-1}}{y^n-1}A_{n}
$$
- Total Principal ⇒ $\sum_{i=1}^n \mathfrak{B}_{i}=A_{n}$

_Interest_
1. Every period, interest is fully paid.
2. Interest is applied to the remaining balance $B$ (not to be confused with $\mathfrak{B}$)
$$
    	\mathcal{I}_{i}=\frac{r}{k}B_{i-1}=\frac{r}{k} \frac{y^n-y^{i-1}}{y^n-1}A_{n}
$$
3. Total Interest ⇒ $\sum_{i=1}^n \mathcal{I}_{i}=nP-A_{n}$

⇒ Thus the total payment: $\sum_{{i=1}}^n P_{i}=nP$

- Consider $k$-periodic [[Future Value Calculations|compounding]] (=$k$ times every year)
- Cost of Loan: ignoring the time value of money, sum of all interest payments $nP-A_{n}$
- As montly payment $P$ increases, number of payment periods $n$ decays exponentially.
![[Annuity.png|500]]

## Formulae for Variable Interest Rates

Variables are same as above, except:
- $P_{i}$: payment after period $i$
- $r_{i}$: interest rate during period $i$

1. Present value of annuity ($A_{n}$)
$$
\begin{align}
A_{n}&= \sum_{l=1}^n \frac{P_{l}}{\prod_{j=1}^l\left(1+\frac{r_{j}}{k} \right)}\\[.5em]
&=\frac{S_{n}}{\prod_{j=1}^n\left(1+\frac{r_{j}}{k} \right)}
\end{align}
$$
