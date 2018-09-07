// import choo's template helper
const html = require('choo/html')

// export module
// use function declaration here, not an arrow function
// the function takes in state from the parent template
module.exports = function (state) {
  var type = state.animals.type
  var x = state.animals.x
  var y = state.animals.y
  // note - i wanted to use let above, but i kept getting an error, so var instead
  // unsure if this is a quirk of glitch or of choo

  // create html template
  return html`
    <div class="container">
      <div class="grass">
        <img src="/assets/bg.gif" />
        <img src="/assets/${type}.gif" style="left: ${x}px; top: ${y}px;" />
      </div>
    </div>
  `
}