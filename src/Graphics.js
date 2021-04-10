import * as PIXI from 'pixi.js'

class Graphics {
  constructor() {
    this.app = new PIXI.Application({
      width: 720,
      height: 420,
      forceCanvas: true
    })
  }

  getView() {
    return this.app.view
  }

  load(images) {
    return new Promise(resolve => {
      images.forEach(image => PIXI.loader.add(image.name, image.url))
      PIXI.loader.load((loader, resources) => resolve(resources))
    })
  }
}

export default Graphics
