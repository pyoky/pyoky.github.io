---
aliases:
  - E/R Model
tags:
  - Computing/Data-Science
created: 2023-09-05T15:20
updated: 2023-09-10T18:31
---
> [!abstract]
> We're trying to model real-world data subject to real-world constraints. The **entity relationship model** is a simple method to do so.
> Design goals:
> - Redundancy is bad
> - Attributes **cannot** be lists!
> - Trade-off between capturing more constrainsts vs. simplicity
> 	- → Common Sense > capturing all constraints
> - Don't introduce nonexistent constraints

Components of an E/R Model
1. Entity—with attributes
	1. **Key** attributes are underlined
	2. ⇒ This is NOT like database keys, in the case that weak entities require **both its keys and its supporting entity's keys** to identify it uniquely.
2. Relationship—with attributes
	1. Relationship attributes are not the same as entity attributes: they cannot be duplicated.
	2. e.g. `StopsAt` cannot have multiple `time`s for each `Train`-`Station` pair: ![[Entity-Relationship Model-8.png|440]]

## Complex Relationships

[(DevonThink) 3. E/R Design](x-devonthink-item://48D1B0D6-FFE4-497C-B38B-F797B1B986E4)
### Multiplicity
- Many-to-Many: Most types of relations ![[Entity-Relationship Model.png|320]]
- Many-to-One
	- half-circle arrow: **exactly one** ![[Entity-Relationship Model-2.png|120]]
	- Normal arrow: **one or zero**![[Entity-Relationship Model-1.png|300]]
- One-to-One![[Entity-Relationship Model-5.png|340]]
### Roles in a Relationship
- if you're taking two items from the same entity, the roles need to be clarified. ![[Entity-Relationship Model-3.png|460]]
### N-ary Relationships
- one-to-one (=binary) relationships is not the norm.
- you _can_ break it up into many relationships…
	- …but it's hard and may require new relations, entities, etc.
- e.g. a `isMemberOf` relationship can have multiple members, but only (zero or) one initiator for a `group`—`member` pair
![[Entity-Relationship Model-4.png|360]]

### Weak Entity & Supporting Relationships (=Heirarchical relationships)
- more data is needed to uniquely identify the thing
- e.g. a room number in a building needs the building identification to uniquely identify it
![[Entity-Relationship Model-6.png|440]]
### ISA Relationship (Subclassing)
- literally "A is-a B" relationship
- Inherits the attributes (with the key), relationships
![[Entity-Relationship Model-7.png|260]]

## Translating into [[Relational Algebra|Relational Model]]

[(DevonThink) 4. E/R Translation](x-devonthink-item://1F5CF1D2-9FDD-4821-9214-3C24CED0FD1E)

1. Entity Set → Table. `Train`,`LocalTrain`, etc.
	- Attribute → Column of Table. `number`, `engineer`
	- Key attribute → Key `number`
2. Relationship → Table of keys (on both entities) and attributes if necessary.
3. Weak Entity Set → Table, but including all the keys up the hierarchy
	- `ExpressTrainStopsAtStation` includes keys of `ExpressTrains`
	- You need the keys of **all** supporting entities to uniquely identify it
4. IsA Relationship → Table, but we can choose how to translate it:
	1. _Entity-in-all-superclass-and-specific-class_
		- Scattered List
	2. _Entity-only-in-specific-class_
		- Scattered List
	3. _All-entities-in-one-table_
		- Google BigTable's approach
		- `NULL` when a subclass's attribute doesn't apply
		- Results in a **sparse table** (we have good ways to store this these days!)

> [!example] **Full example**
> ![[Entity-Relationship Model-9.png|540]]
