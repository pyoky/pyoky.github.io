---
aliases: []
tags:
  - Computing
---

Rust has **generic lifetime annotations.**

[Validating References with Lifetimes - The Rust Programming Language](https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html)

```rust
fn main() {
    let r;                // ---------+-- 'a
                          //          |
    {                     //          |
        let x = 5;        // -+-- 'b  |
        r = &x;           //  |       |
    }                     // -+       |
                          //          |
    println!("r: {}", r); //          |
}                         // ---------+
```

…this returns a compiler error, because variable `x` does not live long enough, even though `r` is a valid value.
