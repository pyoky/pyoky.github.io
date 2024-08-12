---
aliases: 
tags:
  - Computing/Data-Science
  - Documentation/Code-Journal
  - "#Computing/Linguistics/SQL"
---
## Based on Relational Algebra

SQL is more readable than [[Relational Algebra]].
### SPJ Query

**Select-Project-Join (SPJ) query**. Is what almost all queries are. in the form of:

$$
\pi_{\text{attr1, attr2, ...}}(\sigma_{{\text{condition}}}(\text{relation1}\times \text{relation2} \times\dots))
$$

…is equivalent to…

```postgreSQL
SELECT attr1, attr2, ...
FROM relation1
WHERE condition
```

⇒ Think: you are checking `{postgresql} condition` on the whole cross product of `relation1, relation2, …`

Canonical form of a single query

```postgreSQL
SELECT ... AS ..., ... AS ...
FROM Relation_1 r1, Relation_2 r2 -- Rename the table.
WHERE ... AND ... -- Where condition
	(NOT) IN, (NOT) EXISTS, ALL, SOME (subtable) -- Nested Query
	-- exist doesn't need an attribute
ORDER BY ASC|DESC
```

### Joins, Unions and Differences

```postgreSQL

SELECT ...
FROM ...
-- Join query
[INNER, OUTER] [LEFT, RIGHT, FULL] JOIN 
-- INNER JOIN equivalent to JOIN
-- LEFT|RIGHT JOIN equivalent to LEFT|RIGHT OUTER JOIN
(subtable) T -- rename 
ON join_condition

-- optional WHERE clause
WHERE ...

-- Set/Bag operation query
(subtable) UNION, INTERSECT, EXCEPT (ALL) (subtable)

```

- table references scoping is like other languages
- subtables can be one tuple & one column (=scalar), where you can do a direct comparison: `{postgresql}WHERE age [>=<] (subtable)`
	- …but this will cause runtime error if the subtable has more than one value.
- `{postgresql}SELECT DISTINCT` to remove duplicates
- `{postgresql}EXCEPT/INTERSECT/UNION ALL` is a bag operation that removes by count; [[Screenshot 2023-10-13 at 15.18.16.png|Example data]]
### Conditionals

```postgresql
SELECT
FROM
'string literal' -- should be enclosed in single quotes
WHERE string LIKE '%foobar%'-- pattern matching strings

-- Null checking
WHERE attr IS NULL
WHERE attr IS NOT NULL
-- etc.
```

### Null Handling Rules.

> [!hint] Think of `NULL` and `Unknown` as a 0.5 value

1. Comparing `NULL` with any value will result in `UNKNOWN`
2. Values as numbers:
	- `TRUE`$=1$
	- `False`$=0$
	- `UNKNOWN`$=0.5$
3. Operations as functions:
	- `{postgresql}x AND y`$=min[x,y]$
	- `{postgresql}x OR y`$=max[x,y]$
	- `{postgresql}NOT x`$=1-x$

What about handling null results?

- Solution 1: `{postgresql}SELECT COALESCE(col,0.0)`
	- ⇒ if `{postgresql}col = NULL`, will return `0.0`
- Solution 2: `{postgresql}SELECT NULLIF(col,'n/a')`
	- ⇒ if `{postgresql}col = 'n/a'`, will return `NULL`
## SQL Extensions

### Aggregation

```postgresql
SELECT COUNT(*)|COUNT(DISTINCT col)|AVG(col)|MIN(col)|MAX(col)
FROM ...
WHERE ...;
```
- An aggregation in a HAVING clause applies only to the tuples of the group being tested.
- Any attribute of relations in the FROM clause may be aggregated in the HAVING clause, but only those attributes that are in the GROUP BY list may appear unaggregated in the HAVING clause (the same rule as for the SELECT clause).
### Grouping

```postgresql
SELECT aggr_func FROM [JOIN ON | UNION | ...] WHERE
-- Group By
GROUP BY col1, col2 -- will group if *both* columns are same
HAVING condition_on_group
```

- Compute Order:
	1. `{postgresql}GROUP BY`
	2. `{postgresql}HAVING
	3. `{postgresql}SELECT`
- `aggr_func` is computed for each group
	- e.g. `{postgreSQL}SELECT age, AVG(pop) FROM User GROUP BY age` computes the average popularity for each age.
	- e.g. `{postgresql} SELECT uid, MAX(pop) FROM User` is wrong ← aggregate function and column cannot be used together (which `uid`?)
	- e.g. `{postgresql}SELECT uid, age FROM User GROUP BY age` is wrong ← which `uid`?
``
### Variables

Two forms of "variables"
- Named Subqueries (will evaluate by macro expansion)
- Views (is a window into a table)
	- Provides Logical data independence

```postgreSQL
-- Named subqueries
WITH subtable_name AS (subquery)

-- Views
CREATE VIEW view_name AS (subquery)
DROP VIEW -- dropping a view
```

### Data Input/Output

```postgreSQL
INSERT INTO ... (subquery) ...
DELETE FROM ... [WHERE ...]
UPDATE ... SET ... [WHERE ...]
```

## Advanced Topics

- Transaction
	- Allows multiple queries to be treated as one (helps when making new tables with foreign key relations)
- Object-Relational Mapping
	- Convert between object-oriented language's object data into SQL-compatible tuples, and vice versa
- Casting
	- Convert between datatypes `{postgresql}CAST(num AS FLOAT)`

### Recursion
- You can define new subtables with recursion
	- `{postgresql}WITH RECURSIVE subtable AS (recursive_query)`
- SQL does fixed point recursion
	- …i.e. recurses until the table doesn't seem to change anymore
- Linear vs Non-linear recursion
	- Linear: a single recursive call
	- Non-linear: a tree-like recursion; multiple recursive calls
- Mutual Recursion
	- Two tables are defined upon each other
