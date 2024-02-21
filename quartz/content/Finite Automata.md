---
aliases: []
tags:
  - Computing/Formal-Languages
---

[[Regular Expressions]]

## Definitions

_def._ **Automata** is an abstract model of a computer.

_def_. **Regular Language** is a language that can be expressed by a FSM

_def_. **Trap state** is a state in which any symbol input leads to the same state.

_def_. **Closure** of $q_i$ is simply the set of states reachable from $q_i$ with only $\lambda$.

## Deterministic Finite Automata (DFA)

[= Finite State Machine]

$$
\text{DFA}=(Q,\Sigma,\delta,q_0,F)
$$

- $Q$ is the set of all states
- $\Sigma$ is the set of all symbols
- $\delta:Q\times \Sigma \rightarrow Q$ is a function mapping from _current state_ to the _next state_
  - $\delta^*(q_i,\lambda)=q_i$ [= empty strings lead to itself]
  - $\delta^*(q,wa)=\delta^*(\delta(q,w),a)$ where $a$ is a single symbol [= processes only one per tick]
- $q_0$ is the start state (entry point)
- $F$ is the set of final states

> [!info] Example finite state machine that accepts inputs that have both even number of $a,b$.

![Untitled](assets/Untitled%206.png)

_def_. Language. A string is **accepted** by a DFA when:

1. After processing the string, the DFA is in a final state
2. The string is in the language

The set of all aceepted strings by a DFA is the language of the DFA:

$$
L(M)=\{
w\in \Sigma^*|\delta^*(q_0,w)\in F
\}
$$

i.e. all the strings which, after processing it thru $\delta^*$, it lands on a final state

## Non-deterministic Finite Automata (NFA)

_def_. **Non-deterministic Finite Automata** can have multible edges with the same labels; i.e.

$$
\delta :Q \times \Sigma {\color{red} \cup \lambda}\rightarrow {\color{red}2^Q}
$$

i.e. from the current state, you can go to multiple states.

> [!info] Example Non-deterministic FSM

![Untitled](Untitled%201%203.png)

_corr_. “there exists a walk between $q_i,q_j$ whose labels concatenate to $w$” is equivalent to:

$$
q_j\in \delta^*(q_i,w)
$$

_thm_. All NFA can be convered into a DFA which:

$$
\begin{aligned}

\text{DFA}=\{\text{   }\\
Q&= 2^Q\\
\Sigma&\\
\delta&= Q_D\times \Sigma= Q_D\\
q_0&\\
F_D&=\{
Q\in Q_D|\exists q_i\in Q \text{ where } q_i
\in F_N\}\\
\}

\end{aligned}
$$

## Proving Regularity after Applying Properties

_e.g._ let $L$ be a regular language. For all strings in $L$ replace one $a$ with $b$, and let this new language $L'$. Is this a regular language?

_pf._ let $M$be a DFA for $L$.

1. Make a copy $M_1,M_2$ and enclose it in a new machine, $M'$
2. For all $a$ arcs in $M_1$ write a $b$ arc to the corresponding destination state in $M_2$.
3. The start state for $M_1$ is $M'$ start state.

![Untitled](Untitled%202%202.png)

Now, let

- $w=uav$, and $w'=ubv$ where $w,u,v\in \Sigma^*$
- $\delta_1^*(q_0,u)=q_i$, $\delta'(q_i,b)=q_j$, $\delta_2^*(q_j,v)\in F$ as we outlined above

1. If $w\in L$
   then

→ proofs often involve duplicating the machine in some way.

## DFA Minimization

Example:

![Untitled](Untitled%203%202.png)

![Untitled](Untitled%204%201.png)

```

```
