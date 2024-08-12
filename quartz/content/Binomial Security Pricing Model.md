---
aliases:
  - CRR Model
tags:
  - Economics/Finance
---

![[Screenshot 2023-10-24 at 17.34.51.png]]

## Model Definition
- Consider time interval $[t_{0},t_{f}]$
	- total time $\tau=t_{f}-t_{0}$
	- $n$ intervals
	- $h_{n}$: duration of one interval ($=\frac{t_{f}-t_{0}}{n}$)
- $S_{t}$: price of security at time $t$.
	- $S_{0}$ is given as a constant
- Gross return $\frac{S_{j}}{S_{j-1}}$
	- It's called gross because its in the form of $1.\text{xx}$ or $0.\text{xx}$, not $\frac{S_{j}-S_{j-1}}{S_{j-1}}$
	- Is defined as a [[Bernouilli Distribution]]: 
$$
\frac{S_{j}}{S_{j-1}}=\begin{cases}
u_{n} & \text{with probability}~p_{n} & \text{(stock uptick)} \\
d_{n} & \text{with probability}~ (1-p_{n}) & \text{(stock downtick)}
\end{cases}
$$
- $N$: number of upticks. Is a random variable with [[Binomial Distribution]] $N\sim \text{Binom}(n,p_{n})$
	- $P(N=k)=\binom{n}{k} ~p_{n}^k~(1-p_{n})^{n-k}$
- Sample Space $\Omega _{n}$
	- $\Omega=\{ U,D \}$
	- $\Omega_{2}=\{ UU,UD,DU,DD \}$
	- $\Omega_{3}=\{ UUU,UUD , \dots , DDD \}$
	- $\Omega_{n}$ is for $n$-period binomial tree
	- $Pr(\omega)\coloneqq p_{n}^{N(\omega)}(1-p_{n})^{N(\omega)}$
- Final Price $S_{n}=S_{0}~u_{n}^k~d_{n}^{n-k}$
	- $S_{n}$ is a random variable. $P(S_{n}=S_{0}~u_{n}^k~d_{n}^{n-k})=P(N=k)$
	- i.e. probability that price will be equal to there being $k$ upticks is the probability that there will be $k$ upticks. (no shit)
- Expectation of final price: $E(S_{n})=S_{0}\Big(p_{n}u_{n}+(1-p_{n})d_{n}\Big)^n$
- To find number of upticks $k$ from final price $S_{n}$ we use
$$
  k= \ln\left(\frac{S_{n}}{S_{0}d^n} \right)\Big/\ln\left(\frac{u}{d} \right)
$$
- Dividends: $D(t_{j-1},t_{j})=qS(t_{j-1})h_{n}$
	- See [[Dividend Discount Model]] for dividends in non-binomial tree model
	- **Total Return** (incl. dividends): $R(t_{j-1},t_{j})= \frac{S(t_{j})-S(t_{j-1})+D(t_{j-1},t_{j})}{S(t_{j})}=\mathcal{R}_{j}+qh_{n}$
	- **Capital Gains Return** (excl. dividends): $\mathcal{R_{i}}\coloneqq \frac{S_{1}-S_{0}}{S_{0}}$
	- (Dividends Return $qh_{n}$)
## Assumptions & Definitions
- **Log returns**: $Y_{n,j}\coloneqq\ln\left(\frac{S_{j}}{S_{j-1}} \right)$ Is also a random variable
	- Log normal is another indicator of how well the stock is performing
	- It is similar in value to the percentage return
	- See [What does the average log-return value of a stock mean? - Personal Finance & Money Stack Exchange](https://money.stackexchange.com/questions/24382/what-does-the-average-log-return-value-of-a-stock-mean) for the intuition
- $u_{n}d_{n}=1$ i.e. the stock ticking up then down is same as no movement at all
- Instantaneous Rate of Return
	- $m=\lim_{ n \to \infty }\frac{E[R(t_{0},t_{1})]}{h_{n}}$
- **Drift**: Instantaneous Expected Log-Return
	- $\mu=\lim_{ n \to \infty }Y_{n,j}=\lim_{ n \to \infty } \frac{E\left[\ln \frac{S_{1}}{S_{0}} \right]}{h_{n}}$
- **Log Variance**: Instantaneous Variance of Log-Return = **Volatility** ($\sigma$)
	- $\sigma^2=\lim_{ n \to \infty }\sigma_{n}^2=\lim_{ n \to \infty } \frac{Var\left[\ln \frac{S_{1}}{S_{0}} \right]}{h_{n}}$
- Dividend Rate $q$
### Lemmas
- $\mu_{n}h_{n}=p_{n}\ln u_{n}+(1-p)\ln d_{n}$
- $\sigma^2_{n}h_{n}=p_{n}(1-p_{n})\left[\ln \frac{u_{n}}{d_{n}} \right]^2$
- $\mu=m-q-\frac{\sigma^2}{2}$
- (Proofs in notes)

thm. **Parameter Triple**. Given a security with $\mu,\sigma^2,m,q$ we determine that:
1. $u_{n}\approx e^{\sigma \sqrt{ h_{n} }}$
2. $d_{n}\approx e^{-\sigma \sqrt{ h_{n} }}$
3. $p_{n} \approx \frac{1}{2}\left(1+\frac{\mu}{\sigma}\sqrt{ h_{n} } \right)=\frac{e^{(m-q)h_{n}}-d_{n}}{u_{n}-d_{n}}$

## Continuous Time Model
### Model Definition
Instead of assuming an uptick-downtick gross return is a [[Bernouilli Distribution]], we instead think of the log returns. (Use [[Central Limit Theorem#Lindenberg CLT|Lindenberg CLT]])
$$
\begin{align}
S_{n}(t)&=S_{0}\exp \left(\ln \frac{S_{n}}{S_{0}} \right) \\
&=S_{0}\exp \left(\sum_{j=1}^n\ln \frac{S_{j}}{S_{j-1}} \right) & \text{Lindenberg CLT}\\
&=S_{0}\exp \left(Y_{n,j}\right) & Y\sim N(n\mu_{n}h_{n},n \sigma^2_{n}h_{n})\\
&=S_{0}\exp(\mu t+\sigma t\cdot Z) & Z\sim N(0,1)
\end{align}
$$
⇒ Thus we have
$$
\ln\left(\frac{S_{t}}{S_{0}} \right)\sim N(\mu t,\sigma^2t)
$$

Properties
- $S(t)$ is a lognormal random variable with
	- i.e. $S(t)=S_{0}e^{ \mu t+\sigma \sqrt{ t }\mathbb{Z}t }$ where $\mathbb{Z}$ is the standard normal random variable
- $\ln\left( \frac{S_{t}}{S_{t-1}} \right)$ are i.i.d.
