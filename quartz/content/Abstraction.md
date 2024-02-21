---
aliases: []
tags:
  - Computing/Computer-Architecture
---

## 1.2. 8 Great Ideas from Computer Science

1. [[Moore’s law]]
2. [[Abstraction]]
3. Optimize for the Common Case
4. Parallelism → thruput increase
5. [[Pipelining]] → thuput increase
6. [[Branching (Computer Science)|Prediction]]
7. Memory Heirarchy
8. Redundancy

[[Abstraction]]: Application Software > Systems Software > Hardware.

[[Abstraction]]: High Level Language > Assembly Language > Binary Machine Language

## Components of a Computer

Components of a Computer: **Input/Output, Memory, Datapath, Control.** Datapath & Control are sometimes combined as the CPU. Examples of I/O Devices: LCD displays (with _frame buffers_ as pixels), touchscreens, etc.

Memory is built from **DRAM** (Dynamic Random Access Memory) (↔ Sequential random access memory, which is old technology). Memory Heirarchy: Main Memory (DRAM) > Seconday Memory (magnetic disks, flash memory).

**[[Instruction Set]] Architecture** (=architecture) is the information developers need to develop a proper binary machine language program, including I/O, memory layout, etc. **ABI (Application Binary Interface)** is the combination of the instruction set and the OS interface.

- Transistor: a electric switch
- VISI (Very Large-Scale Integrated Circuit): ICs with millions and billions of trasnsistors
  ([[Moore’s law]] predicts the geometric increase in the number of transistors per area.)

**Manufacturing process of ICs**

Silcon Ingot ⇒ Wafers ⇒ (processing steps) ⇒ Patterned Wafers ⇒ Diced Wafers (Dies) ⇒ Packaged Dies (patterned wafers, diced wafers and packaged wafers are each tested.)

- Defects can occur in each testing process. **Yield** measures _the percentage of good dies from total # of dies on wafer._
- Cost of manufactoring, due to defects, is generally proportional to the _square_ of each die area. Which means it’s impractical to design very big dies.

## Parallelism

Improvement of response time fo CPUs began to slow around 2002. Since then cpu architects started to use _multicore processors_ to augment performance. But since programmers had to rewrite programs for them it was hard to adopt—due to the _overhead of communication & synchronization._

## 1.9. Real Stuff: Benchmarking the Intel Core I7

SPEC (System Performance Evaluation Cooperative) released standard **benmarks** for common programs. Types: integer benchmark / floating point benchmark. They give a score called a **SPECratio** per program which is calculated by: $\text{SPECratio} = \frac{\text{reference time}}{\text{execution time}}$ where _reference time_ is from a reference processor and _execution time_ is from the processor being benchmarked. The higher the better. Overall SPECratio of the CPU is a _geometric mean_ of all programs’ SPECratios.

SPEC also released a **SPECpower** power consumption benchmark. It measures average power consumption and `ssj_ops` (server side Java operations per second), at load increments from 10%, 20%, …, 100%. The final number given is:

$$
\text{overall ssj\_ops per watt} = \frac{\sum^{10}_{i=1}\text{ssj\_ops}_i}{\sum^{10}_{i=0}\text{power}_i}
$$
