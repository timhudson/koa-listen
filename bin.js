#!/usr/bin/env node

var http = require('http')
var path = require('path')
var argv = require('minimist')(process.argv.slice(2), {
  alias: {p: 'port'},
  default: {p: 3000}
})

if (!argv._.length || argv.help) {
  var usage = '' +
    'Usage: koa-listen <file> [options]\n\n' +
    'Serve exported koa application\n\n' +
    'Options:\n\n' +
    '  -h, --help     output usage information\n' +
    '  -p, --port     optional TCP port to start the server at, defaults to 3000\n'
  return console.log(usage)
}

var filePath = path.resolve(process.cwd(), argv._[0])

try {
  var app = require(filePath)
} catch(err) {}

if (!app || typeof app.callback !== 'function') {
  return console.log('%s is not a valid koa application', argv._[0])
}

http
  .createServer(app.callback())
  .listen(argv.port, function () {
    console.log('Koa app listening on port %d', argv.port)
  })
