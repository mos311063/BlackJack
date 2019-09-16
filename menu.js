const { screen } = require('./screen.js')
const { list } = require('./list.js')
const { start } = require('./start.js')
const { userbox, dealerbox, cardbox } = require('./cardbox.js')
const { drawCard, drawDeck } = require('./module/index.js')
const { gameover } = require('./gameover.js')
const { noti, msg } = require('./noti.js')
const { getscore, endGame, checkCard, sleep, a_value } = require('./utility.js')
const card = require('deck-o-cards')

let deck
let count
let dealer
let user

//event
list.on('select', function(select) {
  if (select['content'] == 'exit') {
    return process.exit(0)
  } else {
    list.destroy()
    deck = card.randomizedDeck()
    count = 0
    dealer = []
    user = []
    screen.append(cardbox)
    screen.append(noti)
    noti.append(msg)
    screen.render()
    bj()
  }
})

gameover.on('select', function(select) {
  if (select['content'] == 'quit') {
    return process.exit(0)
  } else {
    gameover.destroy()
    cardbox.destroy()
    noti.setContent('')
    noti.destroy()
    screen.append(list)
    screen.render()
    list.focus()
  }
})

start.on('select', function(select) {
  if (select['content'] == 'stand') {
    stand()
  } else if (select['content'] == 'hit') {
    user.push(deck[count++])
    a_value(user)
    msg.log(
      'user pick ' + `${user[user.length - 1][1] + user[user.length - 1][0]}`,
      2
    )
    userbox.scroll(1000)
    showUserCard()
    if (checkCard(getscore(user))) {
      stand()
    }
  } else {
    return process.exit(0)
  }
})

async function bj() {
  userbox.setLabel({ text: 'user :', side: 'left' })
  dealerbox.setLabel({ text: 'dealer :', side: 'left' })
  showUserCard()
  showAllDealerCard()

  user.push(deck[count++])
  await sleep(500)
  msg.log('user pick ' + `${user[0][1] + user[0][0]}`, 2)
  showUserCard()
  await sleep(1000)

  dealer.push(deck[count++]) //hidden
  msg.log('dealer pick unknown', 2)
  showDealerCard()
  await sleep(1000)

  user.push(deck[count++])
  a_value(user)
  msg.log('user pick ' + `${user[1][1] + user[1][0]}`, 2) /// for test
  showUserCard()
  await sleep(1000)

  dealer.push(deck[count++])
  a_value(dealer)
  msg.log('dealer pick ' + `${dealer[1][1] + dealer[1][0]}`, 2)
  showDealerCard()
  await sleep(1000)

  screen.append(start)
  start.focus()
  start.select(0)
  screen.render()
  if (checkCard(getscore(user))) {
    stand()
  } else {
    screen.render()
  }
}

async function stand() {
  await sleep(500)
  start.destroy()
  userScore = getscore(user)
  let result = false
  if (userScore == 21) {
    result = 'Game Over ----BLACKJACK You Win----'
  } else if (userScore > 21) {
    result = 'Game Over ----BUSTED You Lose----'
  } else {
    msg.log('dealer hidden card is ' + `${dealer[0][1] + dealer[0][0]}`, 2)
    showDealerCard('all')
    await sleep(1500)
    dealerScore = getscore(dealer)
    while (result == false) {
      if (dealerScore >= 17) {
        dealerScore > 21
          ? (result = 'Game Over ---- You Win----')
          : (result = endGame(userScore, dealerScore))
      } else if (dealerScore > userScore) {
        result = endGame(userScore, dealerScore)
      } else {
        dealer.push(deck[count++])
        a_value(dealer)
        msg.log(
          'dealer pick ' +
            `${dealer[dealer.length - 1][1] + dealer[dealer.length - 1][0]}`,
          2
        )
        showDealerCard('all')
        await sleep(1500)
        dealerScore = getscore(dealer)
      }
    }
  }

  screen.append(gameover)
  gameover.setLabel(result)
  screen.render()
  gameover.focus()
  noti.setContent(result)
}

//helper
function showUserCard() {
  usercard = user.map(x => {
    return drawCard(`${x[1]}`, `${x[0]}`, 'black') + '\n'
  })
  userbox['content'] = usercard.join('')
  user_display = user.map(x => {
    return x[1] + x[0] + ' '
  })
  userbox.setLabel('user : (' + getscore(user) + ') ' + user_display)
  userbox.scroll(50)
  screen.render()
}
function showDealerCard(all) {
  dealercard = dealer.map(x => {
    return drawCard(`${x[1]}`, `${x[0]}`, 'black') + '\n'
  })
  dealer_display = dealer.map(x => {
    return x[1] + x[0] + ' '
  })
  all != 'all'
    ? (dealercard[0] = drawDeck(0) + '\n')
    : dealerbox.setLabel(
        'dealer : (' + getscore(dealer) + ') ' + dealer_display
      )
  dealerbox['content'] = dealercard.join('')
  dealerbox.scroll(50)
  screen.render()
}

function showAllDealerCard() {
  dealercard = dealer.map(x => {
    return drawCard(`${x[1]}`, `${x[0]}`, 'black') + '\n'
  })
  dealerbox['content'] = dealercard.join('')
  dealerbox.scroll(50)
  screen.render()
}

module.exports = {
  list
}
