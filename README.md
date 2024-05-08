# Include-md
Include-md is a really simple JavaScript library perfect for writing blogs in MarkDown
I don't know if this is possible as it uses a node modules and tries to edit the DOM. Had this idea long ago, and I just wanted to refactor it as an npm package.
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
