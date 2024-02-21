---
aliases:
  - Huffman Coding
tags:
  - Computing/Algorithms
---

The Huffman algorithm is the most efficient single-text compression for text.

[How Computers Compress Text: Huffman Coding and Huffman Trees - YouTube](https://www.youtube.com/watch?v=JsTptu56GM8)
- Proven to be most efficient for single-character compression
- Uses a complete binary tree to store data
- Is a optimization problem.

Example of Huffman Tree.
- Number indicates summed frequency
- `0: left`, `1: right`
	- `0010` encodes `n`
	- `111` encodes `(blank)`
- ⇒ The more frequent the letter, the shorter the encoding is
- No encoding is a prefix of any other tree (each letter is encoded by different number of bits)
![[Pasted image 20230905170024.png|475]]
