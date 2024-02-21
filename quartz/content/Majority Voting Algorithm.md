---
aliases:
  - Boyer-Moore Voting Algorithm
tags:
  - Computing/Algorithms
---
From [[CS330 HW03]]

**Problem**. Call an array _good_ if more than half of its elements are the same. The domain from which the elements are taken is not necessarily ordered like integers so one cannot make comparisons like "Is `A[i]` > `A[j]`?" or sort the array, but one can check whether two elements are the same in O(1) time.

**Idea**: a majority element must be majority in either of the two halves of an array.

**Algorithm**:

```python
# array to check
A[1..n]

function Count(l, r, elem)
	# base case
	if l = r
		return 1

	# divide array into two, and count there
	m = ceiling((l+r)*0.5)
	l_count = PCount(l, m, elem)
	r_count = PCount(m+1, r, elem)

	# return the sum of left and right counts
	return l_count + r_count

function MajorityElem(l,r)
	# base case
	if l = r
		return A[l] 

	# check left, right half majority
	m = ceiling((l+r)*0.5)
	left_majority = MajorityElem(l, m)
	right_majority = MajorityElem(m+1, r)

	## check consensus

	# check no consensus first; if one is null return the non-null
	if left_majority == NULL and right_majority != NULL:
		return right_majority
	if left_majority != NULL and right_majority == NULL:
		return left_majority

	# there cannot be a both no consensus case

	# consensus agrees
	if left_majority == right_majority:
		return left_majority
	
	# consensus disagrees
	else if left_majority != right_majority:

		# count the majority
		left_count = Count(l, r, left_majority)
		right_count = Count(l, r, right_majority)
		
		# if tied, no consensus
		if left_count == right_count
			return NULL
		
		# winner exists, return the winner
		return left_count > right_count ? left_majority : right_majority
		
```

- `Count` function: $T(n)\leq 2T\left(\frac{n}{2} \right)+O(1)=O(n)$
- `MajorityElement` function: $T(n)\leq 2T\left(\frac{n}{2} \right)+2\cdot O(n)$
	- First term: recursive calls
	- Second term: calls `Count`
	- Solution: $T(n)=O(n\log n)$ (same recurrence relation as mergesort)
- Correctness (Brief argument):
	- Base case: in $n=1$ the element is majority element
	- IH: Assume `MajorityElement(k/2)` is correct.
	- IS:
		1. If one of them has no majority but the other ones does, the one with majority must be the true majority because of an element exists in more than half of the total array it must be that in one of the halves it will be the majority.
		2. If both halves have a majority, then the one that has more counts in the total array wins
		3. There cannot be a both halves no-majority case as explained in (1)
