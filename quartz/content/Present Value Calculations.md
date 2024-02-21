---
aliases:
  - Discounted Future Cashflow
tags:
  - Economics/Finance
---
In pricing the value of a [[Security (Finance)|security]], we consider that humans discount future returns.
- Reason we need to discount value: [[Value of Money]]
- This is the reverse of [[Future Value Calculations]].

def. **Discounted Cash Flows** (DCF) are used to price assets.
- Each cash flow is discounted by the discount rate. They are summed to get the present value of all the cash flows
- We always want asset price↑, risk↓
- rate of return $\propto$ volatility ← knowing how to trade off these two is important

To calculate the DCF of some future cash flow $FV$’s current present value $PV$:

$$
\begin{aligned}
PV&=\frac{FV}{
\left(1+\frac{r}{k}\right)^{t\times k}
}\\[.5em]
&=\frac{FV}{(1+q)^n}\\
\end{aligned}
$$

- $r$ is the Annual Percentage Rate [= quoted rate]
- $k$ is how many times to compound every year
	- → thus $r / k$ is the **interest rate** per **compound period (=$q$)**
- $t$ is the number of years
	- → thus $t\times m$ is the number of **total compounding periods (=$n$)

You can calculate the present value of multiple identical cash flows of amount $C$:

$$
\begin{aligned}
PV&=\frac{C}{(1+r)^1}+\frac{C}{(1+r)^2}+\cdots+\frac{C}{(1+r)^n}\\[.5em]
&=\frac{C}{r}\left(1-(1+r)^{-n}\right)\\
\end{aligned}
$$

What is the value of [[interest rate]] $r$?
- In individual investments/loans, $r$ determined usually by looking at similar assets in the market
- $r \propto$ [[inflation]]; if inflation is high, money isn’t worth much in the future, so lender demands more interest rate

## Net Present Value

$$
NPV(r)=PV(r)-\text{Initial Investment}
$$
