---
aliases: []
tags:
  - Computing/Algorithms
---
Terminology
- $T_{p}(n)$: **span**; time taken for $p$-processes with input size $n$
	- You may choose $p=\infty$ i.e. $T_{\infty}(n)$ to analyze if unlimited parallelism was possible.
- $W_{p}(n)$: **work**; total time by all individual process; $W_{p}(n)\leq p\cdot T_{p}(n)$
- **speedup**: speedup factor compared to a single-process algorithm
- `spawn`: start a new process
- `sync`: wait until all processes are finished

Parallel algorithms…
- For [[Memory Access Control]] we will concern ourselves with **concurrent read & exclusive write** model of computation
- are easy to make from recursive algorithms.

alg. **PSum**. Normal algorithm is $O(n)$. Following is a parallel algorithm:

```pseudo
function psum(l, r)
	if l=r
		return A[l]
	spawn ls = psum(l, m)
	spawn rs = psum(m+1, r)
	sync
	return ls + rs
```

- Span: $T_{\infty}(n)\leq T\left(\frac{n}{2} \right)+1=O(\log n)$
- Parallel algorithm recursion tree: ![[Parallel Algorithm.png|460]]
	- depth is $\log n$, each takes constant time ⇒ $T_{\infty}(n)=O(\log n)$
- …if number of processors are limited to $p$, then: ![[Parallel Algorithm-1.png|460]]
	- $T_{p}(n)=O\left(\frac{n}{p}+\log p \right)$ where $\frac{n}{p}$ is the time for subproblems that cannot be parallelized (problem size is $\frac{n}{p}$) and $\log p$ is the parallel algorithm runtime.
	- $W_{p}(n)=O\left(p\left(\frac{n}{p}+\log p \right) \right)=O(n+p\log p)$
- …if number of processros $p=\frac{n}{\log n}$, then:
	- $T_{p}(n)=O(\log n)$
	- $W_{p}(n)=O(n)$
