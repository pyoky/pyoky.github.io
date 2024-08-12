---
aliases: []
tags:
  - Computing/Formal-Languages
---

def. Pushdown Autotmaton (PDA)

$$
M=(Q,\Sigma,\Gamma,\delta,q_0,z,F)
$$

Where:

- $\Gamma$: stack alphabet
- $z$: stack bottom market
- $\delta$ is a transition function where for $q,q' \in Q, \sigma \in \Sigma, \gamma \in \Gamma$

$$
(q,\sigma,\gamma)\mapsto\{(q',\gamma^*),...\}
$$

…where the destination set is a finite set.

…and strings can be accepted by either final state _xor_ an empty stack (equivalent)

> [!info] We’re going to deal mostly with nondeterministic pushdown automata (NPDA), as they are more useful.

Described mechanically:

1. Input tape is read only once, left to right
2. A read head has finite number of states
3. A read head has a stack from which the top letter can be read off

![Untitled](Untitled%207.png)

def. the current **Configuration** of a PDA is described as a tuple

$$
(q,a\bold{w},b\bold{x})\vdash(q',w,x)
$$

where $\vdash$ represents a _single step_ of a PDA.

> [!info] An NPDA can accept by a **final state** or an **empty stack;** these two definitions are equivalent.
