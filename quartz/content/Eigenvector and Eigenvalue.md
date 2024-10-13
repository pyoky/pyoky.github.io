---
aliases:
  - 고유벡터
tags:
  - Math/Linear-Algebra
origins:
  - "[[CS 675 Deep Learning]]"
  - https://www.youtube.com/watch?v=PFDu9oVAE-g
---
- Motivation 1. Say a $n\times n$ matrix describes a 3-D rotation. Then what is the axis of rotation?
- Motivation 2. An $n\times n$ matrix describes a linear transformation, but looking at each column only shows you the action of the basis vectors. What is a better way to characterize this linear transformation?

def. **Eigenvector and eigenvalue.** For matrix $A$, if applying $A \vec{v}$ simply scales $\vec{v}$ into say, $\overbrace{ \lambda }^\text{ scalar }\vec{v}$, then $\vec{v}$ is an eigenvector of matrix $A$. In other words:
$$
A \overbrace{ \vec{v} }^\text{ also eigenvector }=\underbrace{ \lambda }_\text{ eigenvalue }  \underbrace{ \vec{v} }_\text{ eigenvector }
$$

thm. *For diagonal matrix $D$, all basis vectors are eigenvectors.*

