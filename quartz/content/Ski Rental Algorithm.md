---
aliases: []
tags:
  - Economics/Game-Theory
---
_Motivation._ At a ski resort you are trying to decide whether to buy a ski or rent:
- You will be there for $T$ days
- It costs $\$1$ to rent a ski, and $\$B$ to buy the ski
    - $B\ll T$
- On day $\ell$ you will wake up and say: "I don't want to ski anymore" and go home
What should be your strategy? An online algorithm answers this question. 
The OPT algorithm is our benchmark, and it has information that we don't have. The OPT algorithm for this problem is:

def. **Optimal Ski Rental Algorithm.** 
$$
\text{OPT}=\begin{cases}
\text{if }\ell>B & \text{buy} \\
\text{if }\ell<B & \text{rent}
\end{cases}=\text{min}\{ l,B \}
$$

## Deterministic Ski Renter Algorithm

_Example._ Suppose our strategy is to rent $B-1$ days, and buy on the $B$th day. Then:
1. if $\ell > B$ then we will have rented for $B-1$ days, and bought on the $B$-th day so the total cost is $2B-1$
2. if $\ell<B$ then we end up just renting for $\ell$ days, so the total cost is $\ell$
$$
\begin{align}
\frac{\text{ALG}}{\text{OPT}}&=\begin{cases}
\text{if }\ell>B &  \frac{2B-1}{B}< 2 \\
\text{if }\ell<B & \frac{\ell}{\ell}=1
\end{cases} \\
 & <2
\end{align}

$$
So even in the worst case, the algorithm will be less than $2\cdot \text{OPT}$.

thm. **(Deterministic Algorithm Bound)** Let a $\text{ALG}_{k}$ algorithm denote a deterministic algorithm that rents for $k-1$ days, and buys the ski at day $k$. For any $k$:
$$
\text{ALG}_{k}\geq 2\cdot\text{OPT}
$$
*Proof.* Knowing $k$ from the algorithm design, adversarial input $\ell \leftarrow k$ will be $ALG(k)\geq \left(2-\frac{1}{B} \right)OPT(k)$. The deterministic algorithm is to rent until $k-1$th day, and buy on the $k$-th day.
![[Online Algorithm-20240417222043860.png|359]]
The worst case adversarial situation for $\ell$ is $\ell=k$ because this will force the user to rent for the maximum $k-1$ days, and then to buy as well.
- $OPT=\text{min} \{ k,B \}$
- $ALG=(k-1)+b$
Therefore:
$$
\begin{align}
\frac{ALG}{OPT} & = \frac{k-1+B}{\text{min}\{ k,B \}} \\
& =\text{max}\left\{  1+\frac{k-1}{B} , 1+ \frac{B-1}{K} \right\} \\
& =1+\underbrace{  \text{max}\left\{  \frac{k-1}{B} , \frac{B-1}{k} \right\} }_{ \geq1 } \\
& \geq 2
\end{align}
$$
So even the best deterministic algorithm pays $\geq 2\cdot \text{OPT}$. <span style="float:right;">■</span>
This is devastating; we can't get past two-times better than the optimal. Instead, we should mix our strategies to overcome the adversary.

## Probabilistic Ski Rental Algorithm

*Example*. Let us imagine a probabilistic rental algorithm that:
- With probability $\frac{1}{2}$, stops renting and buys at day $\frac{3}{4}B$
- With probability $\frac{1}{2}$, stops renting and buys at day $B$
This algorithm behaves differently depending on the true day you stop skiing, $\ell$:
1. Case $\ell < \frac{3}{4}B$: 
    1. $\text{OPT}=\ell$
    2. $\mathbb{E}[\text{ALG}]=\ell$
    3. $\frac{\mathbb{E}[\text{ALG}]}{\text{OPT}}=1$
2. Case $\frac{3}{4}B <\ell <B$: 
    1. $\text{OPT}=B$
    2. $\mathbb{E}[\text{ALG}]=\frac{1}{2}\underbrace{ \left( \frac{3}{4}B+B \right) }_{ \text{buy at } \frac{3}{4}B }+\frac{1}{2}\underbrace{ (B+B) }_{ \text{buy at }B }=\frac{15}{8}B$
    3. $\frac{\mathbb{E}[\text{ALG}]}{\text{OPT}}=\frac{15}{8}$
3. Case $B < \ell$:
    1. $\text{OPT}=\ell$
    2. $\mathbb{E}[\text{ALG}]= \frac{1}{2}\underbrace{ \ell }_\text{ rent } + \frac{1}{2} \underbrace{ \left(  \frac{3}{4}B+B \right) }_\text{ rent then buy }$
    3. $\frac{\mathbb{E}[\text{ALG}]}{\text{OPT}}=\underbrace{ \frac{1}{2}+ \frac{8}{7} \frac{B}{\ell}\leq \frac{1}{2}+ \frac{8}{7} }_{\text{ this is case  }B<\ell}=\frac{11}{7}$
Therefore we have the worst of these cases bound:
$$
\frac{\mathbb{E}[\text{ALG}]}{\text{OPT}}\leq \frac{15}{8}
$$
Which is slightly better than deterministic. This is, however, nowhere close to how good we can be:

def. **Optimal Probabilistic Ski Algorithm.** The optimal algorithm is to, on waking up every day:
$$
\begin{cases}
\text{If day}<B  & \text{then } \begin{cases}
\text{Buy with probability } \frac{1}{B} \\
  \text{Rent with probability } 1-\frac{1}{B}
\end{cases} \\
\text{If day} = B   & \text{ then just buy}
\end{cases}
$$
This algorithm will have:
$$
\frac{\mathbb{E}[\text{ALG}]}{\text{OPT}}\leq \frac{e}{e-1} \approx 1.58
$$
(We won't prove this)
