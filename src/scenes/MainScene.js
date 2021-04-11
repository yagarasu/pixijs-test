import Scene from './Scene'
import sprite from '../assets/sprite.png'

class MainScene extends Scene {
  constructor(game) {
    super(game)
    this.game = game
  }

  async preload() {
    // Use file loader to load some images
    await this.game.graphics.load([
      { name: 'sprite', url: sprite }
    ])
    console.log('>Loaded', this.game.graphics)
  }

  enter() {
    this.sprite = new PIXI.Sprite(this.game.graphics.getImage('sprite').texture)
    this.game.graphics.app.stage.add(this.sprite)
  }

  tick(delta) {
    console.log('tick', delta)
  }

  exit() {

  }
}

export default MainScene
