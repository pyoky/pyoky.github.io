---
aliases:
  - DBMS
tags:
  - Computing/Data-Science
---

DBMS must be able to…
1. Store data **persistently**.
2. Handle **query** of data by the user
3. **Update** data as requested

What do databases aim to be?
- Physical Data Independence
	- How data is physically stored is abstracted away by the DBMS
- Concurrency Control
	- Multiples accesses must be performant and conflict-free
- Recovery
	- Failures should be handled and recovered
- [[Performance (Computing)]]
	- Must be performant with lots of accesses
