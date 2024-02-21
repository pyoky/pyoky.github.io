---
aliases: []
tags:
  - Computing/Algorithms
---
Q. Set Cover. We have a universe set $U$ and a bunch of sets $S_{1},\dots,S_{n}$ in the universe. (It is guaranteed that the union of all these sets will cover $U$). I want to cover all elements of the universe. Which sets should I choose do do this minimally?
- e.g. How many classes to visit to see all Duke students?

alg. Approximate Set Cover.
1. Choose the largest available set $S_{i}$
2. Remove elements from that set from the universe
3. Repeat until no element is left.
