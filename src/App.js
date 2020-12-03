const { pathToRegexp } = require("path-to-regexp")

let reg = pathToRegexp('/user/list', [], { "end": true })

console.log('/user/list'.match(reg));