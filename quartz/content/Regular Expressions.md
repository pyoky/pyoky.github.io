---
aliases: []
tags:
  - Computing/Formal-Languages
---

Section: [[Finite Automata]] = [[Regular Languages]]

Regular expressions have three operators:

$$
\begin{aligned}
+ ~~ &\text{Union}\\
* ~~ &\text{Zero or More}\\
\circ ~~ &\text{Concat}\\
\end{aligned}
$$

1. Begin with $\phi, \lambda, \Sigma \in \text{RegEx}$
2. All above operators on the three, and the alphabet, is a regular expression

> [!example]
> → Odd number of _a_’s, and then even number of _b_’s: $a(aa)^*(bb)^*$
> → 3 or less a’s and ends in _ab:_ $b^*(a+\lambda)b^*(a+\lambda)b^*ab$

## RegEx $\equiv$ DFA

pf. **RegEx ⇒ DFA**

1. First define the building blocks
   ![[スクリーンショット 2023-02-01 18.00.45.png]]

Representation of $\phi$

Representation of $\{a\}$

![[スクリーンショット 2023-02-01 18.02.06.png]]

Representation of $\lambda$

![[スクリーンショット 2023-02-01 18.01.35.png]]

1. Then buid on them recursively:

![Untitled](Untitled%209.png)

pf. **DFA ⇒ RegEx**

1. With a DFA with one final state, convert into a generalized transition graph (GTG) [=edges can be a RegEx]
2. If the GTG has two states:
   Unique RegEx for this DFA: $(r_{ii}^*r_{ij}r_{jj}^*r_{ji})^*r_{ii}^*r_{ij}r_{jj}^*$
   ![[Untitled 35.png]]
3. If GTG has three or more states it is in the form:

![Untitled](Untitled%202%203.png)

```

```
