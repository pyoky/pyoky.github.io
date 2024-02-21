---
aliases: []
tags:
  - Computing/Formal-Languages
---

A Turing machine:
- Is most powerful type of automation ([[Limits of Math and Computing|probably]].)
- Cannot solve the halting problem.
- Can be used to prove [[Limits of Math and Computing]].

> [!definition] Turing Machine
> 
$$
> M=(Q,\Sigma,\Gamma,\delta,q_0,B,F)
> 
$$
> where the previously unencountered symbols are:
> - $Q$: States
> - $\Sigma$: Input Alphabet
> - $\Gamma$: Tape Alphabet (superset of $\Sigma$)
> - $q_{0}$: Start state
> - $F$: Set of en states
> - $B$: Blank (also written as $\square$)
> - $\delta: Q\times \Gamma \rightarrow Q \times \Gamma \times \{L,R\}$
> 

Configuration and transition of a TM is denoted:

$$
w {\color{red}q}v\vdash w' {\color{red}q'} v'
$$

$$
\delta({\color{red}q},v)=({\color{red}q'},v,R)
$$

→ where the configuration is denoted as $({\color{red}\text{state}},~\text{write symbol},~\text{move left/right})$

In this case the head is reading the first symbol of $v$, i.e. the right-side letter.

---

### Turing Machines as Language Recognizers/Acceptors

$$
L(M)=\{{\color{red}w}|q_0 {\color{red} w}\vdash vq_fw \}
$$

⇒ Then ${\color{red}w}$ is in the language of the TM.

You can also think of it as the turing machine “halting” on the final state.

- If TM halts on a final state, $w$ is accepted
- If TM halts on a non-final state $w$ is not accepted
- If TM doesn’t halt, $w$ is not accepted

### Turing Machines as a Transducer [= Transformation on a language]

def. A function $f(w)$ is Turing-Computable if:

$$
\forall w,~~q_0w\vdash^*q_ff(w)
$$

Example of a Turing Machine representing a turing-computable function:

![Untitled](Untitled%2010.png)

### Turing Machine Building Blocks

1. $M_1\rightarrow M_2$
2. $M_1\overset{x}\rightarrow M_2$: run if $x$ is the current output ← you can also have mutiple conditionals

You have the building blocks of commonly-used TMs.

1. $s$: start, $h$: halt
2. $x$: write symbol $x$ onto tape
3. $L,R$: Move left, right
4. $L_a,R_a$: Move left or right until you see $a$ in tape ← make sure there is an $a$ on tape or it won’t halt
5. $L_{\neg a},R_{\neg a}$Move left or right until you don’t see $a$ in input
6. $\overset{a,b}\rightarrow \} \overset{w}\rightarrow$: symbols $a,b$ are represented as variable $w$ ← avoids having to write two identical machines for each symbol

Some more advanced building blocks:

1. $C$: Copy with a zero in the middle. e.g. $abba\rightarrow abba0abba$. **Tape head starts and ends in the beginning symbol.**
2. $S_L,S_R$ Shift left what is on the right, v.v. **The symbol on the head is erased.**

Example of using building blocks to simplify a turing machine:

---

### Turing Machine Equivalents

1. TM with Stay option: $\delta: Q\times \Gamma \rightarrow Q \times \Gamma \times \{L,R, {\color{red}S}\}$
2. Multitrack TM: One tape, but split into $n$ cells: $\delta: Q\times \Gamma^{\color{red}n} \rightarrow Q \times \Gamma^{\color{red}n} \times \{L,R\}$
   - Diagram
![Untitled](Untitled%201%205.png)
3. Semi-infinite TM: The tape is infinite only in one direction
   → Proof by “folding over” the standard TM into multi-track.
4. Multi-tape TM: $\delta: Q\times \Gamma^n \rightarrow Q \times \Gamma^n \times \{L,R\}^{\color{red}n}$
5. Off-line TM: Two-tape; one tape is input, the other the read/write tape. $\delta: Q\times \Gamma^{\color{red}2} \rightarrow Q \times \Gamma \times \{L,R\}^{\color{red}2}$
6. Non-deterministic TM
7. NPDA with 2 stacks

### Universal Turing Machine

Every TM can be binary encoded by a binary number:

![Untitled](Untitled%202%204.png)

The Universal Turing Machine is a 3-tape turing machine that simulates a standard Turing Machine $M$. Each of the tapes are:

1. Tape A: Binary encoding of a simulation of $M$
2. Tape B: The tape of $M$
3. Tape C: $M$’s current state
