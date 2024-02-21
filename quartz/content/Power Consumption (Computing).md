---
aliases: []
tags:
  - Computing/Computer-Architecture
---

## 1.7. The Power Wall

Until recently power usage and clock rate have increased together. Recently limits were reached with cooling capacity, and thus processors cannot be designed consume more power. Power consumption is summarized as:

$$
\text{Power} \propto \frac{1}{2} \times \text{Capacitive Load} \times \text{Voltage}^2 \times \text{Frequency}
$$

- Capacitive load depends on each transistor
- _Note the voltage is squared_
- Frequncy is the CPU clock rate

### Misconceptions

> Computers at low utilization don’t always use little power

Power doesn’t really scale linearly with performance; even computers at idle use lots of power. e.g. Google’s servers use 33% of peak power at 10% utilization.

> Performance helps energy efficiency

Designing for [[Performance (Computing)|performance]] means the task takes less time, and thus total energy consumption decreases.

> Use all three performance metrics: _frequency, CPI, Instruction count_

e.g. **MIPS (million instructions per second)** is a _very bad_ metric for measuring performance. It’s defined as $\text{MIPS}=\frac{\text{Instruction count}}{\text{Execution time}\times 10^6}$. and is also equal to $\frac{\text{Clock rate}}{\text{CPI}\times 10^6}$. So MIPS will always _not_ take into consideration at least _one_ of the three performance metric, and thus can be very decieving.
