# Include-md
**Disclaimer: When I did this, I have no idea what I was doing, so the docs are wrong. Not going to change them. I want to rembember myself how I improved**  
Include-md is a really simple JavaScript library perfect for writing blogs in MarkDown
## How to use it
Inlude the `include-md.min.js` JavaScript file at the end of the `<body>` of your document  
The line before that you must invoke Showdown.js with:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/showdown/2.1.0/showdown.min.js"></script>
```
or
```bash
npm install Showdown
```
and then include this tag in the HTML
```html
<script src="node_modules\showdown\dist\showdown.min.js"></script>
<script src="include-md.min.js"></script>
```
 
  
After doing this, the HTML document must have a tag like this:
```html
<random-tag data-md="markdownFile.md"></random-tag>
```
If you do this the markdown file will be parsed to HTML and placed INSIDE the tag

### ESM modules

If you want to use ESM modules, the process will be pretty much the same. You have only to change some things
First the script tag for calling the library:
```html
<script src="node_modules\showdown\dist\showdown.min.js"></script>
<script src="index.js" type="module"></script>
```
You will have to import in a script before the node for showdown, otherwise the library won't work
`index.js` being the js file where you import your modules.  
Inside the `index.js` you write:
```javascript
import includeMD from "./include-md.esm.min.js"
inlcudeMD()
```

