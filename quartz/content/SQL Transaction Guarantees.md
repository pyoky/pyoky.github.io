---
aliases: 
tags:
  - Computing/Data-Science
  - Computing/Algorithms
---

SQL Transactions must be: _ACID_
- _Atomic_: Done or not done. [[Atomic]]
- _Consistent_: Don't do partial writes
- _Isolated_: Transaction Serializability:= transactions should seem like they are executed in isolation
- _Durable_: Crashes should be recoverable

## Isolation

### Concepts
- **Serial Schedule**: execute transactions in order. Don't interleave anything.
- Conflicting Operations: two transactions conflict if any of the operations they have on _same data_ conflict iff _one of the operations is a write operation_
	- _Dirty Write:_ $T_{1}.r(A)$ → $T_{2}.w(A)$
	- _Dirty Read:_ $T_{1}.w(A)$ → $T_{2}.r(A)$
	- & Two transactions are $T_{1},T_{2}$ is _conflict-serializable_ iff they have conflicts, but we can interleave some operations but still seems like it's a _serial schedule._ `SEREALIZABLE` guarantee above is equivalent to this.
- Conflicting Transactions:
	- See [Isolation (database systems) - Wikiwand](https://www.wikiwand.com/en/Isolation_(database_systems))
	- _Non-repeatable Reads:_ $T_{1}$ reads $X$→ $T_{2}$ writes $X$ and commits → $T_{1}$ reads $X$ again (different value!)
	- _Phantom Reads:_ $T_{1}$ gets range → $T_{2}$ inserts between this range and commits → $T_{1}$ gets same range (different value!)
- **Precedence graph**: a schedule with no cycles in the precedence graph (=graph is [[Directed Acyclical Graph|DAG]]) is _conflict-serializable_
	- A path in an acyclic precedence graph is a conflict-serializable schedule
	- Example: ![[SQL Transaction Guarantees-20231212173800567.png|414]]
### Levels of Isolation Guarantees
- **Read Uncommitted:** lock & release immediately
- **Read Committed:** don't release write locks until commit
- **Repeatable Reads:** long duration locks
- **Serializable:** long duration locks on ranges

![[SQL Transaction Guarantees-20231215215034322.png|571]]
### Serializable Guarantee
Implemented thru **Strict 2-phase locking (S2PL).** Rules:
1. **One writer, multiple readers**: [[Readers-Writer Locking]]
2. **2-Phase Locking**: For each transaction, you must lock everything first (=locking phase) then unlock everything together (=unlock phase): ![[SQL Transaction Guarantees-20231212174449166.png|435]]
3. **Strict Locking**: Release _write-locks_ (=exclusive-locks) only at commit or abort time
	1. Guaranteed recoverable (no cascading rollbacks)
	2. Example:![enter image description here|200](https://i.stack.imgur.com/UcCqw.png)
4. **Rigorous (=Strong) Locking:** Release all locks only at commit or abort time.
	1. Prevents Deadlocks
	2. Also Recoverable.
	3. Example:![[SQL Transaction Guarantees-20231215210218732.png|200]]

## Recovery

Computation Model: ![[SQL Transaction Guarantees-20231212174650021.png|493]]

### Naive Recovery
- _Force_: on commit, ("force") dirty flush to disk
- _No Steal_: don't ("stealthily") flush before commiting
### Smarter: Undo/Redo Logging
1. log start of transaction
2. For each write/delete, log the old and new values
3. On commit, write all logs to disk
Properties
4. Write-ahead logging: before disk flush, log must be flushed first
5. _No force_: commit even without flushing
6. _Steal_: flush to disk anytime (just log it!)
![[SQL Transaction Guarantees-20231212180023634.png|512]]

### Fuzzy Checkpointing

- Log begin checkpointing and log open transactions
	- `Start Checkpoint CHK1, Open transactions: S,T`
- flush all current transactions (=transactions at "begin" point) at leisure
- Log finish checkpointing (and pointer for convenience)
	- `Finish Checkpoint CHK1. Started at <pointer>

Recovery
1. **Analyze & Redo Phase**
	1. Find last completed checkpoint `Finished Checkpoint CHK1…`
	2. Go to the start of that checkpoint `Start Checkpoint CHK1, Open: S,T…`
	3. Analyze open transactions at time of crash $U=\{ S,T \}$
		1. ! Start with checkpoint's open transactions
		2. When you encounter close transactions `Close S`, remove from $U=\{ \cancel{ S },T..,U \}$
		3. When you encounter new open transactions `Begin T`, add that to $U=\{ S,T..,\underbrace{ U }_{ added } \}$
	4. All operations between `Start Checkpoint…` and end of log is replayed
2. **Undo Phase**
	1. From the last log item until whenever:
		1. For each open transaction at time of crash $T \in U$
			1. Undo all of its operations in reverse order…
			2. Until you reach `Begin T`
	2. Stop when $U$ is exhausted

### Recoverability
For multiple transactions to be recoverable:
1. T1 writes → T2 reads, then must T1 commits → T2 commits
2. T1 writes → T2 writes doesn't even matter

Ed discussion:

![[SQL Transaction Guarantees-20231213143037605.png]]
