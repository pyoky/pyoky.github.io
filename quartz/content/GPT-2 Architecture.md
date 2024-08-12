---
aliases: []
tags:
  - Computing/Maching-Learning
---
def. GPT-2 is OpenAI's first public [[Large Language Model]]


> [!link]
> - [GPT in 60 Lines of NumPy | Jay Mody](https://jaykmody.com/blog/gpt-from-scratch/#fn5)
> - [But what is a GPT? Visual intro to transformers | Chapter 5, Deep Learning - YouTube](https://www.youtube.com/watch?v=wjZofJX0v4M) and [Attention in transformers, visually explained | Chapter 6, Deep Learning - YouTube](https://www.youtube.com/watch?v=eMlx5fFNoYc&t=24s)

![[GPT-2 Architecture-20240516153049901.png|455]]

## Parameters

### Hyperparameters
- Context Length: number of tokens allowed in input
    - Sequence length < Context Length. Sequence is the actual length of text input
- Vocabulary Size: the tokenizer's size of vocabulary
- Embedding Dimension: the number of dimensions in the word embedding
- Head Count: number of attention heads in each attention layer
### Learnable Parameters
- `wte` (Vocab Size → Embedding Dimension): lookup table from token to embedding
- `wpe` (Context Length → Embedding Dimension): lookup table for positional embedding
- $\gamma,\beta$ in the Normalization layer
- `w`,`b` (N → N), (N): Weights and biases in the linear (=linear) layers
- Attention
    - Query, Key, and Value matricies, each (Sequence Length → Embed. Dim.):

### Word Embeddings
1. Given a string of text, a tokenizer will split this text into chunks (tokens)
2. Learnable embedding matrix `wte` and `wpe` encodes this into an embedding
These vectors $v_{1},v_{2}$, embedded in the embedding space will:
- Be similar in meaning if cosine similarity $-1<\frac{v_{1} \cdot v_{2}}{|v_{1}||v_{2}|}<1$ is larger
- Difference in vectors $v_{2}-v_{1}$ i.e. the direction embed meaning that is the "difference in meaning" between $v_{1}$ and $v_{2}$
### Attention
1. Each token in string is multiplied with a Query matrix $Q_{1}=W_{Q}\cdot v_{1}$
    1. The resulting vector encodes the question, e.g. "are there adjectives in front of me?"
    2. The resulting vector
2. Each token in string is multiplied with a Key matrix $K_{1}=W_{K}\cdot v_{1}$
    1. The resulting vector encodes the answer, e.g. "I'm an adjective!"
$$
Q=\begin{bmatrix}
—& Q_{1} & — \\
— & Q_{2}  & — \\
 & \vdots &  \\
— & Q_{n} & —
\end{bmatrix},
K=\begin{bmatrix}
—& K_{1} & — \\
— & K_{2}  & — \\
 & \vdots &  \\
— & K_{n} & —
\end{bmatrix},
V=\begin{bmatrix}
—& V_{1} & — \\
— & V_{2}  & — \\
 & \vdots &  \\
— & V_{n} & —
\end{bmatrix}
$$
3. The cosine similarity of a query-key pair encodes "how well the question is answered"
    1. each column of the result passes thru a [[Softmax]] function
$$
\text{softmax}\left( \frac{\overbrace{ QK^{T} }^\text{ dot similarity }}{\underbrace{ \sqrt{ d_{k} } }_\text{ nice to compute }} \right)V
$$
