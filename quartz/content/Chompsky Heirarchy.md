---
aliases: []
tags:
  - Computing/Formal-Languages
---

The Chompsky Heirarchy is the levels of capabilities of automata=[[Formal Grammar|grammar]]=[[Formal Languages|languages]].

## Capabilities of Automata

| Type of Automata   | Memory   | Can…                 | Can’t..                  |
| ------------------ | -------- | -------------------- | ------------------------ |
| Finite Automata    | None     | recognize integers   | recgz. arith. expr.      |
| Push-down Automata | Stack    | recgz. arith. expr.  | compute arith. expr.     |
| Turing Machine     | Infinite | compute arith. expr. | determine halting probl. |

## The Heirarchy

- [[Turing Machine]] == [[Unrestricted Grammar]] == [[Recursively Enumerable Languages]]
- [[Linear Bound Automata]] == [[Context Sensitive Grammar]] == [[Recursive Languages]]
- [[Pushdown Automata]] == [[Context-Free Grammar]] == [[Context-Free Language]]
- [[Finite Automata]] == [[Regular Expressions]] == [[Regular Grammar]]

![Untitled](Untitled%202.png)
