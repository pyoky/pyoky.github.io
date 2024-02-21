---
aliases:
  - Relational Model
tags:
  - Computing/Data-Science
---
[(DevonThink) 2. Relational Algebra](x-devonthink-item://692D3480-F4FE-4F4C-AE9C-B416BDBC3469)

Mathematical formulation of operations on relational data.
- Made by E.F. Codd
- Equivalent to domain-independent relational calculus
	- Relational calculus is a specialization of first-order logic
- Isn't [[Turing Machine|Turing-complete]] because it lacks recursion.
	- But because of this, relational algebra is decidable
- High level and declarative (procedural implementation is left to [[Database Management System|DBMS]])
- Easy to optimize by the DBMS

## Definitions

|DBMS jargon|Common-sense name|
| --- |---|
|Relation|Table|
|Attribute|Column|
|Domain|Data type|
| Tuple|Row|

- A **row** is defined as a **tuple**
	- Duplicate rows are not allowed
	- A tuple is considered same if **all attributes are same.**
- **Schema**: the tuple of attribute names ($\approx$class)
- **Instance**: the instantiation of the schema ($\approx$object)
- **Key** (see below for formal definition):
	- e.g. `address(street_addr,city,state,zipcode)`
		- ⇒ `{street_addr,city,state}` is a key
			- ..but `{street_addr,state}` is not a key
		- ⇒ `{street_addr,zipcode` is also a key

def. **Superkey**. A set of attributes $K$ is a superkey of relation $R$ if there exists a dependency: 
$$K\to (\text{All other attributes of R})
$$

def. **Key**. A superkey $K$ is a key of relation $R$ if there is no other superkey with smaller number of attribute elements. (=_minimally_ identifies each tuple/row)

alg. Determining if a superkey is a key.
1. Reduce one element and see if the key is superkey.
2. If a reduction of one element doesn't yield a smaller superkey, we got it.
3. If it does, recurse.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Relational_database_terms.svg/2560px-Relational_database_terms.svg.png)
## Relational Operators

### Fundamental Operations

- Selection: $\sigma_{p} \cdot R$
	- "Give me the entries of relation $R$ that satisfies condition $p$"
- Projection: $\pi_{L}\cdot R$
	- "Give me the attribute $L$ for each entry of relation $R$"
	- Duplicates are filtered out
- Cross Product: $R \times S$
	- Same as cross product of normal sets.
	- ⇒ Every row of $R$ per every row of $S$
- Union: $R \cup S$
	- $R,S$ must have **identical schema**
	- All rows on $R,S$ combined
	- Duplicates are removed
- Difference: $R-S$
	- $R,S$ must have **identical schema**
	- Rows in $R$ that are not in $S$
- Renaming: $\rho_{S} \cdot R$
	- Rename attribute $S$ of relation $R$

### Derived Operators

- Join \[=Theta Join]: $\bowtie_{p}$
	- definition: $\sigma_{p} (R \times S)$
	- "Cross Product the relations, and then filter by condition $p$"
	- i.e. "Join the two databases so based on condition"
- Natural-Join: $\bowtie$
	- definition: $\pi_{L}(R \bowtie_{p}S)$
		- where $p$ pairs common attributes
		- where $L$ is the union of the attribute names
	- "Theta join, but the duplicate attribute is removed"
- Outer-Join
	- Left outer join: $R~⟕~S$ (leave null entries from $R$)
	- Right outer join: $R~⟖~S$ (leave null entries from $S$)
	- Full outer join: $R~⟗~S$ (leave null entries from $R,S$ both)
- Intersection: $R \cap S$
	- $R,S$ must have **identical schema**
		- defined as $R-(R-S) \equiv S-(S-R)$
- Symmetric Difference: $(R-S) \cup (S-R)$

### Monotonicity
(Vaguely related to: [[Monotonic Transformation]])

def. **Monotonic Operation**. If input adds more rows, does the output also only add more rows? i.e. $f$ is a monotone operator iff:

$$
R \subseteq R' \implies f(R) \subseteq f(R')
$$

