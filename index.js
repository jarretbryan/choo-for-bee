// import choo
const choo = require('choo')

// 'html' is a template helper for choo
const html = require('choo/html')


// initialize choo
const app = choo()


// creating a template (think functional component)
const main = function() {
  return html`<div>choo aminals</div>`
}

// creating a route (this is an api method)
// app.route takes in two functions: the path, and then the template
app.route('/', main)

// start app (?) (also an api method)
app.mount('div')