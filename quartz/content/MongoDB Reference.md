---
aliases: []
tags:
  - Computing/Data-Science
---
### All You Need is…

```js
{json}db.bib.find({ title:/[dD]atabase/, price:{$lt:50} })
```

- Regex enclosed in `/regex/`
- the argument for find is
- Syntax error: NoSQL queries will return none. SQL will return error
- MongoDB (NoSQL!)
	- Schema: $\text{Document} \subset \text{Collection} \subset \text{Database}$
		- document is a single json object (with `_id` as unique identifier in collection)

### If You want more…
- `{json}mydb.mycollection.find()` ← all documents
- **Selection** in `{js}find(…)`
	- `{js}find({ title: "databases" })` ← accepts JSON.
	- string pattern matching is in [[Regular Expressions]]. `{js}title: /[dD]atabase/`
	- multiple patterns: $\text{and}$ operation by default.
		- → but JSON must have unique keys. `{price:…, price:…}` doesn't work (silent error)
		- alternative: `$and: […, …]`
	- when there arrays: an $\exists$ operation.
	- `{js}$elemMatch: { title: /Section/ }` ← performs match per array element
	- `{js}"arr.0": "match"` ← index matching for array
	- built-in functions
		- `{$lt:…}`
		- `{$and:[…, …]}`
- **Projection** in `{js}find(…, { _id: false, attr1: true, …})`
- **Sort** by `{js}find().sort({ ISBN: 1 })`
	- `1` is ascending (0 → $\infty$, a → z)
	- `-1` is descending

### Misc Facts
- Query strings are valid JSON objects
- print it to console:`{js}printjson(db.collections.find().toArray())`
### Even More: Aggregation Pipeline
- Each step of the pipeline transforms the json object in some way.
- Aggregation steps can include:
	- Selection: `{js}$match`
	- Project: `{js}$project`
	- Sort: `{js}$sort`
	- `{js}$addFields`
	- `{js}$unwind`
	- `{js}$lookup`
	- `{js}$group`

![[Screenshot 2023-10-30 at 21.11.57.png]]
