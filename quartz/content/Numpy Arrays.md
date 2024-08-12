---
aliases: 
tags:
  - Computing/Linguistics/Python
---
- Implemented using arraylist, so append is $O(n)$
    - Thus, use python lists until you know for sure when the array won't grow anymore, and convert to numpy array.
- `{python}arr = np.zeros()` or `{python}arr = np.empty()` to initialize.
    - ! `np.arrange(3)` initializes an `int`, while `np.arrange(3.)` initilizes a float.
- `{python}arr = np.zeros_like(ref_arr)` will initiallize `arr` with the same dimensions and datatype as `ref_arr`: ![[Numpy Arrays-20240511133224479.png]]
- Sequence based initialization: ![[Numpy Arrays-20240511133301197.png]]
    - Linspace vs arrange differences. Conclusion: linspace is better: ![[Numpy Arrays-20240511133454349.png]]
- Indexing arrays (is a pointer, except the "fancy indexing")![[Numpy Arrays-20240511133753047.png]]
- 