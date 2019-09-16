const blessed = require('blessed')

var cardbox = blessed.box({
  width: '50%',
  border: {
    type: 'line'
  },
  style: {
    fg: 'black',
    border: {
      fg: 'red'
    }
  },
  label: 'BLACKJACK',
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

var userbox = blessed.box({
  parent: cardbox,
  width: '49%',
  left: '49%',
  align: 'center',
  border: {
    type: 'line'
  },
  style: {
    fg: 'black',
    bg: 'gray'
  },
  label: 'user',
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

var dealerbox = blessed.box({
  parent: cardbox,
  left: '0%',
  align: 'center',
  width: '49%',
  border: {
    type: 'line'
  },
  style: {
    fg: 'black',
    bg: 'gray'
  },
  label: 'dealer',
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

module.exports = {
  userbox,
  dealerbox,
  cardbox
}
