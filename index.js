// import choo
var choo = require('choo')

// import template
var main = require('./templates/main')

// initialize choo
var app = choo()

// declare routes
app.route('/', main)

// start app
app.mount('div')
