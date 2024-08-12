---
aliases: []
tags:
  - Computing/Formal-Languages
---

**Grammar** is formally defined as a tuple:

$G=(V,T,S,P)$

- $V$ are variable symbols to be used in the language (they can’t be in a string, because they’re placeholders)
- $T$ are terminal symbols to be used in the language.
- $S$ is the start variable
- $P$ is the production rules

> [!info] Notation for production rules:

- $w \Rightarrow z$: w derives z
- $w \xRightarrow[]{*} z$: w derives z in zero or more steps
- $w \xRightarrow[]{+} z$: w derives z in one or more steps

### Normal Forms
- [[Greibach Normal Form]]
- [[Chompsky Normal Form]]
