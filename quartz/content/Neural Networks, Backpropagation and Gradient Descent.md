---
uid: be09ecd8-1159-4a3a-b59d-1f4a7b271412
aliases: []
tags:
  - Computing/Maching-Learning
origins:
  - x-devonthink-item://0BA4A374-A376-45F0-9561-F7696EE66BD4
---
**Motivation 1**. Consider the [[Logistic Model]] for classification. We observe the limitations of this model as:
- The decision boundaries are linear, and thus can only solve linearly separable problems.
    - Specifically: it can simulate OR, AND [[logic gates]]… ![[Neural Network-20240923224844733.png]]
    - …but it can't simulate XOR because it's not linearly separable.![[Neural Network-20240923224906888.png|420]]
- As seen [[Logistic Model#^e8atta|here]], we haven't considered how to transform the 'input space' into the 'feature space.' This means we still perform terribly without this 'magic,' even as simple as classifiying digits in MNIST.
**Motivation 2.** Consider how the logistic model, with its weights and bias, can be hooked up together. This resemples the neural connections of the human brain.

## Feed Forward Neural Network

def. **Neural Network.** A feed forwarnd neural network connects the operations of multiple [[Logistic Model]]s (=neurons) together.![[Neural Network-20240923231204502.png|312]]

> [!info] Notation of quantities are as follows:
> $$
V^{(\text{layer})}_{\text{row},\text{column}}
$$
Let the no. of neurons (=dimensions) of each ofthe layers be, from the input layer: $D^{(0)},D^{(1)},\dots,D^{(L+1)}$. The components of the neural net are:
1. Input neurons $\mathbf{x}$ in input space $\mathbf{x} \in \mathbb{R}^{D^{(0)}}$ (layer $k=0$)
   → $h^{(0)}=\mathbf{x}$
2. Hidden neurons (layer $k=2\dots L$)
   → $h^{(k+1)}=g(\textcolor{red}{ a^{(k+1)} })=g(\textcolor{red}{ W^{(k+1)}h^{(k)} })$
3. Output later neuron (layer $k=L+1$)
   → $f(\mathbf{x})=h^{(L+1)}=\mathbf{\sigma}(a^{(L+1)})=\mathbf{\sigma}(W^{(L+1)}h^{(k)})$
The parameters of the neural net are:
*Weight parameters*. Layer $k$'s *outgoing* weights are packaged into a nice $W^{(k)}$ matrix with shape $D^{k+1}\times D^{k}$, where $W_{i,j}^{(k)}$ refers to the weight connecting neuron $j$ in layer $k$ to neuron $i$ in layer $k+1$. (This backward-ness of the indexing comes from the matrix multiplication shown later.)
*Bias parameters*. Layer $k$ injects a bias, $\mathbf{b}$ into each of the neurons in layer $k+1$. In matrix multiplication terms this is simply multiplying by one, as it is thusly shown in the image.
*Activation Function.* Each neuron in layer $k+1$, having gotten its weighted input sum passes through an activation function. Without this activation funcion the whole NN will collapse into a simple linear map.
**Visualization.** The following visualization lacks the bias term for simplicity.![[Neural Network-20240923231620015.png]]
### Mathematical Backing
*Intuition*. Why is this supposedly random arragement of logistic neurons so effective expeirmentally? Here is a possible reason: *neural networks can simulate any function.*

thm. **Universal Approximation (non-rigorous statement).** Given enough depth and width, and given "normal" activation functions (sigmoid, tanh), a neural network can simulate any function to arbitrary precision.

## Backpropagation
**Motivation** is simple. How do we find $W^{(1)}\dots W^{(L+1)}, \mathbf{b}^{(1)}\dots \mathbf{b}^{(L+1)}$? To do that we must minimize the loss function, i.e. find the gradient of the loss function.

def. **Loss Minimization of a NN.** Let NN be $f:\mathbf{x}\in\mathbb{R}^{D^{(0)}} \mapsto h^{(L+1)}\in \mathbb{R}^{D^{(L+1)}}$function $\ell$ is the loss of the neural network with parameters $\theta = (W^{(1)}\dots W^{(L+1)},\mathbf{b}^{(1)}\dots \mathbf{b}^{(L+1)})$. Given training data and label $\{ (\mathbf{x}_{t},\mathbf{y}_{t}) \text{ for } t \in 1\dots T\}$ The optimal parameters are:
$$
\theta ^{*}=arg\min_{\theta} \frac{1}{T}\sum_{\forall t}\textcolor{red}{ \ell(}f(x_{(t)}|\theta), y_{(t)}\textcolor{red}{) }+\lambda \Omega(\theta)
$$
> [!info] Choice of loss function
> While we can choose any loss function, from now on we will simply use the [[Information Theory#^56f391|cross-entropy]]. similar to the loss function [[Logistic Model#^4qw2dk|here]], but only with one data so the second summation dissapears.

For the loss funciton we have:
$$
\begin{align}
\ell(f(\mathbf{x}|\theta),\mathbf{y}) & =- \ln \prod_{\forall k \in [K]}f(\mathbf{x}|\theta)_{k}^{\mathbf{y}_{k}} \\
 & =- \sum_{\forall k \in [K]}f(\mathbf{x}|\theta)_{k}\cdot \mathbf{y}_{k} \\
 & = -\ln f(\mathbf{x|\theta})_{y^{*}}
\end{align}
$$
where we let $y^{\star}=arg\max \mathbf{y}$ as above.

def. **Gradient Descent.** When a analytic solution is not possible, we can minimize a function (=loss function) by numerical methods:
1. Randomly select parameters $\theta$
2. ? Find the gradient of the loss function with one training example $\frac{ \partial  }{ \partial \mathbf{\theta} } \ell(f(\mathbf{x}|\theta),\mathbf{y})$
3. Move a little bit ($\eta$, learning rate) in the direction of the gradient
4. Repeat for every training example $(\mathbf{x,\mathbf{y}})$
The question then is how to calculate $\frac{ \partial \ell }{ \partial \theta }$ from step 2. Here we use backpropagation:

alg. **Backpropagation.** We can derive the formulae for the derivatives $\frac{ \partial \ell }{ \partial \theta }$ using the chain rule. First, on the last layer $k=L+1$: [^1]
$$
\frac{ \partial \ell }{ \partial h^{(L+1)} }= -\frac{\mathbf{e}(y^{*})}{h^{(L+1)}_{y^{*}}}
$$
then for the previous layer $k=L$: [^2]
$$
\begin{align}
\overset{ \textcolor{red}{ 1\times D^{(L)} } }{ \frac{ \partial \ell }{ \partial h^{(L)} } }&= \frac{ \partial \ell }{ \partial h^{(L+1)} }\cdot \underbrace{ \frac{ \partial h^{(L+1)} }{ \partial a^{(L+1)} } }_{ = g'(\cdot)}\cdot \underbrace{ \frac{ \partial a^{(L+1)} }{ \partial h^{(L)} } }_{ =W^{L} } \\
&=\overset{ \textcolor{red}{ 1\times D^{(L+1)} } }{ - \frac{\mathbf{e}(y^{*})}{h^{(L+1)}_{y^{*}}} }\cdot \overset{ \textcolor{red}{ D^{(L+1)}\times D^{(L+1)} } }{ g'(a^{(L+1)}) }\cdot\overset{ \textcolor{red}{ D^{(L+1)}\times D^{(L)} } }{ W^{(L)} }
\end{align}
$$
While we can extract the differentials wrt $W^{(L)}$ by: ^khyz6i
$$
\begin{align}
\frac{ \partial \ell }{ \partial W^{(L)} }&=\frac{ \partial \ell }{ \partial h^{(L+1)} }\cdot \underbrace{ \frac{ \partial h^{(L+1)} }{ \partial a^{(L+1)} } }_{ g'(\cdot) } \cdot\underbrace{ \frac{ \partial a^{(L+1)} }{ \partial W^{(L)} } }_{ (h^{(L)})^{\top} \text{per row, all layers} }
 \\
&=\overset{ \textcolor{red}{ 1\times D^{(L+1)} } }{ - \frac{\mathbf{e}(y^{*})}{h^{(L+1)}_{y^{*}}} }\cdot \overset{ \textcolor{red}{ D^{(L+1)}\times D^{(L+1)}} }{ g'(a^{(L+1)}) }\cdot\overset{ \textcolor{red}{ D^{(L+1)}\times D^{(L)} \times D^{(L+1)}} }{ (\cdot)}
\end{align}
$$
And extract the differentials wtr $\mathbf{b}^{(L)}$ by:

We can continue this until necessary according to the following visualization.
*Visualization.* ![[Neural Network-20240924174132147.png|512]]

def. **Gradient Descent.** A form of optimization. Average the gradient of all the datapoints.
$$
\theta_{k+1} \leftarrow \theta_{k} -\alpha \left(\underbrace{ \frac{1}{N} \sum_{i=1}^{N} }_\text{ average over all data }\nabla_{\theta_{k}} \ell(f(\mathbf{x}_{i}\mid \theta_{k}),\mathbf{y}_{i})\right)
$$
where $\alpha$ is a chosen learning rate.




[^1]: [Deep Learning Slides](x-devonthink-item://122B6B2F-8A5E-4DC0-ACB9-976268B4C8C0?page=16)
[^2]: [Deep Learning Slides](x-devonthink-item://122B6B2F-8A5E-4DC0-ACB9-976268B4C8C0?page=22) ^9wnois ^qrkwvn ^ek9eg9 ^bvhuk5 ^bgjjby ^1t1avf ^p87mcc ^xibkdm
