---
uid: bbc05933-8ff8-41a0-b4f0-c1fa7fdca1a3
aliases: []
tags:
  - Computing/Data-Science
---

- Storage ranges from Fast & Small → Slow & Big ![[スクリーンショット 2023-11-26 18.36.50.png|250]]
- [(DevonThink) Numbers Every Programmer Should Know By Year](x-devonthink-item://B08EF54C-1D02-4C00-BB72-D609821BE701)
	- Idea: a trip to the next hierarchy is _orders of magnitude_ slower.

## Anatomy of a Hard Drive

- Parts of a mechanical hard drive: ![[スクリーンショット 2023-11-26 18.38.20.png|400]]
- ![[スクリーンショット 2023-11-26 18.38.57.png|350]]
- $\text{Access Time}=\text{Seek}+\text{Rotation}+\text{Transfer}$
- All data is transfered in blocks! (512B~4KB)
- Records (=Tuples) can be fixed length of dynamic length
	- BLOB fields: e.g. images. These link out to external locations

## Storing Many Tuples in One Block
- Often many tuples will fit in one block. There are multiple schemes to lay them out.
### N-ary Storage Model (NSM)
- Data stored from the beginning of the block
- Index stored at the end of the block
- Every update/delete operation will reorganize everything! → Use gaps inbetween records (=sparse block)
- Hard to cache, because queries will often only access a few columns
![[スクリーンショット 2023-11-26 18.43.06.png|450]]
### Partition Attributes Across (PAX)
- Cluster columns together
- Variable length columns will have index at the end
- Keep the fields together (=dense block)
![[スクリーンショット 2023-11-26 18.45.32.png]]
### Column Stores
- Store the whole table by columns
- e.g. Apache Parquet
