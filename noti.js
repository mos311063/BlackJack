const blessed = require('blessed')

var noti = blessed.box({
  top: '5%',
  left: '55%',
  align: 'center',
  width: '40%',
  height: '40%',
  border: {
    type: 'line'
  },
  content: '',
  style: {
    fg: 'black',
    bg: 'gray',
    border: {
      fg: 'yellow'
    }
  },
  label: 'notification',
  keys: true,
  vi: true,
  alwaysScroll: true,
  scrollable: true,
  scrollbar: {
    style: {
      bg: 'yellow'
    }
  },
  mouse: true
})

var msg = blessed.message({
  top: '15%',
  left: '0%',
  align: 'center',
  width: '100%',
  height: '40%',
  style: {
    fg: 'black',
    bg: 'gray'
  },
  keys: true,
  vi: true,
  // alwaysScroll: true,
  // scrollable: true,
  scrollbar: {
    style: {
      bg: 'yellow'
    }
  },
  mouse: true
})

module.exports = {
  noti,
  msg
}
