---
aliases:
  - DTD
tags:
  - Computing/Data-Science
---
A schema definition language for [[Extensible Markup Language|XML]]

Declaration
1. Element `<>`

## Element Declaration

```dtd
<!ELEMENT book (title, author*, publisher?, year?, section*)>
```
- the element book must contain the following child elements, **in order**:
	1. one title
	2. zero or more authors
	3. zero or one publisher
	4. zero or one year
	5. zero or more sections
```dtd
<!ELEMENT p (#PCDATA | p | ul | dl | table | h1 | h2 | h3)* >
```
- element `p` may contain:
	- `{dtd}#PCDATA` pure text only (no child elements)
	- `p` elements
	- `ul` elements
	- etc.
	- `*` → and zero or more repetitions of them.

## Attribute Declaration
```dtd
<!ATTLIST img
   src    CDATA          #REQUIRED
   id     ID             #IMPLIED
   sort   CDATA          #FIXED "true"
   print  (yes | no)     "yes"
>
```

- Type is…
	- `ID`: is the unique id of that element.
		- ! `ID` is globally unique, regardless of attribute name, element name, etc.
		- See [xml - DTD - uniqueness of ID attributes - Stack Overflow](https://stackoverflow.com/a/18891291)
	- `IDREF`: reference of some id
	- `CDATA`: any string
	- `(val1|…)`: can only be either of these values.
- Value is…
	- `#REQUIRED`: necessary
	- `#IMPLIED`: optional
	- `#FIXED`: constant
	- ⇒ "Final column `"default"`: default value of that attribute
