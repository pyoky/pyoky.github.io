---
aliases: 
tags:
  - Computing
---
Floating point instabilities in numpy[^1]

```python
np.finfo(np.float64).max
# 1.7976931348623157e+308, largest positive number

np.finfo(np.float64).tiny
# 2.2250738585072014e-308, smallest positive number at full precision

np.finfo(np.float64).smallest_subnormal
# 5e-324, smallest positive number

```

When we use these extremes, we get instabilities:

```python
np.finfo(np.float64).max * 2
# inf, overflow error

np.inf - np.inf
# nan, not a number error

np.finfo(np.float64).smallest_subnormal / 2
# 0.0, underflow error
```

[^1]: [Numerically Stable Softmax and Cross Entropy | Jay Mody](https://jaykmody.com/blog/stable-softmax/)