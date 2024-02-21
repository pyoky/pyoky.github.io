---
aliases: []
tags:
  - Computing
---
- All rust string types use UTF-8
- `str` is a string literal. **You never use this**
	- Encoded into the program binary
- `&str` is a string slice
	- This is the borrowed typ
- `String` is a string class
	- It has length, size, etc. all the information
	- This is the **owned type**
