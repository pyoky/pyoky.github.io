---
aliases:
  - Tournament Tree
  - Heap
tags:
  - Computing/Data-Structures
---

## Time Complexity

| Operation | find-max | delete-max | insert | increase-key | Merge |
| --- | --- | --- | --- | --- | --- |
| [Binary-Heap](https://www.wikiwand.com/en/Binary_heap "Binary heap") |  $\Theta(1)$ | $\Theta(\log n)$| $O(\log n)$ | $O(\log n)$ |  $\Theta(n)$ |
| Fibbonacci Heap | $\Theta(1)$ | $O(\log n)$ | $\Theta(1)$ | $\Theta(1)$ |  $\Theta(1)$ |

## Tournament Tree

![[Tournament Tree Max Item.png|380]]

- Getting the largest item is $O(n)$ which is same as the naive approach but…
- Getting the next-largest element after having built the tree is $O(\log n)$ time
	- Getting the next-$k$ largest elements is $O(k \log n)$ time
