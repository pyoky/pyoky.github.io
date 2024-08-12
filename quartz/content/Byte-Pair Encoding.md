---
aliases: 
tags:
  - Computing/Maching-Learning
---
Compression algorithm which is also used for [[GPT-2 Architecture]]
[Byte Pair Encoding Tokenization - YouTube](https://www.youtube.com/watch?v=HEikzVL-lZU)
### Constructing a Vocabulary
![[Byte-Pair Encoding-20240516182003241.png]]
1. Split the text into a $\text{Corpus}$, which is simply just split across whitespace & punctuation
2. Split the $\text{Corpus}$ into individual letters
    1. Add all letters to the set $\text{Vocab}$
3. Pair up every possible letters from the $\text{Corpus}$. Observe its frequency
    1. Add the most frequent pair into the set $\text{Vocab}$ as a token.
    2. Keep track of the merge rules
4. Repeat until the set $\text{Vocab}$ reaches a desired size.
### Tokenizing a text using a prexisting vocabulary
Go through the merge rules one by one, any apply greedily, until you can't anymore. This is enough to tokenize the word.
