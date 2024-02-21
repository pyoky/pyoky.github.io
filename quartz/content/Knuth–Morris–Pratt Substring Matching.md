---
aliases:
  - KMP Substring Search
tags:
  - Computing/Algorithms
---

You can match text of length `m` with pattern of length `n` in `O(m+n)`. (Brute force matching takes `O(mn)`).

- Leetcode Problem: [Leetcode 28. Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)
- Explanation Video: [Knuth–Morris–Pratt(KMP) Pattern Matching](https://www.youtube.com/watch?v=GTJr8OvyEVQ)

Given two strings `needle` and `haystack`, return the index of the first occurrence of `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.
## 1. Build Prefix-suffix Table

e.g.1:

```
pattern: A B A B C  
table:   0 0 1 2 0
meaning: e.g.  |--there is a prefix of length 2
```

e.g.2:

```
index:   0 1 2 3 4 5 6 7 8 
pattern: a a b a a b a a a
table:   0 1 0 1 2 3 4 5 2
meaning e.g.         |--there is a prefix of length 4
```

## 2. Compare Text with Pattern

```
text:    a b x a b c a b c a b y
---------------**********^---------
						 |- y != c, search from index 2 
pattern: a b c a b y
index    0 1 2 3 4 5
table:   0 0 0 1 2 0
```

Time to build table: `O(n)`
Time to search text: `O(m)`
Total Time: `O(m+n)`
