---
aliases:
  - Differentiation Rules
tags:
  - Math/Calculus
---

> [!links]
> - [(DevonThink) IB Math HL Formula Booklet](x-devonthink-item://F9E2CB19-E755-4B33-B3FF-12F819211277)
> - [[Integration Rules]]

## Derivation Rules

Chain Rule:

$$
y=g(u)\implies u=f(g(x))\implies \frac{dy}{dx}=\frac{dy}{du}\cdot \frac{du}{dx}
$$

$$
f(g(x))=f'(g(x))\cdot g'(x)
$$

Product Rule:

$$
\frac{d}{dx}f(x)g(x)=f'(x)g(x)+f(x)g'(x)
$$

Filliping:

$$
\frac{dy}{dx}=(\frac{dx}{dy})^{-1}
$$

$$

$$

## Special Functions

### Exponentials

- $f(x) = a^x$ then $f'(x) = \ln(a) \cdot a^x$
- $f(x) = e^x$ then $f'(x) = e^x$
- $f(x) = a^{g(x)}$ then $f'(x) = \ln(a) \cdot a^{g(x)} \cdot g'(x)$
- $f(x) = e^{g(x)}$ then $f'(x) = e^{g(x)} \cdot g'(x)$

### Trigonometric Functions

From [(DevonThink) Mnemonic diagram for trigonometric and hyperbolic functions](x-devonthink-item://79871930-59AB-4568-8CD9-20518849376D)

![[Pasted image 20230829123456.png|350]]

1. Functions and cofunctions are on horizontal lines.
2. Derivatives of functions on the right have a negative sign; those on the left do not.
3. Functions and reciprocals are on diagonal lines.
	1. e.g. $\sin(x)=\frac{1}{\csc(x)}$
4. Each function is the ratio of the next two functions clockwise.
	1. e.g. $\tan(x)=\frac{\sin(x)}{\cos(x)}$
5. Each function the the product of its two neighbors.
6. The two functions at the top are bounded. The rest are unbounded.
7. The functions that are vertices of a triangle with a Roman numeral inside are related by Pythagorean identities.
	1. e.g. $\sin(x)^2+\cos(x)^2=1$

Function | Derivative | Integral
--- | --- | ---
$\sin(x)$ | $\cos(x)$ | $-\cos(x) + C$
$\cos(x)$ | $-\sin(x)$ | $\sin(x) + C$
$\tan(x)$ | $\sec^2(x)$ | $-\ln |\cos(x)| + C$
$\cot(x)$ | $-\csc^2(x)$ | $\ln |\sin(x)| + C$
$\sec(x)$ | $\sec(x) \tan(x)$ | $\ln |\sec(x) + \tan(x)| + C$
$\csc(x)$ | $-\csc(x) \cot(x)$ | $\ln |\csc(x) + \cot(x)| + C$

![[Pasted image 20230829123812.png|350]]

1. Function and cofunctions are on lines that make a 120° angle with the horizontal.
2. Derivatives of functions on the right have a negative sign; those on the left do not.
3. Functions and reciprocals are on diagonal lines.
4. Each function is the ratio of the next two functions clockwise.
5. Each function the the product of its two neighbors.
6. The two functions at the top are bounded. The rest are unbounded.
7. The functions that are vertices of a triangle with a Roman numeral inside are related by Pythagorean identities.
