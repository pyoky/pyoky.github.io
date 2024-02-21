---
aliases: []
tags:
  - Computing/Data-Science
---
Query language for [[Extensible Markup Language|XML]]

## XPath

- Consists of node (=element) and attribute
- uses `and, or` for conditionals (not `|, &`, etc.)
- `{xpath}/EMPS/EMP/PHONE[@type]` checks for the existence of an attribute
- `/bibliography/book/@ISBN` returns all attribute values (ISBNs)
- functions:
	- `{xquery}x+y,x–y,x*y,x div y,x mod y`
	- `{xquery}contains(a,b)`: a contains b
	- `{xquery}count($nodeset)`: number of child nodes in node set
	- `{xquery}position()`: n-th node
	- [[Regular Expressions]] matching `{xquery}matches($string, $regex)` e.g. `{xquery}matches($input, 'H.*o W.*d')`
- conditionals:
	- `{xquery}x=y` note that one equals is fine, `{xquery}x!=y`
	- `{xquery}x>y`, `{xquery}x < y`
	- `{xquery}and or not()` works. (but `&,|,!` does not!)
- Access parent node as `{xquery}child/..` without trailing backslash
- Accessing Attributes: `{xquery}data($person/@name)`
- Frequently used in conditions:
	- `{xquery}x + y`
	- `{xquery}x - y`
	- `{xquery}x * y`
	- `{xquery}x div y`
	- `{xquery}x mod y`
- functions
	- `{xquery}contains(x, y)`: true if string x contains string y
	- `{xquery}count(node-set)`: counts the number of nodes in node-set
	- `{xquery}position()`: returns the "context position" (roughly, the position of the current node in the node-set containing it)
	- `{xquery}last()`: returns the size of the node-set containing the current node
	- `{xquery}name()`: returns the tag name of the current element
	- `{xquery}sum()`: returns sum of all matches

## XQuery

Standard format:
```xquery
<result>{
	for $var in XPATH-QUERY (: Comments :)
	let $var2 ...
	where [condition]
	stable order by,
		$variable ascending,
		$variable descending
	return <elem>{xquery}</elem>
}</result>
```
### Sort
![[Screenshot 2023-10-26 at 18.25.29.png]]
### Conditionals
![[Screenshot 2023-10-26 at 18.29.38.png]]

### Axis Test
- `/`: shorthand for `child-or-self`
- `//`: shorthand for `descendant-or-self`
- `/..`: shorthand for `parent`
- `one of self`, `attribute`,
- `parent`, `child`, `ancestor`,† `ancestor-or-self`,† `descendant`, `descendant-or-self`,
- `following`, `following-sibling`, `preceding`,† `preceding-sibling`,†
- `namespace`
- †: These are **reverse axes** (=produce resulting node-sets in reverse document order)
- Use like: ![[Screenshot 2023-10-26 at 18.32.36.png|420]]
### Existential Conditions (Exists some…)
![[Screenshot 2023-10-26 at 18.44.12.png|440]]
### Date Operations

- Dates will be printed as `P dD T hH iM sS`
	- `P` just a P.
	- `d`: Number of Days. `D`: constant
	- `T`: constant
	- `h`: Number of Hours, `H`: constant
	- `i`: Number of Minutes, `M`: is constant
	- `s`: Number of Seconds `S`: is constant
- Dates can be
	- subtracted: `{xquery}xs:date("1933-06-22") - xs:date("2000-01-01")`
	- compared: `{xquery}xs:date("1933-06-22") >= xs:date("2000-01-01")`

<u>Date functions</u>

|   |   |   |
|---|---|---|
|year-from-dateTime|day-from-dateTime|minutes-from-dateTime|
|year-from-date|day-from-date|minutes-from-time|
|years-from-duration|minutes-from-duration|days-from-duration|
|month-from-dateTime|hours-from-dateTime|seconds-from-dateTime|
|month-from-date|hours-from-time|seconds-from-time|
|months-from-duration|hours-from-duration|seconds-from-duration|

## Tips and Tricks

![[Screenshot 2023-10-26 at 18.55.23.png]]

Naming elements using variables:
![[Screenshot 2023-10-26 at 19.18.18.png]]
