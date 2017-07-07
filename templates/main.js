// import html helper
var html = require('choo/html')

// export template
module.exports = function (state, emit) {
  return html`
    <div class="container">
      <div class="grass">
        <div class="lion">
          <img src="/assets/lion.gif">
          <div class="bubble"></div>
        </div>

        <div class="crocodile">
          <img src="/assets/crocodile.gif">
          <div class="bubble"></div>
        </div>
      </div>

      <footer>
        made by <a href="https://twitter.com/louiscenter">@louiscenter</a>
        with <a href="https://github.com/yoshuawuyts/choo">choo</a>
      </footer>
    </div>
  `
}
