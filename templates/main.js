// import choo's template helper
const html = require('choo/html')

// export module
// use function declaration here, not an arrow function
// the function takes in state from the parent template
module.exports =  function(state){
  let type = state.animals.type
  let x = state.animals.x
  let y = state.animals.y
  
  
  return html`
    <div class='container'>
      <div class='grass'>
        <img src='/assets/bg.gif'/>
        <img src='/assets/${type}.gif' style='left: ${x}px; top:${y}px;'
      </div>
    </div>
  `
}  