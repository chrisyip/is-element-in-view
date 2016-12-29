# is-element-in-view
Detect if element is in view.

```
npm install is-element-in-view
```

Use with module packer with `babel-preset-es2015`, e.g. `webpack`:

```
import isElementInView from 'is-element-in-view
```

With CommonJS:

```
const isElementInView = require('is-element-in-view/dist/is-element-in-view')
```

With `<script>` tag:

```
<script src="node_modules/is-element-in-view/dist/is-element-in-view.umd.js"
```

## Usage

```
const elementInView = isElementInView(element)
/*
 * returns
 * {
 *   top: true,
 *   bottom: true,
 *   left: true,
 *   right: true,
 *   body: true,
 * }
 */
```

```
if (!isElementInView(element).top) {
  element.scrollIntoView()
}
```

### Options

`element`: target element.

`parentElement`: optional, accepts a HTML element, if presented, will use `parentElement.getBoundingClientRect()` as viewport, otherwise, use `window.innerHeight` and `window.innerWidth` instead.
