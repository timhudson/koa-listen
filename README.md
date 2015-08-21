# koa-listen

Serve exported koa application

## Example

``` js
// index.js
var koa = require('koa')
var app = koa()

module.exports = app
```

``` bash
$ koa-listen index.js -p 1515
```

## Usage

```
Usage: koa-listen <file> [options]

Serve exported koa application

Options:

  -h, --help     output usage information
  -p, --port     optional TCP port to start the server at, defaults to 3000
```

## License

MIT
