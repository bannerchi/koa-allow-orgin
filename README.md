## Install

```
npm i koa-allow-origin --save
```
## Usage
if you use koa-router

```javascript
const allowOrigin = require('../middleware/koa-allow-origin')
router.use(allowOrigin(process.env.NODE_ENV, []))
```