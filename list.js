const blessed = require('blessed')
let list = blessed.list({
  width: '50%',
  height: '50%',
  top: 'center',
  left: 'center',
  align: 'center',
  fg: 'white',
  border: {
    type: 'line'
  },
  selectedFg: 'black',
  selectedBg: 'yellow',
  items: ['deal', 'exit'],
  label: 'BLACKJACK GAME',
  // Allow mouse support
  mouse: true,

  // Allow key support (arrow keys + enter)
  keys: true,

  // Use vi built-in keys
  vi: true
})

module.exports = {
  list
}
