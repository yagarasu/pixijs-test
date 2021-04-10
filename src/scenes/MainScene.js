import Scene from './Scene'

class MainScene extends Scene {
  constructor(game) {
    super(game)
    this.game = game
  }

  async preload() {
    // Use file loader to load some images
  }

  enter() {

  }

  tick(delta) {
    console.log('tick', delta)
  }

  exit() {

  }
}

export default MainScene
