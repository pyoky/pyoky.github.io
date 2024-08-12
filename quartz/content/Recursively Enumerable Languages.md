---
aliases: []
tags:
  - Computing/Formal-Languages
---

Section: Turing Machines

def. Language $L$ is recursively enumerable iff there exists a TM $M$ such that $L=L(M)$.

→ The class of languages that TMs can represent is a recursively enumerable language. You can think of languages which are “countable.”

def. Language $L$ is recursive iff there exists a TM $M$ which, for every string $w$ in $L$, it halts.

→ Recursive Languages are languages in which a TM always halts.

- Distinction between RE and R languages.
![Untitled](Untitled%208.png)

lemma. If $S$ is a countable set, then $2^S$ [= the set of all subsets of $S$] **may not be countable**.

thm. There exists languages over alphabet $\Sigma$ that are not recursively enumerable. (proof using lemma.)

thm. If $L$ is recursively enumerable, $\bar{L}$ may not be RE.

thm. If $L$ and $\bar{L}$ are both RE, then $L$ and $\bar{L}$ is Recursive.

thm. If $L$ is recursive, $\bar{L}$ is recursive.
