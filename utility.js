function getscore(user) {
  return user.reduce((total, current) => {
    return total + current[2]
  }, 0)
}
function endGame(userScore, dealerScore) {
  if (userScore > dealerScore) return 'Game Over ----You win----'
  else if (userScore < dealerScore) return 'Game Over ----You Lose----'
  else return 'Game Over ----Draw----'
}
function checkCard(card) {
  return card >= 21 ? true : false
}

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

function a_value(user) {
  if (getscore(user) > 21) {
    for (let card of user) {
      if (card[2] == 11) {
        card[2] = 1
        if (getscore(user) < 21) {
          break
        }
      }
    }
  }
}

module.exports = {
  getscore,
  endGame,
  checkCard,
  sleep,
  a_value
}
