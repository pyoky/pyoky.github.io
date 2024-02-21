---
aliases: []
tags:
  - Computing
  - Documentation
---

PDF.js usage

[How to Build a React PDF Viewer with PDF.js | PSPDFKit](https://pspdfkit.com/blog/2021/how-to-build-a-reactjs-viewer-with-pdfjs/)

[How to Build a TypeScript PDF Viewer with PDF.js | PSPDFKit](https://pspdfkit.com/blog/2021/how-to-build-a-typescript-pdf-viewer-with-pdfjs/)

> PDF.js uses workers to parse and render the PDF file. To keep things simple, we’ll avoid bundling the workers and instead copy them to our public folder (named `public`) using the following:

```
cp ./node_modules/pdfjs-dist/build/pdf.worker.min.js ./public/
```

{and then you can do:}

```JS
pdfJS.GlobalWorkerOptions.workerSrc =
				window.location.origin + '/pdf.worker.min.js';
```

## Features
- List of past articles for the user
	- Includes what they learned, what they ignored
- Word order by frequency
