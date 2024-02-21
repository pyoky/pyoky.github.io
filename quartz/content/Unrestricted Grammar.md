---
aliases: []
tags:
  - Computing/Formal-Languages
---

- def. If $G$ is an Unrestricted Grammar, then $L(G)$ is recursively enumerable [=TM equivalent]. This is equivalent to all productions following the form:

  
$$
  (V \cup T)^+\rightarrow (V \cup T)^*






  
$$

def. $G$ is a Context-Sensitive Grammar if its productions follow the form:

$$
(V \cup T)^+\rightarrow (V \cup T)^*\\\text{and}\\
 |LHS| \leq |RHS|\\\text{and}\\\text{there is no }\lambda \text{ in the RHS}
$$
