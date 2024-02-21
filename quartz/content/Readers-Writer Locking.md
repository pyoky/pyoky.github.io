---
aliases: []
tags:
  - Computing/Algorithms
---
Solution to concurrency control problem.
1. There are two locks: read lock and write lock
2. Only those with a read lock can read, and write lock can write
3. There must always be either
	1. Many reader locks, no writer lock
	2. One writer lock, no reader lock
