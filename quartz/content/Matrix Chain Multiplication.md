---
aliases: []
tags:
  - Computing/Algorithms
---
Matrix Chain Multiplication. Given matricies $A_{0},\dots,A_{n-1}$ with dimensions $(m_{0} \times m_{1}),(m_{1} \times m_{2}),\dots,(m_{n-1}\times m_{n})$, which order should we multiply the matricies in order to minimize the number of scalar multiplications? [Description from course](x-devonthink-item://6D7EC82D-DD1D-4E23-809D-A340D58D65D6?page=24)

**Idea**:
- Search every subproblem but with [[Dynamic Programming]].
- for every chain of matricies, get the split with minimum multiplication required.
- Iterate for increasing `gap` (=chain length)
![[Matrix Chain Multiplication.png|600]]

![[Matrix Chain Multiplication-1.png|640]]
