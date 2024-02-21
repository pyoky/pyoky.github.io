---
aliases: []
tags:
  - Computing/Computer-Architecture
---

> In computing, a pipeline, also known as a data pipeline, is a set of data processing elements connected in series, where the output of one element is the input of the next one. The elements of a pipeline are often executed in parallel or in time-sliced fashion. Some amount of buffer storage is often inserted between elements.
>
> Computer-related pipelines include:
>
> Instruction pipelines, such as the classic RISC pipeline, which are used in central processing units (CPUs) and other microprocessors to allow overlapping execution of multiple instructions with the same circuitry. The circuitry is usually divided up into stages and each stage processes a specific part of one instruction at a time, passing the partial results to the next stage. Examples of stages are instruction decode, arithmetic/logic and register fetch. They are related to the technologies of superscalar execution, operand forwarding, speculative execution and out-of-order execution.
>
> Graphics pipelines, found in most graphics processing units (GPUs), which consist of multiple arithmetic units, or complete CPUs, that implement the various stages of common rendering operations (perspective projection, window clipping, color and light calculation, rendering, etc.).
>
> Software pipelines, which consist of a sequence of computing processes (commands, program runs, tasks, threads, procedures, etc.), conceptually executed in parallel, with the output stream of one process being automatically fed as the input stream of the next one. The Unix system call pipe is a classic example of this concept.
>
> HTTP **Pipelining**, the technique of issuing multiple HTTP requests through the same TCP connection, without waiting for the previous one to finish before issuing a new one.Some operating systems may provide UNIX-like syntax to string several program runs in a pipeline, but implement the latter as simple serial execution, rather than true pipelining—namely, by waiting for each program to finish before starting the next one.
>
> [Wikipedia](<https://en.wikipedia.org/wiki/Pipeline%20(computing)> )
