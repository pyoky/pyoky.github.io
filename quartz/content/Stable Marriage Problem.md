---
aliases:
  - Partitioned Matching
tags:
  - Computing/Algorithms
  - Economics/Game-Theory
---

def. **Stable Marriage Problem.** Given equal number of heterosexual men and women, where each person has ranked all members of the opposite sex in order of preference, how can we marry the men and women together such that there are _no_ non-married pair $(m,w)$ who would both marry each other than their current partners (=in a unstable marriage)?

_Examples._
- Resident—hospital matching
- high school—student matching

def. **Gale–Shapely Stable Matching Algorithm (GSSMA)** (=propose-accept algorithm) ^252c4c
- Every day…
    - Each man who isn't engaged proposes to their top women that didn't reject them before
    - Every women who gets proposed to by $m_{1},m_{2},\dots$
        - …if they're already engaged to some $m_{0}$: accept $\text{max}[m_{0},\dots]$, reject everybody else.
        - …if they're not engaged to some $m_{0}$: accept $\text{max}[m_{1},\dots]$, reject everybody else
- Repeat until completes

thm. **(GS always terminates at full matching)**
_Lemma_. If woman $w$ rejects man $m$, in all future scenarios $w$ is engaged to $m'$ who she likes better than $m$.
_Proof by Contradiction_. Suppose there is a man $m$ who is not matched; i.e. $m$ is rejected by everybody.
- By the lemma, all women are engaged to somebody better than $m$.
- But if all women are engaged, and there are equal number of men and women, $m$ cannot exist. <span style="float:right;">■</span>

thm. **(GS matching is stable)** 
*Proof* by contradiction. Assume there exists an unstable match $(m_{1},w_{2}),(m_{2},w_{1})$, but $w_{1} \succ_{m_{1}}w_{2}$ and $m_{1} \succ_{w_{1}}m_{2}$:
![[Stable Marriage Problem-20240415180128435.png|381]]
- $m_{1}$ must have proposed to $w_{1}$ and been rejected before proposing to $w_{2}$ by the structure of the algorithm
- By lemma above, $w_{1}$'s final fiancé, $m_{2}$, must have been preferable to $m_{1}$. But this is not true. This is a contradiction.<span style="float:right;">■</span>

def. **Valid Partner**. $w$ is a valid partner of $m$ if there exists any stable matching where $(m,w)$ is a match (doesn't have to be found by GS).

thm. **(Proposer wins in GS).** GS where men propose, men get the best valid partner possible. In other words all men $m$ with their set of valid partners $S_{m} \subseteq \text{Women}$, never get rejected by any women in $S_{m}$.
_Proof by Contradiction._ Assume there exists a valid rejection of a man's proposal by a woman. Consider the first timepoint when a man $m$ gets rejected by a valid partner $w$.
- $w$ must have rejected $m$ because she is already engaged with $m'$ who she prefers more. (‡)
- $w$ is engaged to man $m'$. $m'$'s most preferred partner in $S_{m}$ is $w$ by definition of this timepoint (†)
![[Pasted image 20240403154500.png]]
Now, consider a completely different stable match (not by GS). There must exist a stable matching where $(m,w)$ is a match because $w$ is a valid partner of $m$. In this matching, let $w'$ be $m'$'s match.
Now, $w'$ is not the most preferred valid partner $S_{m'}$ because $m'$ prefers $w$ the most, as we saw in (†). $w$ also is unsatisfied with $m$ because she prefers $m'$ more (‡). Therefore this is not a stable matching; this is a contradiction. <span style="float:right;">■</span>

*Remark.* Extensions of this stable matching problem is done in [[CS535 HW5]].