---
aliases: []
tags:
  - Computing/Formal-Languages
---

Section: Finite Automata

def. Right Linearity. A grammar $G=(V,T,S,P)$ is right-linear iff all elements in the range of the production rules $\text{Range}(P)$ only contain variables on the right side of the result; i.e.:

$$
S\rightarrow aP | aS\\
P\rightarrow a
$$

> [!info] Observe that a right-linear grammer is same as being able to extend it only on the right. Left-linear grammar is vice versa

def. A **Regular Grammar** is a grammar that is exclusively either right-linear or left-linear.

## RegGrammar $\equiv$ DFA

pf. Regular Grammar ⇒ DFA

for $G=(V,T,S,P)$, for each rule in $P$, convert a variable into a state; arcs identify the rightside (or leftside) terminal variable

pf. DFA ⇒ Regular Grammar
