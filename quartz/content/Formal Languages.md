---
aliases: []
tags:
  - Computing/Formal-Languages
---

```ad-hint
Notations are borrowed from [[Set Theory]]
```

_def_. $\Sigma$ is the set of all symbols

_def_. A **string** is a finite set of symbols

_def_. A **language** is a set of strings

## String Manipulation

- $\lambda$ is the empty string
- $\text{concat}(w,v)=w\circ v=wv$
  - …naturally, $w^n=w\cdots w$
- $\text{reverse}(w)=w^R$
- $\text{len}(w)=|w|$

---

We can also define languages as containing strings. Some common ones:

- $\Sigma^*$ ← set of strings, which are concatenated symbols 0 or more times
- $\Sigma^+$← set of strings, which are concatenated symbols 1 or more times

> [!info] For example, let $\Sigma=\{a,b\}$. Then:

- $\Sigma^*=\{\lambda,a,b,aa,ab,ba,bb,...\}$
- $\Sigma^+=\{a,b,aa,ab,ba,bb,...\}$

You can also use set operations on languages

- $L_1 \circ L_2=\{xy|x\in L_1,y\in L_2\}$
  - …naturally, $L_1\circ L
    _1 = L_1^2$
- $\bar{L_1}=\Sigma^*-L_1$

---

A language given a [[Formal Grammar|grammar]] is defined as a set of terminal-only strings that are derivable from the starting strings. More formally:

$$
L(G)=\{w\in T^*|S\xRightarrow* w \}
$$
