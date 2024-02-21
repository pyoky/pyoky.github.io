---
aliases: []
tags:
  - Computing
  - Computing/Algorithms
---

- Initialize integer as positive or negative infinity: `{python} i: int = float('-inf'|'inf')`

## Collections

### Sets

- Set difference`{python} set(list1) - set(list2)`
	- $O(n)$
- Set lookup `{python}i in {1, 2, 3}`
	- ==Constant time $O(1)$ lookup==
### List
- List Sort `{python} list2 = sorted(list1)`
	- $O(n\log n)$
- Deduplication`{python} list1 = list(set(list1))`
	- $O(n)$
- Counter `{python}Counter("mississippi")`
	- returns `{python}{'i': 4, 's': 4, 'p': 2, 'm': 1}`
	- $O(n)$
- Accumulate`{python} accumulate(list1)`
	- $O(n)$
### Dictionary
- Default value for dictionary entries`{python}dictionary = collections.defaultdict(list|int)`
- Helps when you have a list of `dict`s, or accumulating a count in a dict.
