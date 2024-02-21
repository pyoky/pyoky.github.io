---
aliases: []
tags:
  - Computing/Data-Science
---
## Constraint Checking

### Schema Declaration

```postgresql
CREATE TABLE User(
	uid INTEGER NOT NULL PRIMARY KEY, -- primary key
	age INTEGER NOT NULL UNIQUE -- not a key, but is unique
		    CHECK(age IS NULL OR age > 0), -- constriant
);

CREATE TABLE Group(
	gid CHAR(10) NOT NULL PRIMARY KEY,
	name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE Member (
	uid INTEGER NOT NULL REFERENCES Group(uid), -- foreign key
	gid CHAR(10) NOT NULL, 
	PRIMARY KEY(uid, gid) -- another way to write key
	FOREIGN KEY(gid) REFERENCES Group(gid) -- anoter foreign key
);
```

- When constraint check fails during a query, will reject (maybe cascade, or set null)
- Deferred constraint checking: constraint check only happens for a full declaration or _transaction_
- `{postgresql}CHECK` will accept `NULL` values even if not clearly specified
### Assertions

```postgresql
CREATE ASSERTION assertion_name CHECK condition
```
