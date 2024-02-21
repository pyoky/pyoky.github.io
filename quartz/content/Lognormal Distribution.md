---
aliases: 
tags:
  - Math/Common-Distributions
---
def. **Lognormal Distribution.** A random variable $X$ is a lognormal random variable iff
- $X=\ln(\text{N}(\mu,\sigma^2))$ i.e. log of the [[Normal Distribution]] random variable
- PDF: 
$$
f_{X}(x)=\frac{1}{x\sigma \sqrt{ 2\pi }}\exp\left[ -\frac{(\ln x-\mu)^2}{2\sigma^2} \right]
$$
- $E(X) =e^{ \mu+ \frac{\sigma^2}{2} }$
- $Var(X)=(e^{ \sigma^2 }-1)e^{ 2\mu+\sigma^2 }$
- CDF: 
$$
F_{X}(x)=\Phi\left( \frac{\ln x-\mu}{\sigma} \right)
	
$$
	- Where $\Phi$ is the Standard [[Normal Distribution]] CDF.


