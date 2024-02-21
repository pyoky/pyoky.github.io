---
aliases: []
tags:
  - Computing/Algorithms
---
Q. **CNF Satisfiability Problem.** (=CNF-SAT =Circuit Satisfiability) Given a conjunctive normal form, is there a way to set the variables to $\text{True}$ or $\text{False}$ such that the formula evaluates to $\text{True}$?

$$
(x_1 \lor \neg x_2 \lor x_3) \land (\neg x_1 \lor x_4) \land (x_2 \lor \neg x_3 \lor x_5 \lor \neg x_6)

$$

- _Literal_: $x_{i}$ or $\bar{x_{i}}$
- _Clause_: $(x_{1} \lor x_{2} \lor \bar{x_{3}})$ a set of `or`-connected literals

thm. **Cooke-Levin Theorem.** The Boolean Satisfiability problem is NP-complete.
- The first problem to be determined to be NP-complete.

Q. **3-Satisfiability Problem.** (3-SAT)
- The CNF-SAT problem, but every set of ORs has only three variables
- 3-SAT $\leq_{p}$ 4-SAT

alg. **Reduction** CNF-SAT $\leq_{p}$ 3-SAT
- Idea: $a \lor b\equiv (a \lor {\color{red}c})\cap(b \lor{\color{red}\bar{c}})$……(1)
1. Construction
	1. $\exists \{ x_{1}\dots x_{n} \}$ variables that satisfies $Q:q_{1}\dots q_{m}$ where $q_{i}$ is a clause
	2. $Q':q'_{1}\dots q'_{m'}$ constructed to satisfy (1).
		1. $m'>m$ (obviously)
		2. New variables $v_{1}\dots v_{k}$ thus $Q$ has variables $\{ x_{1}\dots x_{n},v_{1}\dots,v_{k} \}$
2. CNF-SAT ⇒ 3-SAT
	1. let $X_{1}\dots X_{n}\in \{ 0,1 \}$ that satisfies $Q$. Then these values will satisfy $Q'$ regardless of $v_{i}$ 's values, so choose them arbitrarily. These values satisfy $Q'$
3. 3-SAT ⇒ CNF-SAT
	1. let $X_{1}\dots X_{n},V_{1}\dots V_{n}\in \{ 0,1 \}$ that satisfies $Q'$. Then $X_{1}\dots X_{n}$ will satisfy $Q$.
4. Thus proven.

Q. **DNF Satisfiability Problem.** Given a disjunctive normal form, is there a way to set the variables to $\text{True}$ or $\text{False}$ such that the formula evaluates to $\text{True}$?
- Exists a Polynomial time algorithm
- Only one clause need be satisfied

Q. **Tautology**. Given a Boolean formula $Q$, is $Q$ always $\text{True}$ regardless of what the variables are set to?
- The verification procedure for $\text{True}$ itself is NP-Complete, and it is exactly the CNF Satisfiability problem
- The verification procedure for $\text{False}$ is also NP-hard
- The whole problem is not in NP (and is Co-NP Complete)
