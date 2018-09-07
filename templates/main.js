// import choo's template helper
const html = require('choo/html')

// export module
// use function declaration here, not an arrow function
module.exports =  function(){
  return html`
    <div class='container'>
      <div class='grass'>
        <img src='/assets/bg.gif'/>
      </div>
    </div>
  `
}  