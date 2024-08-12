---
aliases: []
tags:
  - Math/Probability
---

See also: [[Conditional Distribution]]

def. **Conditional Probability.** The probability of event A given that event B has occurred is:
$$
P(A|B) := \frac{P(A\cap B
)}{P(B)}
$$
- If $\Omega$’s elements are all equally likely: $P(A|B)=\frac{\#(A\cap B)}{\#B}$
- Multiplication Rule: $P(A\cap B)=P(A|B)\cdot P(B) \\[1em]=P(B|A)\cdot P(A)$
- Compliment Rule: $P(A|B)=1-P(A^C|B)$

thm. **Chained Conditional Probability**. For three events $A,B,C$:
$$
P(ABC) = P(A)\cdot \frac{P(AB)}{P(A)}\cdot \frac{P(ABC)}{P(AB)}\\[1em]=P(A)\cdot P(B|A) \cdot P(C|AB)
$$
def. **Bayes’ Theorem.** For events A, B:

$$
P(B|A)=\frac{P(A|B) \cdot P(B)}{P(A)} \\[1em] \Leftrightarrow P(B|A)P(A)=P(A|B)P(B)
$$

**Visualization.**
![[無題 2.svg|473]]
