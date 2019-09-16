const blessed = require('blessed')
let start = blessed.list({
  width: '50%',
  height: '50%',
  top: '50%',
  left: '50%',
  align: 'center',
  fg: 'white',
  border: {
    type: 'line'
  },
  selectedFg: 'black',
  selectedBg: 'yellow',
  // Allow mouse support
  mouse: true,

  // Allow key support (arrow keys + enter)
  keys: true,

  // Use vi built-in keys
  vi: true
})
start.setLabel('Hit or Stand?')
start.setItems(['hit', 'stand', 'quit'])
module.exports = {
  start
}
