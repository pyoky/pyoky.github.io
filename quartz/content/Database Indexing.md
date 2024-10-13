---
aliases: []
tags:
  - Computing/Data-Science
---
> [!warning] Every trip to the disk is a trip to pluto.
## Sequential Index
- Can be dense or sparse
	- **Primary Index:** Key indices are often sparse, because the rows are ordered using the key index
	- **Secondary Index:** Index on other attributes are often dense b/c/ v.v.
- You can manually create indexes in SQL:
  `{postgresql}CREATE INDEX indexname ON tablename(columnname)`
- **Multi-column index:** Index $(A,B)$ on $R(A,B,C)$ has keys that have $A,B$ concatenated and sorted together.
	- See: [sql server - what does a B-tree index on more than 1 column look like? - Stack Overflow](https://stackoverflow.com/a/1648252)
	- Quote: "With most implementations, the _key is simply a longer key that includes all of the key values, with a separator._ No magic there;-). In your example the key values could look something like:`"123499|John Doe|Conway, NH"`,`"32144|Bill Gates| Seattle, WA"`

## Index Sequential Access Method (ISAM)

- Lookup: ![[スクリーンショット 2023-11-26 18.58.01.png|400]]
- Insert / Delete: ![[スクリーンショット 2023-11-26 18.58.16.png|450]]
## B+ Trees

- Architectural Improvement on ISAM
	- Each block can fan-out a specific amount $n$
	- Each block containes $n-1$ entries to indicate ranges
	- Example: ![[スクリーンショット 2023-11-26 18.59.17.png|400]]
- Leaves are sequential → Range queries are possible: ![[スクリーンショット 2023-11-26 19.01.36.png|450]]
- Guaranteed to be well-balanced (=all nodes are at least half-full)
	- Guaranteed by recursive _node splitting_ (on insert) and recursive _node coalescing_ or _entry stealing_ (on delete)
	- Example: ![[スクリーンショット 2023-11-26 19.01.58.png|500]]
- Performance: access time is $O(\text{height})=O(\log_{\text{fanout}}\text{\#Tuples})$
	- → You can fit this in memory (4-level B+ Trees are often good enough)
	- …recall you also need to node-split of node-coalesce sometimes too
