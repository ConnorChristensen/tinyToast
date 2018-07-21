# tinyToast
A lightweight, dependency free, pure css/js notification utility for the web. 

* no jQuery
* no icons
* simple API
* no fancy code for bugs to hide in
* tested on chrome, firefox and safari

Call the `toast()` function, a toast shows up. It slides smoothly in from the top right corner and deletes itself in 5 seconds.

## Size

|  File         | Size
| --------------|-----------
| toast.css     | 26 lines of code
| toast.js      | 9 lines of code
| toast.min.css | 376 bytes
| toast.min.js  | 227 bytes

## Setup

1. Take your HTML file
2. Link the CSS `<link rel="stylesheet" href="toast.min.css">`
3. Link the JS `<script type="text/javascript" src="toast.min.js"></script>`
4. Call your toast function

## API
```javascript
toast('good', 'A good toast')
toast('warn', 'A warning toast')
toast('bad', 'A toast for when bad things happen')
```

### Other
If you want to change the timing, go ahead. toast.css and toast.js has comments in them even.

* not on npm