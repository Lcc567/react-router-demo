const { pathToRegexp } = require("path-to-regexp")
let keys = []
let reg = pathToRegexp('/user/list/:id', keys, { "end": true })
console.log('keys', keys);
console.log('/user/list/1'.match(reg));