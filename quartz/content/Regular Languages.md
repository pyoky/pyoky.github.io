---
aliases: []
tags:
  - Computing/Formal-Languages
---

Equivalent to [[Finite Automata]]

def. Regular Languages are languages that can be described by either
- Finite Automata
- Regular Grammar
- Regular Expressions

## Closure of Regular Languages

Regular languages are closed under the following operations:

1. Union, Intersection
2. Concatenation, Star
3. Compliment
4. Quotient
   $L_1/L_2=\{w|\exists x \in L_2 ~\text{s.t.}~ wx \in L_1\}$ ← left quotient
   $L_1 \backslash L_2=\{w|\exists x \in L_2 ~ \text{s.t.} ~ xw \in L_1\}$ ← right quotient
5. Homomorphism
	- Homomorphism is a function $h$ s.t.: 
$$
h:\Sigma\mapsto\Gamma^*
$$So: $w=a_1a_2…a_n \Rightarrow$ $h(w)=h(a_1)h(a_2)…h(a_n)$

## Pumping Lemma and Disproving Regularity

lem. **Pumping Lemma.** let regular language $L$, and $w\in L$ whose length is $m$ or greater. Then $w$ can be decomposed s.t.:

1. $w=x\circ y \circ z$
2. $xy$ has a length no larger than pumping length $m$
3. $y$ is not an empty string

In this case, a newly constructed string $w’=x\circ y^i \circ z$ must also be in language $L$.

Proof by using the pumping lemma should be:

1. Choose **any** single string $w$ in the language and express it in terms of a positive int. $m$
2. Decompose the string into $x,y,z$, **where** $|xy|\leq m$
3. Show that $x\circ y \circ z$ is not in $L$, for a **certain** $i=0,1,…$
   → i.e. pick an i, and show that it doesn’t work if m is positive
4. Contradiction!

---

In general, you can disprove regular languages by knowing

- Finite languages are always regular
- the Pumping Lemma
