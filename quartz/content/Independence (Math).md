---
aliases: []
tags:
  - Math/Probability
---

## Independence of Events

thm. For partition $B_1,…,B_n$ of $\Omega$, for all $A\subseteq \Omega$:

$$
P(A)=P(AB_1)+P(AB_2)+\cdots+P(AB_n)\\=P(A|B_1)\cdot P(B_1)+\cdots+P(A|B_n)\cdot P(B_n)
$$
- i.e. $P(A)$ is the weighted average of conditional probabilities $P(A|B_i)$ with weights $P(B_i)$.

def. **Independence of Two Events**. Two events A, B are independent if

$$
P(A|B)=P(A|B^C) \\\Leftrightarrow\\P(A|
B)=P(A)
$$

thm. Necessary and sufficient for independence of two events:

$$
\text{A,B are independent}\\\Leftrightarrow\\ P(AB)=P(A)\cdot P(B) \\\Leftrightarrow\\P(AB)= P(B)\cdot P(A|B)
$$

> [!warning]
  Events are independent not when they are related, but instead whether one event influences the probabilities of another.

def. **Independence of Three Events.** Three events A, B, C are independent if _both_:
1. They are pairwise independent
2. $P(ABC)=P(A)\cdot P(B)\cdot P(C)$

thm. **Necessary and sufficient for independence of two events**; if _both_:
1. $P(AB)=P(A)\cdot P(B)$
2. $P(C|AB)=P(C|A^CB)=P(C|AB^C)=P(C|A^CB^C)$ ← all of them have to be equal.

thm. **Multiplication Rule for Three Independent Events.**

$$
P(ABC)=P(A)\cdot P(B)\cdot P(C)
$$

## Independence of Random Variable

def. **Independence**. Two [[Stat 230]]s $X, Y$ are **independent** IFF for all pairs of $(x,y)$

$$
\forall_{x,y}\,\mathbb{P}(X=x,Y=y)=\mathbb{P}(X=x)\cdot \mathbb{P}(Y=y)\\\Updownarrow\\\forall_{x,y}\,\mathbb{P}(X=x|Y=y)=\mathbb{P}(X=x)
$$

- i.e. the same as it is for events.

def. For $n$ random variables $X_1,…,X_n$ are mutually Independent IFF for all $(k_1,…,k_n)$:

$$
\forall_{x,y} \, \mathbb{P}(X_1=k_1,...X_n=k_n)=\mathbb{P}(X_1=k_1)\cdot\, \cdots\,\cdot \mathbb{P}(X_n=k_n)
$$
