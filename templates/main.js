// import choo's template helper
const html = require('choo/html')

const animal = require('./animal.js')

// export module
// use function declaration here, not an arrow function
// the function takes in state from the parent template
module.exports = function (state) {
  // create html template
  return html`
    <div class="container">
      <div class="grass">
        <img src="/assets/bg.gif" />
        ${state.animals.map(animal)}
      </div>
    </div>
  `
}