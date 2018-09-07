// import choo
const choo = require('choo')

// 'html' is a template helper for choo
const html = require('choo/html')

// like in react for components
// choo requires templates to be imported 
// or since it's plain js - required
const main = require('./templates/main.js')


// initialize choo
const app = choo()

// app.use takes in a callback, and the callback takes in
// a state object. we can then set state

app.use(function(state, emitter){
  // initializing state
  state.animals = [
    {type: 'walrus', x: 200, y: 100},
    {type: 'crocodile', x: 50, y: 300}
  ]
  
  emitter.on('addAnimal', function () {
    var obj = {type: 'lion', x: 100, y: 200}
    state.animals.push(obj)

    emitter.emit('render')
  })
})


// creating a route (this is an api method)
// app.route takes in two functions: the path, and then the template
app.route('/', main)

// start app (?) (also an api method)
app.mount('div')