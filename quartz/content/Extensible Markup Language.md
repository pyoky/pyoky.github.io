---
aliases:
  - XML
tags:
  - Computing/Data-Science
---

- Semi-structured data (well-structured)
	- Document format (well-formed)
- Self-describing

`{xml}<book author="C. Darwin">The Origin of Species</book>`

- Tag: `{xml}<book>,</book>`
- Attribute: `{xml}author="C. Darwin"`
	- ID: `id` is a special attribute that is unique
- Namespace: definition of your schema
```xml
<myNS:book xmlns:myNS="http://.../mySchema"> 
	<myNS:title>...</myCitationStyle:title>
	<myNS:author>...</myCitationStyle:author>...
</book>
```
- Elements: `The Origin of Species`
- `{xml}<![CDATA[Tags: <book>,…]]>` means character data (escape not required)
- [[Screenshot 2023-10-24 at 18.21.58.png|Tree Representation]]
- Use [[XPath and XQuery]] to query it
