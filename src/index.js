import Game from './Game'

const game = new Game()
window.game = game

game.run()
window.setTimeout(() => {
  game.stop()
}, 1000)
