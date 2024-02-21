---
aliases:
  - Complexity Class
tags:
  - Computing/Algorithms
  - Computing/Formal-Languages
---
## Definitions

thm. **Satisfiability Reducibility.** All problems can be reduced to boolean satisfiability problems.
- Optimization problems: choose some $k$, then ask "is there a solution $\leq k$?, $\geq k$?" => Then do a binary search on $[0,k]$ or $[k,\text{upper bound}]$

def. **Computationally tractable problems**. There exists a polynomial time algorithm $O(n^k)$ for the solution. The set of all computationally tractable problems is denoted $P$.
- Most problems in [[CS 330 Advanced Algorithms]]

thm. **Polynomial Reduction.** Problem $\pi_{1}:X_{1}\mapsto\{0,1\}$ that is an element of $P$ can be reduced to problem $\pi_{2}:X_{2}\mapsto\{0,1\}$ problem which is also in $P$, if there exists a function $f:X_{1} \mapsto X_{2}$ such that:
1. $\pi_{1}(x_{1})=1 \iff \pi_{2}(f(x_{1}))=1$
2. $f(x)$ takes polynomial time to complete
	1. $f(x)$ can be a many-to-one function
- This is denoted $\pi_{1}\leq_{p} \pi_{2}$
- Visually: ![[Pasted image 20231106171005.png|332]]
- Implications of when $\pi_{1}\leq_{p} \pi_{2}$
	- $\pi_{2}$ is at least as hard as $\pi_{1}$.
	- P-time:
		- If $\pi_{2}$ is a P-time problem and
		- ! If the input size to $\pi_{2}$ which is $|f(x)|$ is bounded by $|x|^c$
		- Then $\pi_{1}$ is also a P-time problem
	- NP-hardness:
		- If $\pi_{1}$ is NP hard → $\pi_{2}$ is also NP-hard
- & Techniques for reduction of $\pi_{1}\leq_{p} \pi_{2}$
	- Process:
	1. If $\pi_{1},\pi_{2}$ is a min/maximization problem, convert it to a decision problem
	2. If construction is needed, construct from $\pi_{1}$ to $\pi_{2}$: domain $G\to G'$
		1. ! The construction may not suppose you know the answer $\pi_{1}$.
		2. If it's a graph, it should apply to any graph
		3. If it's a set, it should apply to any set
		4. - If there is something like "exists solution of size $k$" in $\pi_{1}$, this $k$ will probability be present in $\pi_{2}$ as well
	3. Prove that if $\exists$ answer to $\pi_{1}$ in domain $G$, that implies $\exists$ answer to $\pi_{2}$ in domain $G'$.
	4. Prove that if $\exists$ answer to $\pi_{2}$ in domain $G'$, that implies $\exists$ answer to $\pi_{1}$ in domain $G$.
	5. Proven!

## Complexity Classes

Complexity classes are an extension of the [[Chompsky Heirarchy]].
![[Pasted image 20231115193942.png|400]]
![[Pasted image 20231115193235.png|250]]

1. **P (Polynomial Time)**
2. **NP (Nondeterministic Polynomial Time)** The certificate exists that can be verified in polynomial time. A non-deterministic [[Turing Machine]] can solve it in polynomial time because it has many paths.
3. **co-NP**
	- problem $\pi\in \text{NP}\implies \pi^c\in \text{co-NP}$:luc_check_circle:
	- problem $\pi\in \text{NP}\iff \pi\in \text{Co-NP}$ is an open problem
	  See [Whats the difference between NP and co-NP - Stack Overflow](https://stackoverflow.com/a/17047424)
4. **NP-complete**: Problems where any NP problem can be reduced into in polynomial time.
	1. If there is any NP-complete problem that can be shown to be solved in polynomial time, then P=NP.
	2. thm. **Cook-Levin Theorem.** CNF-SAT is NP-complete.
	3. & To prove a decision problem $\pi$ is NP-complete
		1. Show $\pi \in NP$ i.e. certificate can be checked in poly-time
		2. Show $\pi_{0} \leq_{p} \pi$ where $\pi_{0}$ is known NPC problem by…
			1. from solution $I_{0}$ of $\pi_{0}$, construct solution $I$ of $\pi$
			2. show that $I_{0}$ is solution for $\pi_{0}$ _if and only if_ $I$ is solution for $\pi$ (both ways needed to show that non-solutions are non-solutions)
	4. "Completeness" can apply to any complexity class. It means that it is the "hardest" problem in that class.
5. **NP-hard**: Problems that are at least as hard as all NP (and NP-complete) problems
	1. Equivalently, Problems that are as hard or harder than all NP problems

## List of Problems and Reductions

### NP-Complete Problems
- CNF-SAT (Cooke-Levin Theorem)
- 3-SAT
- [[Independent Set Problem]]
- [[Common Graph Problems]] Problem
- [[Subset Sum]] Problem
- [[Common Graph Problems]]
- [[Traveling Salesperson Problem]]
	- [[Hamiltonian Path/Cycle|Hamiltonian Path/Cycle]]

[Karp's 21 NP-complete problems - Wikiwand](https://www.wikiwand.com/en/Karp%27s_21_NP-complete_problems)
[Category:NP-complete problems - Wikipedia](https://en.wikipedia.org/wiki/Category:NP-complete_problems)
[(DevonThink) NP-complete Reductions](x-devonthink-item://DCCE08AC-A95C-447F-B196-BA4C1D91D081)
