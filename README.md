# Include-md
**Disclaimer: When I did this, I have no idea what I was doing, so the docs are wrong. Not going to change them. I want to rembember myself how I improved**  
Include-md is a really simple JavaScript library perfect for writing blogs in MarkDown
I don't know if this is possible as it uses a node modules and tries to edit the DOM
## How to use it
To install it, run:
```bash
npm install include-md
```
Then in your js file add the call to the function:
```js
includeMD();
```
And then all the HTML tags with the `data-md` attribute will have the content with parsed to HTML of the Markdown file you pass as a value of the attribute:
```html
<random-tag data-md="path/to/markdown.md"></random-tag>
```
And you should be good to go.