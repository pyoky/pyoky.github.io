---
aliases: []
tags:
  - Math/Statistics
---

def. Covariance. Covariance measures the joint variability of two R.V.s; let $X,Y$.

- When $X,Y$ show similar behavior, $\text{Cov}(X,Y) >0$
- When $X,Y$ show opposite behavior, $\text{Cov}(X,Y) <0$

$$
\begin{aligned}
\text{Cov}(X,Y):&= \mathbb{E}((X-\mu_X)(Y-\mu
_Y))\\[.5em]&=\mathbb{E}(X\cdot Y)-\mathbb{E}(X)\cdot \mathbb{E}(Y)

\end{aligned}
$$

- When $X\perp Y$, then $\text{Cov}(X,Y)=0$; but $\text{Cov}(X,Y)$ does **not** imply $X\perp Y$
- Covariance is a generalization of [[Variance]]: $\text{Var}(X)=\mathbb{E}((X-\mu_X)^2)=\text{Cov}(X,X)$

thm. **Relationship between Covariance and Variance.** let $X,Y$. then:

$$
\begin{align}
\text{Var}(X+Y)&=\text{Var}(X)+\text{Var}(Y)-2\cdot \mathbb{E}((X-\mu_X)(Y-\mu_Y)) \\
&= Var(X)+Var(Y)-2Cov(X,Y)
\end{align}
$$

- When $X\perp Y$ then $\text{Var}(X,Y)=\text{Var}(X)+\text{Var}(Y)$

thm. **Bilinearity of Covariance.**

- $\text{Cov}(aX,aY)=ab \cdot \text{Cov}(X,Y)$
- $\text{Cov}(X,Y+Z)=\text{Cov}(X,Y)+\text{Cov}(X,Z)$

thm. **Summed Variance.** let $X_1,…,X_n$. Then

$$
\text{Var}(\sum_i
X_i)=\sum_i \text{Var}(X_i)+2\sum_{\forall j,k \text{ s.t.} j<k} \text{Cov}(X_j,X_k)
$$

E.G. second summation has $3 \choose 2$ terms:

$$
\begin{aligned}
\text{Var}(X_1+X_2+X_3)&=\text{Var}(X_1)+\text{Var}(X_2)+\text{Var}(X_3)\\
&+2\cdot \text{Cov}(X_1,X_2)\\
&+2\cdot \text{Cov}(X_2,X_3)\\
&+2\cdot \text{Cov}(X_1,X_3)
\end{aligned}
$$
