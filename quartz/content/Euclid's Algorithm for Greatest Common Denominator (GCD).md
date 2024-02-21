---
aliases:
  - GCD Algorithm
tags:
  - Computing/Algorithms
  - Math
---
## Algorithm

[Euclidean algorithm - Wikiwand](https://www.wikiwand.com/en/Euclidean_algorithm)
> The Euclidean algorithm is based on the principle that the greatest common divisor of two numbers does not change if the larger number is replaced by its difference with the smaller number.
>
> For example, 21 is the GCD of 252 and 105 (as 252 = 21 × 12 and 105 = 21 × 5), and the same number 21 is also the GCD of 105 and 252 − 105 = 147. Since this replacement reduces the larger of the two numbers, repeating this process gives successively smaller pairs of numbers until the two numbers become equal. When that occurs, they are the GCD of the original two numbers.

```python
def gcd(a, b):
	while b != 0:
		a, b = b, a % b
		# guaranteed a > b, 
		# because remainder is smaller than divisor
		# needs to be one-line because the new a and b musn't
		# interfere for the old a and b
	return a
```

> In this implementation, the algorithm iteratively calculates the remainder when dividing the larger number `a` by the smaller number `b`. It then updates `a` to be `b` and `b` to be the remainder. This process continues until `b` becomes zero, indicating that `a` is the GCD of the original two numbers.

> The implementation has a time complexity of O(log(min(a, b))) as it iteratively reduces the numbers by taking their remainders.

## Time Complexity

[Stack Overflow](https://stackoverflow.com/a/3981010 "Short permalink to this answer")
> So the number of iterations is linear in the number of input digits. For numbers that fit into cpu registers, it's reasonable to model the iterations as taking constant time and pretend that the _total_ running time of the gcd is linear.
>
> Of course, if you're dealing with big integers, you must account for the fact that the modulus operations within each iteration don't have a constant cost. Roughly speaking, the total asymptotic runtime is going to be n^2 times a polylogarithmic factor. [Something like](https://en.wikipedia.org/wiki/F%C3%BCrer%27s_algorithm) `n^2 lg(n) 2^O(log* n)`. The polylogarithmic factor can be avoided by instead using a [binary gcd](https://en.wikipedia.org/wiki/Binary_GCD_algorithm).
