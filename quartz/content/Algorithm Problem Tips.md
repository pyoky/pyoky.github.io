---
aliases:
  - Coding Interview Tips
tags:
  - Computing/Algorithms
  - Computing/Data-Structures
  - Meta-Learning
---

## During Practice

> **There are only two ways to store data structures: as arrays (sequential storage) or as linked lists (linked storage)**.

> First of all, it should be clear that **data structures are tools, and algorithms are methods to solve specific problems with appropriate tools**.

1. Use a plain-text editor as [[Scratchpad]]
2. Record new techniques/algorithms
3. It's okay to look at solutions [[Problem Sets|after a certain period of trying]].
4. Use syntactic sugar & libraries. Python [[Python Common Operations|has lots]].
5. Comment **above** every line while coding
## During Testing

1. Brute Force → Better Data Structures/Algorithms → Even better time complexity
	- Always ask: can reduce [[Time Complexity]] even further?
		- Exponential is never good. Polynomial is not enough. Linear time!
	- [[Priority Queue]] / [[Hash Table|Hashmap]] / [[Dynamic Programming]] / [[Sliding Window Technique]]
	- Try thinking: **What property doesn't change? What variable is constant?**
	- Try thinking: **Invert the search; find the contrapositive**
2. Are you `{python}return`ing?
3. Edge cases
	- infinite loops are probably not it
	- ⇒ make the `while` loops conditioned on index boundaries
4. Test the program yourself on a text editor
5. Try to defeat the problem (find very weird test inputs)
