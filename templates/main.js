// import choo's template helper
// 'html' is a template helper for choo

const html = require('choo/html')

const animal = require('./animal.js')

// export module
// use function declaration here, not an arrow function
// the function takes in state from the parent template
module.exports = function (state, emit) {
  // create html template
  return html`
    <div class="container">
      <div class="grass">
        <img src="/assets/bg.gif" onclick=${add} />
        ${state.animals.map(animal)}
      </div>
    </div>
  `

  function add (event){
    var x = event.offsetX - 20
    var y = event.offsetY - 10
    
    var newCoordinates = {x:x, y:y}
    emit('addAnimal', newCoordinates)
  }
}

// add new animal to state
