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
        ${state.animals.map(animalMap)}
      </div>
      <div class="controls">
        <ul class="filters">
          <li><a href="/">all </a></li>
          <li><a href="/filter/crocodile">crocodiles </a></li>
          <li><a href="/filter/koala">koalas </a></li>
          <li><a href="/filter/lion">lions </a></li>
          <li><a href="/filter/tiger">tigers </a></li>
          <li><a href="/filter/walrus">walruses </a></li>
        </ul>
      </div>
    </div>
  `

  // map function (???)
  function animalMap(obj, i){
    var type = state.params.type

    if(type && type !==obj.type){
      return null
    } else {
      return animal(remove, obj, i)
    }

  }


  // add new animal to state
  function add (event){
    var x = event.offsetX - 20
    var y = event.offsetY - 10
    
    var newCoordinates = {x:x, y:y}
    emit('addAnimal', newCoordinates)
  }

  // remove animal from state
  function remove(event){
    var index = event.target.id
    emit('removeAnimal', index)
  }


}

