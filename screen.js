const blessed = require('blessed')
// Create a screen object.
let screen = blessed.screen({
  smartCSR: true,
  title: 'BlackJack',
  autoPadding: true
})
// Quit on Escape, q, or Control-C.
screen.key(['escape', 'C-c'], function(ch, key) {
  return process.exit(0)
})
screen.key('q', function() {
  this.destroy()
})

module.exports = {
  screen
}
