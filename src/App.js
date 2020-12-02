const { pathToRegexp } = require("path-to-regexp")

let reg = pathToRegexp('/user', [], { end: true })
console.log(reg);