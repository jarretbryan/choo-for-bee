// import choo's template helper
const html = require('choo/html')

// export module
module.exports = function (animal) {
  var type = animal.type
  var x = animal.x
  var y = animal.y
  // note - i wanted to use let above, but i kept getting an error, so var instead
  // seems to be a quirk of choo

  // create html template
  return html`
    <img src="/assets/${type}.gif" style="left: ${x}px; top: ${y}px;">
  `
}