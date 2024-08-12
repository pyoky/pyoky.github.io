---
aliases: 
tags:
  - Computing/Linguistics/Python
---
In numpy, dimensions of a tensor is called the **axis**.
- Tensors are equivalent to lists of lists.
    - The higher the axis, the more "inner" list we are talking about.
    - Each axis's value determines the number or elements that array has
- A tensor of shape (=dimension) `(a,b,c)` has `a` rows (axis 0), `b` columns (axis 1), and `c` of axis 2.
    - For example, a tensor with shape `(10,2,20)`
![[Numpy Axis-20240516151443779.png|496]]
### Tensor Multiplication

When matrix `A` with shape `(a1,a2)` is multiplied by tensor `B` of shape `(b1,b2)`:
- `a2` must be equal to `b1`
- resulting matrix will have shape `(a1,b2)`. (in [[Linear Algebra]] terms, it is a composite linear transformation of both $A$ and $B$).
When you have multiple matrix multiplications you can combine that into one.
