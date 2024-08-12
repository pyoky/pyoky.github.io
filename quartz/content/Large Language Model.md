---
aliases:
  - LLM
tags:
  - Computing/Maching-Learning
---
### Mathematical Formalization
[[GPT-2 Architecture]] outlines the standard transformer architecture with multi-head, self-attention. The attention mechanism is at the core of an LLM's capabilities

### Use Cases
LLMs have a different kind of intelligence that you would expect humans. Because of this, using an LLM effectively requires that you understand what it is good at, and what it is not. In general, they are good at:
- _Summarization_: often better than humans
- _Translation_: near-human translation in literal meaning. Laggs behind when cultural or technical context is required
- Things that are in the _training data_
    - XML is better than JSON because HTML is often present in training data
    - Python and Javascript is better than Fortran or Haskell, because more python/javascript in github
    - English is better than Japanese or Korean because most of the internet is in English
- Replicating examples (few-shot tasks)
They are bad at:
- _Precise reasoning._ The kind in math or science
- _Understanding of the physical world._ They are good at linguistic descriptions of the physical world, but not in actually understanding how 3D space operates
- Things that require cross-correlating large amounts of _information that don't fit into the context window_. Admittiedly humans are bad at this too, but we can spend time learning. Since often LLMs cannot be re-trained due to cost constraints, it must

### Improving Performance
- **Prompt engineering** is changing how you state the question to better improve response.
    - **System vs User prompts.** This is done during training to improve following the system prompt. Also solves prompt-injection attacks
- **Chain-of-Thought (CoT)** Reasoning. Make it think through it's thought process before it reaches a final answer
    - **Agent & Tool-use**
        - Retrieval Augmented Generation (RAG): Get documents related to the question and stuff into context
        - Use of precise tools (Wolfram Alpha, python shell, etc.) to improve performance in precise computation
- Fine-Turing
    - [[Low-Rank Adaptation]]

### Speculation
The limitations of LLMs arise because:
1. It cannot constantly learn. Learning from conversation is hard or impossible because:
    - A human needs to rate the LLM's response every time for training to occur
    - Computationally expensive to train
2. It cannot get input while getting output. Humans listen while talking, see while writing, etc. LLMs have input and output in separate times.
    - More generally though, LLMs don't have a model of time other than the positional encoding of tokens. They're good with order, not with cardial time.
