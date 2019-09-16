const blessed = require('blessed')
let gameover = blessed.list({
  width: '50%',
  height: '50%',
  top: '50%',
  left: '50%',
  align: 'center',
  fg: 'white',
  border: {
    type: 'line'
  },
  items: ['re-game', 'quit'],
  selectedFg: 'black',
  selectedBg: 'yellow',
  // Allow mouse support
  mouse: true,

  // Allow key support (arrow keys + enter)
  keys: true,

  // Use vi built-in keys
  vi: true
})

module.exports = {
  gameover
}
