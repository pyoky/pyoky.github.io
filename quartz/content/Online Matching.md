---
aliases: 
tags:
  - Computing/Algorithms
  - Economics/Game-Theory
---
*Motivation.* Suppose you are Google. Many advertisers come to you and want to advertise on google searches by users. Now, users come it throughout the day, one by one, searching for whatever they want to search. You can show them one advertisement. How do you maximize the advertisement to show to the users?

![[Online Matching-20240417224443080.png|367]]

def. **Optimal Online Matching Algorithm.** The optimal algorithm is just one that knows in advance what all users will search, and thus simply finds a [[Matching Problems#^013ad5|maximum partition matching]].

## Whole Online Matching

def. Greedy Online Matching algorithm. When a new user from $R$ comes in and declares its edges, it simply matches to any valid advertiser $L$.
- This simply finds the maximal (not maximum) matching.
- This is in the worst case two times worse than optimal online matching. *Proof*:
    1. When a new edge $v$ comes available, $\text{ALG}$ matching it to the "wrong" vertex $u'$ will at most block two "correct matchings" (from optimal).
    2. Therefore $\frac{\text{ALG}}{\text{OPT}}\leq 2$ <span style="float:right;">■</span>
![[Online Matching-20240418144522181.png|471]]

## Fractional Online Matching

We may sometimes allow for fractional matchings, i.e. consider an edge "full" at weight $1$, but the weight can be anywhere from $[0,1]$. We still benchmark fractional online matching with the original optimal whole matching algorithm.

def. **Greedy Fractional Online Matching Algorithm.** let $r \in R$ encountering $n_{r}$ edges. For every unfilled edge, equally fill $\frac{1}{n_{r}}$ to each.
This algorithm is pretty bad. Consider the following worst case scenario:
![[Online Matching-20240418144841589.png|321]]
- Each set $A,B,C,D$ have $n$ verticies
- Appears in order: $c_{1},\dots,c_{n},d_{1},\dots,d_{n}$
- $\text{OPT}=2n$ which matches all of $A$ to $C$, and all of $B$ to $D$.
- For $\text{ALG}$:
    - consider the time when $c_{i}$ is matching:
        - equally gives $\frac{1}{n+1}$ to all of $b_{1}\dots b_{n}$s and $a_{i}$.
        - This happens for ever $c_{i}$, i.e. $n$ times
        - After the last vertex in $C$, total $n$ finishes matching, all of $b_{1}\dots b_{n}$ have filled $\frac{n}{n+1}$.
    - Now, each of $d_{i}$ only has $\frac{1}{n}$ of $b_{i}$ to match with.
    - Total fully matches $c_{i} \in C$, and $\frac{1}{n}$ of $d_{i} \in D$. Thus $\text{ALG}=n+\left( n \cdot \frac{1}{n} \right)=n+1$
- Thus $\frac{\text{ALG}}{\text{OPT}}= \frac{2n}{n+1}<2$. *Pretty bad.*
def. **Water-filling Algorithm.** The algorithm works like this: for every $r \in R$ that appears, it outputs water at a constant rate. Fill the vertices with least water first at equal rate:
![[Online Matching-20240418144005079.png|395]]
In the example above of the worst-case greedy algorithm, water-filing does a better job.
First consider $c_{i}$ filling $a_{i}$ and all of $b_{1}\dots b_{n}$.
- $b_{1}\dots b_{n}$ is already filled up to level $x$ (we know they are all filled up to equal amounts, because $B$ and $C$ are fully connected.) 
- $a_{i}$ is empty because it is only connected to $c_{i}$
- Total water output by $c_{i}$ is $1$.
- Total $n+1$ verticies.
- We know that water level will rise above $x$ for everybody (until some $y_{i}$) because $a_{i}$ can't hold that much
![[Online Matching-20240418151343300.png|340]]
Then, denoting the rate of water output by $c_{i}$ as $\frac{dx}{dt}$:
$$
\begin{align}
\underbrace{ x }_\text{ filled by $a_{i}$ }+\underbrace{ \frac{dx}{dt}(n+1) }_\text{ filled by all vertex }&=\underbrace{ 1 }_\text{ total water }\\

\frac{dx}{dt}&= \frac{1-x}{n+1}
\end{align}
$$
Then, let $y$ be the height of water on $b_{1}\dots b_{n}$ after $c_{1}\dots c_{n}$ are done filling. Summing this up for all $c_{1}\dots c_{n}$ from $x=0\dots y$ and $t=0\dots n$:
$$
\begin{align}
\int _{x=0}^{y} \frac{1}{1-x} \, dx &= \int _{t=0}^{n} \frac{1}{n+1}\, dx  \\
[-\ln(1-x) ]_{0}^{y}&=\frac{n+1}{n+1}=1 \\
\ln(1-y)  & = -1 \\
y  & = 1-\frac{1}{e}
\end{align}
$$
And then the remaining $\frac{1}{e}$ for each $b_{i}$ will be matched to $d_{i}$. Total matched is:
$$
\begin{align}
\text{ALG}&=\underbrace{ n }_\text{ by C }+ \underbrace{ n\left( \frac{1}{e} \right) }_\text{ by D } \\
 & =n\left( 1+\frac{1}{e} \right) \\ \\
\frac{\text{ALG}}{\text{OPT}}  & = \frac{n\left( 1+\frac{1}{e} \right)}{2n}=\frac{e+1}{2e}
\end{align}

$$
(Note that we still compare with whole matching optimum.)

def. Ranking Algorithm.

def. Bid Scaling Algorithm.
