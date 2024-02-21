---
aliases: []
tags:
  - Math/Probability
---

def. An **Outcome Space ($\Omega$)** is the set of all possible outcomes of an experiment
def. An **Event** ($A$) is a subset of an outcome space. (die face is even)

**Example.** For a 6-sided die: 
$$
\begin{align}
\Omega&=\{1,2,3,4,5,6\} \\
A&=\{2,4,6\}\ \\
A&\subset\Omega
\end{align}
$$
def. **Probability for countable sets.** When all outcomes in $\Omega$ are equally likely, and $\Omega$ is a finite set,
$$
P(A)=\frac{\#A}{\#\Omega}
$$
where $\#A$ denotes the number of elements in set $A$ (its cardinality).

**Properties.**
- $\mathbb{P}(A^C) = 1-\mathbb{P}(A)$
- $\text{If } A \subseteq B \text{ then }P(A)\leq P(B)$
- $\text{If } A \subseteq B \text{ then }P(B\cap A^C) =P(B)-P(A)$
- $P(A\cup B) = P(A)+P(B)-P(A\cap B)$
Trivial cases:
- $P(\emptyset)=0$
- $P(\Omega)=1$
- $A\subseteq B$ is equivalent to $A\rightarrow B$ (i.e. if A then B)

## Measure Theory Definition

> [!quote] Probability is just an abuse of notation

**Motivation.** We need a sigma algebra to define a probability, because there's problematic set theory problems with uncountably infinite sets.

def. **Sigma Algebra.** A sigma-algebra on a set $\Omega$ denoted $\sigma(\Omega)$ contains certain subsets of $A$, such that it follows the following properties
1. $\{ \emptyset,\Omega \}\subseteq \sigma(\Omega) \subseteq 2^\Omega$ (_biggest and smallest possible_ sigma-algebras)
2. let $A$ be a subset of $\Omega$. If $A \in \sigma(\Omega)$ then $A^C \in \Omega$. (_closed under complement_)
3. let $A,B$ a subset of $\Omega$. If $A,B\in \sigma(\Omega)$ then $A \cup B \in \sigma(\Omega)$ (_closed under finite union_)

def. **Measure.** let $X,\sigma(X)$. A measure $\mu$ is a function from measure space to to real numbers:
$$
\mu:\sigma(X)\to \mathbb{R}
$$
that satisfies the following properties:
- _Non-negative:_ $\forall A \in \sigma(X)$, $\mu(A)>0$
- _Countable Additivity:_ $\mu(A\cup B)=\mu(A)+\mu(B)$
- $\mu(\emptyset)=0$

**Intuition.** Consider a measure as a means to measure the "size" of the set (not [[Cardinality]]). On a real number line, the set $(2,5)\equiv \{ x \in \mathbb{R}\mid 2<x<5 \}$ has length $3$. The set $(5,9)$ has length $4$. Thus $(2,5)\cup(5,9)=(2,9)$ has length $3+4=7$.

 def. A **Measure space** is simply a set $X$ and its sigma-algebra $\Sigma$ together in a tuple:
$$
(X,\Sigma)
$$
## Probability Space

def. A **Probability measure** on $X,\sigma(X)$ is a special type of measure $P:\sigma(X)\to \mathbb{R}$ that satisfies $P(\Omega)=1$
def. A **Probability Space** is like a measurable space, but also together with the probability function:
$$
(\Omega,\mathcal{F},\mathbb{P})
$$

## Interpretations of Probability (Philosophically)

**Motivation.** What is probability? Interpretations of its definitions seem meaningless without real-life experiments.

Two main interpretations of probability are:
1. The **Objectivist** Interpretation—relative frequency of occurrence, if the experiment is conducted indefinitely
2. The **Subjectivist** Interpretation—degree of belief; how much you would bet on an event.
