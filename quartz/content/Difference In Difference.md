---
aliases: 
tags:
  - Math/Statistics
---
[[Fixed Effects Model for Panel Data]]

DiD analysis is a way of observing and doing statistics on natural experiments. It's called difference-in-difference because we're comparing the differences in the change between the control and treatment groups. The model is:
$$
Y_{it}=\beta_{0}+\beta_{1}\text{isTreated}+\beta_{2}\text{isAfter}+\beta_{3}\text{isTreated}\times \text{isAfter}+\epsilon_{it}
$$
where $\text{isTreated}$ and $\text{isAfter}$ each is a dummy variable. The regression will look something like this:
![[Difference In Difference-20240428151722279.png|537]]
$(a)$ illustrated when there is no difference-in-difference. $(b)$ illustrates when there is a difference-in-difference. $\beta_{3}$, the coefficient that measures additional effect when *there is treatment and is after treatment* is the important coefficient.

