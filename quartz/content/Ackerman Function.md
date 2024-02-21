---
aliases: []
tags:
  - Computing/Algorithms
  - Math
---
def. Ackerman Function. The Ackerman function satisfies the following recurrence relations:
1. $A(k,n)=A(k-1,A(k,n-1))$
2. $A(k,1)=2$
3. $A(1,n)=2n$
- Example:
	- $A(2,n)=A(1,A(2,n-1))=\dots=A(1,A(1,\dots A(2,1)))=2^n$
	- $A(3,n)=2\uparrow n$
### Properties
- Grows really fast
- Appears in [[Limits of Math and Computing]]
