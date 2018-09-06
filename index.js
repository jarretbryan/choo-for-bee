// import choo
const choo = require('choo')

// 'html' is a template helper for choo
const html = require('choo/html')


// initialize choo
const app = choo()


// creating a template (think functional component)
const main = function() {
  return html`<div>choo animals</div>`
}

// creating a route (this is an api method)
app.route('/', main)

// start app (?) (also an api method)
app.mount('div')