- _Difference_ ($R-S$) is the only non-monotone operator among simple operators
	- Monotone for $R$ but not for $S$
- If an operation is not monotone, it must include the _difference_ operator.

### Expression Tree Notation
![[Screenshot 2023-09-05 at 15.13.16.png|500]]
- Simpler to use and understand
- Designed both bottom-up or top-down

## Properties of Relational Algebra

1. **Selection Properties**
   - Idempotent: $\sigma_A(R) = \sigma_A \sigma_A (R)$
   - Commutative: $\sigma_A \sigma_B (R) = \sigma_B \sigma_A (R)$
   - Conjunction: $\sigma_{A \land B}(R) = \sigma_A(\sigma_B(R)) = \sigma_B(\sigma_A(R))$
   - Disjunction: $\sigma_{A \lor B}(R) = \sigma_A(R) \cup \sigma_B(R)$
   - Breaking up: $\sigma_A(R \times P) = \sigma_{B \land C \land D}(R \times P) = \sigma_D(\sigma_B(R) \times \sigma_C(P))$
   - Distribution over Difference: $\sigma_A(R \setminus P) = \sigma_A(R) \setminus \sigma_A(P) = \sigma_A(R) \setminus P$
   - Distribution over Union: $\sigma_A(R \cup P) = \sigma_A(R) \cup \sigma_A(P)$
   - Distribution over Intersection: $\sigma_A(R \cap P) = \sigma_A(R) \cap \sigma_A(P) = \sigma_A(R) \cap P = R \cap \sigma_A(P)$

2. **Selection and Projection Commutativity**
   - $\pi_{a_1, \ldots, a_n}(\sigma_A(R)) = \sigma_A(\pi_{a_1, \ldots, a_n}(R))$ where fields in $A \subseteq \{a_1, \ldots, a_n\}$

3. **Projection Properties**
   - Idempotent: $\pi_{a_1, \ldots, a_n}(\pi_{b_1, \ldots, b_m}(R)) = \pi_{a_1, \ldots, a_n}(R)$ where $\{a_1, \ldots, a_n\} \subseteq \{b_1, \ldots, b_m\}$
   - Distributing on Union: $\pi_{a_1, \ldots, a_n}(R \cup P) = \pi_{a_1, \ldots, a_n}(R) \cup \pi_{a_1, \ldots, a_n}(P)$
   - ! Projection doesn't distribute along difference:
      - $\pi_A(\{ \langle A=a, B=b \rangle \} \setminus \{ \langle A=a, B=b' \rangle \}) = \{ \langle A=a \rangle \}$
      - $\pi_A(\{ \langle A=a, B=b \rangle \}) \setminus \pi_A(\{ \langle A=a, B=b' \rangle \}) = \emptyset$
   - ! Projectio doesn't distribute along intersection:
      - $\pi_A(\{ \langle A=a, B=b \rangle \} \cap \{ \langle A=a, B=b' \rangle \}) = \emptyset$
      - $\pi_A(\{ \langle A=a, B=b \rangle \}) \cap \pi_A(\{ \langle A=a, B=b' \rangle \}) = \{ \langle A=a \rangle \}$

4. **Rename Properties**
   - $\rho_{a/b}(\rho_{b/c}(R)) = \rho_{a/c}(R)$
   - $\rho_{a/b}(\rho_{c/d}(R)) = \rho_{c/d}(\rho_{a/b}(R))$
   - Distribution on Difference: $\rho_{a/b}(R \setminus P) = \rho_{a/b}(R) \setminus \rho_{a/b}(P)$
   - Distribution on Union: $\rho_{a/b}(R \cup P) = \rho_{a/b}(R) \cup \rho_{a/b}(P)$
   - Distribution on Intersection: $\rho_{a/b}(R \cap P) = \rho_{a/b}(R) \cap \rho_{a/b}(P)$

5. **Product and Union**
    - Cartesian Product and Union: $(A \times B) \cup (A \times C) = A \times (B \cup C)$
