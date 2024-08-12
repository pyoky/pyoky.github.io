---
aliases:
  - Asymptotic Analysis
tags:
  - Computing/Algorithms
---

Assumptions:
- RAM is constant time access
- Multiplication, addition, etc. are constant time
- Constant time operations are $O(1)$
- We concern ourselves with **asymptotic behavior**, i.e. as $n\to \infty$

Recall there are only two models of computation
1. Time complexity of loops: The time complexity of a loop is proportional to the number of iterations multiplied by the time complexity of the code inside the loop.
2. Time complexity of recursion: The time complexity of a recursive function can be analyzed using a [[Recurrence Relation]], which expresses the time complexity of the function in terms of its input size and the time complexity of its subproblems.

## Rules of Computing Complexity
1. **Rule of sum:** If an algorithm performs two **precedural operations**, and the total time taken by each operation is proportional to the size of the input n, then the time complexity is $O(f(n) + g(n))$, where $f(n)$ and $g(n)$ are the time complexities of the two operations.
2. **Rule of product**: If an algorithm performs **two nested operations**, and the time taken by the inner operation is proportional to the size of the input n, and the outer operation is performed n times, then the time complexity is $O(f(n) * g(n))$, where f(n) is the time complexity of the outer operation and g(n) is the time complexity of the inner operation.
3. Big O notation **ignores constant factors**: When calculating the time complexity of an algorithm, we can ignore constant factors, such as the time taken by basic arithmetic operations, since they do not affect the overall growth rate of the function.
4. Big O notation **ignores lower-order terms**: When calculating the time complexity of an algorithm, we can ignore lower-order terms, such as constants or logarithmic terms, since they become insignificant as n grows larger.

### Notation
Complexity is most often denoted in poly-logarithmic time:

$$
O(n^k \log^j n)
$$

Types of Complexity Analysis
- Best case analysis
- Worst case analysis
- Average case analysis
- Amortized Analysis
