---
aliases: 
tags:
  - Computing/Linguistics/Rust
---
- All rust string types use UTF-8
- `str` is a string literal. **You never use this**
	- Encoded into the program executable (in the `.text` portion of the [[Executable and Linkable Format|ELF]] binary)
- `&str` is a string slice
	- This is the borrowed type. *You may use this, but not often*
	- It refers to the above information
- `String` is a string class
	- It has length, size, etc. all the information
	- This is the **owned type
	- *You should probably use this.*
	- You can always pass a `&String` into a `&str`, because `&str` is just a reference; in this case it refers to the `String` that is allocated on the heap.

> [!summary]
> A `String` is a wrapper around `str` a string literal. The literal can live in stack or heap, depending on your program. The size is predetermined on compile-time, but you can change its contents. 