---
aliases: []
tags:
  - Computing/Algorithms
---
[Maxima of a point set - Wikiwand](https://www.wikiwand.com/en/Maxima_of_a_point_set)

**Problem**. Let $P = (x1,y1),(x2,y2),…,(xn,yn)$ be a set of n points in the two-dimensional Euclidean plane. A point $(xi,yi)$ dominates another point $(xj,yj)$ if $xi > xj \text{ and } yi ≥ yj \text{ or } xi ≥ xj \text{ and } yi > yj$ (that is, if it is up and to the right). A point is maximal if it is not dominated by any other point.

Idea:

```python
# A[(int, int)] is the structure of the array

function FindMaximal()
	max_y = -Infinity
	
	
	# Sort the points in decreasing order by x-coordinate
	ReverseMergeSort(A[])
	max_y = A[0]
	result = [A[0]]
	
	# traverse in reverse x direction (right to left)
	for p in A
		# if y is bigger than anything seen before it's maximal
		if p.y > max_y then
			result.append(p)
			max_y = p.y
			
	return result
```

- `ReverseMergeSort` $O(n\log n)$
- `FindMaximal` $T(n)=O(n)+O(n\log n)={\color{red}O(n\log n)}$
- Correctness (Brief argument):
	- The rightmost element must be the maximal element
	- If the current element has a higher y value than any other element on the right side of it, it must be a maximum
	- If the current element has a lower y value than another point on the right of it, it is dominated by that point and thus cannot be a maximum
