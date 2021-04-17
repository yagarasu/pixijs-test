import Scene from './Scene'
import sprite from '../assets/sprite.png'

class MainScene extends Scene {
  constructor(game) {
    super(game)
    this.game = game
    this.sprite = null
  }

  async preload() {
    await this.game.graphics.load([
      { name: 'sprite', url: sprite }
    ])
  }

  enter() {
    this.sprite = this.game.graphics.createSprite('sprite')
    this.game.graphics.app.stage.addChild(this.sprite)
    this.sprite.scale.set( 0.25, 0.25 )
    this.sprite.vx = 0.5
  }

  tick(delta) {
    this.sprite.x += this.sprite.vx * delta
  }

  exit() {
    this.game.graphics.app.stage.removeChild(this.sprite)
  }
}

export default MainScene
