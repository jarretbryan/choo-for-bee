// import choo
const choo = require('choo')

// like in react for components
// choo requires templates to be imported 
// or since it's plain js - required
const main = require('./templates/main.js')


// initialize choo
const app = choo()

// app.use takes in a callback, and the callback takes in
// a state object. we can then set state

app.use(function (state, emitter) {
  // initialize state
  state.animals = [
    { type: 'lion', x: 200, y: 100 },
    { type: 'crocodile', x: 50, y: 300 }
  ]

  // add animal
  // this function is here, and main.js can access it if 'emit' is passed into the functional template
  // we can then call emit on the first argument in emitter.on (in this case, 'addAnimal' and it will run the funciton)
  emitter.on('addAnimal', function (coordObj) {
    var animalArr = ['crocodile', 'koala', 'lion', 'tiger', 'walrus']

    var randomIndex = Math.floor(Math.random() * animalArr.length)

    var xValue = coordObj.x
    var yValue = coordObj.y

    var obj = { type: animalArr[randomIndex], x: xValue, y: yValue }
    state.animals.push(obj)

    emitter.emit('render')
  })
})


// creating a route (this is an api method)
// app.route takes in two functions: the path, and then the template
app.route('/', main)

// start app (?) (also an api method)
app.mount('div')