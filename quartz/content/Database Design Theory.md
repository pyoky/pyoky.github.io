---
aliases:
  - BCNF
tags:
  - Computing/Data-Science
---
How to reduce a [[Relational Algebra|Relational Model]] to make it more compact.

## Armstrong's Axioms

- Reflexivity: $Y \subseteq X \implies X\to Y$
- Augmentation: $X\to Y \implies XZ\to YZ$
- Transitivity: $X\to Y \text{ and } Y\to Z \implies X \to Z$

### Secondary Rules
- Decomposition: $X\to YZ \implies X\to Y, X\to Z$
- Composition: $A\to B, X\to Y \implies AX \to BY$
- Union: $X\to Y, X\to Z \implies X\to YZ$
- Pseudo-transitivity: $X\to Y, YA\to Z\implies XA\to Z$
- Identity: $X\to X$
- Extensivity: $X\to Y \implies X\to XY$

## Functional Dependency

def. **Functional Dependency**. If for all tuples in a relation that has the same values for attribute $X$ and attribute $Y$, then $Y$ is _functionally dependent_ on $X$.

$$
\exists f: X \mapsto Y \implies X\to Y ~ \text{...read "Y Depends on X"}
$$

e.g. an `address` relation with `street, city, state, zip`
- `zip` → `(city, state)`
	- Zip code determines city and state
- `(zip, state)` → `zip`
	- This is a _Trivial dependency_:= $RLHS\supseteq RHS$
- `zip` → `(state,zip)`
	- This is non-trivial, but not _complete_,
	- _Complete Non-trivial dependency:_= $LHS \cap RHS \neq \emptyset$

alg. **BCNF decomposition procedure.** Given a set of dependencies $\mathcal{F}$ and relation $R$, BCNF decomposition determines a minimally redundant (=row-redundant) [[Relational Algebra|Relation]].
1. Choose (non-determinisitcally) a dependency in $\mathcal{F}$, let $X\to Y$ which is non-trivial (=$X$ is not a [[Relational Algebra|superkey]])
2. Decompose using $X$ into two relations $R_{1}, R_{2}$
	- $R_{1}$ has attributes $X \cup Y$
	- $R_{2}$ has attributes $X \cup (attr(R)-Y)$
3. Recurse procedure for $R_{1}, R_{2}$

- It's a non-deterministic process (=there can be multiple ways to decompose a relation).
![[Database Design Theory-20231212183452170.png|489]]
def. **Closure**. Given dependencies $\mathcal{F}$, the closure $Z^*$ of set of attributes $Z$ is all attributes determined by $Z$ through those dependencies

### Finding a Key Using Functional Dependencies

alg. Given set of functional dependencies $\mathcal{F}$ on relation $R$, find the keys of the schema
1. For each dependencies $LHS\to RHS$, compute the closure of $LHS$ such that $LHS\to LHS^*$.
	1. If $LHS^*$ doesn't contain all the attributes of $R$, then augment $LHS$ such that it reaches all the attributes.
		1. i.e., let $\text{Remain}=attr(R)-LHS^*$
		2. then, it must be $LHS \cup \text{Remain}\to attr(R)$
	2. Then, $LHS \cup \text{Remain}$ is a [[Relational Algebra|superkey]] of $R$. let this be $S$.
	3. Can you reduce this superkey $S$?
		1. Try taking out one attribute at a time from $S$ to create $S'$
		2. Is $S'$ reducible?
		3. → Repeat until we reach something unreducible.
		4. ⇒ The final $S'$ that is unreducible is a key.
2. Repeat for all dependencies in $\mathcal{F}$.
## Multi-value Dependency

def. **Multi-value Dependency** (MVD). $Y$ is a multi-value dependency of $X$ if…
- for all tuples with the same values of $X$…
- …if we swapped all the $Y$ values of them…
- …those entries also exist in the database. then:

$$
X \twoheadrightarrow Y
$$

In colloquial terms, we can say that for every determined value of $X$, all tuples with values of $Y$ "associated" with that $X$ must exist too.
![[Database Design Theory-20231212190752302.png|428]]
def. **Trivial MVD**. Given relation $R(A,B,C)$:
- $A,B \twoheadrightarrow C$: Obvious. $LHS \cup RHS=attrs(R)$
- $A,B\twoheadrightarrow A$: Obvious. $LHS \supseteq RHS$

def. **4th Normal Form (4NF)**. if every MVD in relation $R$ is $X \twoheadrightarrow Y$ such that $X$ is always a superkey, then relation $R$ is in the 4th Normal Form. [Example](x-devonthink-item://D5791D8D-6615-438B-A881-0EF1E4B2B81C?page=22)

### Multivalue Dependency Rules
- Complementation: $X \twoheadrightarrow Y \implies X\twoheadrightarrow attrs(R)-X-Y$
- Augmentation: $X\twoheadrightarrow Y, B\subseteq A\implies XA\twoheadrightarrow YB$
- Transitivity: $X\twoheadrightarrow Y, Y\twoheadrightarrow Z \implies X \twoheadrightarrow Z-Y$
	- Automatically means $X\twoheadrightarrow Y, Y\twoheadrightarrow Z \implies X \twoheadrightarrow Z$
- Replication: $X\to Y \implies X \twoheadrightarrow Y$
- Coalescence: If 𝑋 ↠ 𝑌 and 𝑍 ⊆ 𝑌 and there is some 𝑊 disjoint from 𝑌 such that 𝑊 → 𝑍, then 𝑋 → 𝑍
## Chase

Proving theorems about chase. Example: ![[Database Design Theory.png|460]]
alg. **Tuple Generation**. To enforce $X \twoheadrightarrow Y$ on table $R$
1. For a determined $X=x_{i}$
	1. Enumerate all availble $Y={y_{1},y_{2},\dots,y_{?}}$
	2. Enumerate all available
		1. let $Q\coloneqq attr(R)-X-Y$
		2. Enumerate all availalbe $Q=q_{1},\dots,q_{?}$
	3. Are all combinations $Y\times Q$ available in the table?
		1. If not, add missing ones
2. For another determined $X=x_{2}$, repeat
3. Repeat for all $X=x_{1}\dots x_{?}$

alg. **Chase**. To prove $X \twoheadrightarrow Y$…
1. Initialization: add _two_ tuples $(x,y_{1},\dots),(x,y_{2},\dots)$ to the initial table
2. For each MVD (order doesn't matter):
	1. Tuple Generation: see above
3. For each FD (order doesn't matter):
	1. You may infer equalities, e.g. $e_{1}=e_{2}$
4. Does $X\twoheadrightarrow Y$ fully available? (=$Y\times \text{Remaining Attrs}$ all in table)?
	1. Yes → proven
	2. No → disproven (counterexample)
