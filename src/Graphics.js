import * as PIXI from 'pixi.js'
import { Loader } from '@pixi/loaders'

class Graphics {
  constructor() {
    this.app = new PIXI.Application({
      width: 720,
      height: 420,
      forceCanvas: true
    })
    this.loader = new Loader()
  }

  getView() {
    return this.app.view
  }

  load(images) {
    return new Promise(resolve => {
      images.forEach(image => this.loader.add(image.name, image.url))
      this.loader.load((loader, resources) => resolve(resources))
    })
  }

  getImage(name) {
    return this.loader.resources[name]
  }

  createSprite(name) {
    return new PIXI.Sprite(this.getImage(name).texture)
  }
}

export default Graphics
