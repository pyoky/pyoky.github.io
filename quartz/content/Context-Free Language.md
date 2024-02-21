---
aliases: []
tags:
  - Computing/Formal-Languages
---

Section: [[Pushdown Automata]]

## Closure Properties

Context-Free Languages are closed under:

- Union
- Concat
- Star
- Regular Intersection (←think: you have states & one stack to combine. It makes sense)

## Pumping Lemma

thm. Pumping Lemma for CFL.

![Untitled](Untitled%205.png)

> [!info] You need to check for all possible positions of $v,y$. Divide it up into **different cases** and derive contradictions in **all** of them.

![Untitled](Untitled%201%202.png)

## Transforming Context-Free Languages for Easy Parsing

You can do the following modifications on CFLs:

1. Add Lambda
2. Remove $\lambda$-productions. ← Every CFG with $\lambda$ productions can be made into one w/o $\lambda$-productions.
3. Substitution from $A\rightarrow wBv$ and $B\rightarrow y_1|y_2|
..|y_n$ into $A\rightarrow w{\color{red}y_1}v|w{\color{red}y_2}v|…|w{\color{red}y_n}v$
4. Removing Left-Recursion [e.g. $A\rightarrow Ax$] ← Left-recursion is bad, because top-down parsers will get into an infinite loop

Use the above modifications to produce CFLs that do not have **useless productions.**

alg. Removing useless productions in CFLs. These steps must go in order!

1. Identify **useless variables**
   Useless variables are ones that: 1. cannot be reached by the start symbol 2. cannot derive a terminal
2. Remove useless productions
   i.e. remove all productions that contain a useless variable
3. Remove all $\lambda$-rules
   1. create a set of variables that can ultimately derive a $\lambda$
   2. for every production that uses those variables on the RHS, derive the $\lambda$ **now.**
4. Remove unit productions
   1. draw the variable dependency graph (1 level)
   2. For every production that uses unit production on the RHS, consolidate all into one; i.e. derive it **now**.

### Normal Forms

- def. Chompsky Normal Form
  _Either: one terminal, or two variables._ Easy to convert any grammar into CNF.

  
$$
  A\rightarrow a\\
  A\rightarrow BC






  
$$

- def. Geribach Normal Form
  All rules are the form:

  
$$
  V\rightarrow \sigma V^*






  
$$

  - All $\lambda$-free CFGs can be expressed in GNF.
