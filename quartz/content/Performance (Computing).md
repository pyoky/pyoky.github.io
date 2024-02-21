---
aliases: []
tags:
  - Computing/Computer-Architecture
---

Perfomance measurement: **Execution Time** and **Throuput/Bandwidth.** (Decreasing execution time _always_ improves thruput) And intuitively _performance is inversly related to execution time:_ $\text{Performance} = \frac{1}{\text{Execution Time}}$.

## Measuring Performance

- Program Execution Time (is the sum of…)
  - **CPU Time** (e.g. 10 picoseconds)
    - User CPU Time
    - System CPU Time
  - I/O Time
- **Clock Cycle** (= tick, clocks, cycles) e.g. one tick on this CPU is 250 picoseconds.
- **Instruction Count:** Number of instructions in a program.

⇒ **Clock Per Instruction (CPI)** / IPC (Instructions Per Clock)

Thus

$$
\text{CPU Time (s)} = \text{\# of cycles} \times \text{Tick Time (s)} \\ \text{\# of cycles} = \text{\# of Instructions} \times \text{avg. CPI}
$$

And:

$$
\text{CPU Time (s)} = \frac{\text{\# of Instructions}\times\text{CPI}}{\text{Clock Rate (Hz)}}
$$

The Three Factors of Performance: Clock Rate / Instruction Count / CPI

```ad-summary
$$
\text{Performance}= \frac{\text{Seconds}}{\text{Program}}\\=\frac{\text{Instructions}}{\text{Program}}\times \frac{\text{Clock Cycles}}{\text{Instruction}}\times \frac{\text{Seconds}}{\text{Cycle}}\\\\
=\text{Instruction Count} \times \text{CPI} \times \text{Clock Rate}


$$

```

## List of Common Misconcpetions Performance

> Improving one aspect doesn’t improve overall performance porportionally

Amdahl’s Law:

$$
\text{Execution time}_\text{after improvment} = \frac{\text{Execution time}_\text{affected by improvement}}{\text{Amount of improvment}}\times \text{Execution time}_\text{after improvment}
$$

→Some perfomance targets are impossible with partial improvements. See example on p.50.
