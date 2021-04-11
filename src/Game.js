import Graphics from './Graphics'
import * as scenes from './scenes'

class Game {
  constructor() {
    this.graphics = new Graphics()
    this.running = false
    this.state = null
    this.states = {}
    this.statePreloading = false
    this.ts = null
    this.tick = this.tick.bind(this)
  }

  async init() {
    document.body.appendChild(this.graphics.getView())
    this.states = Object.keys(scenes).reduce((acc, sceneKey) => {
      return {
        ...acc,
        [sceneKey]: new scenes[sceneKey](this)
      }
    }, {})
    await Promise.all(Object.keys(this.states).reduce((acc, sceneKey) => {
      return [
        ...acc,
        this.states[sceneKey].preload()
      ]
    }, []))
    this.state = this.states.MainScene
  }

  async run() {
    console.log('running')
    await this.init()
    this.running = true
    window.requestAnimationFrame(this.tick)
  }

  stop() {
    console.log('stopping')
    this.running = false
    this.ts = null
    window.cancelAnimationFrame(this.tick)
  }

  setState(newState) {
    this.state.exit()
    newState.enter()
    this.state = newState
  }

  tick(ts) {
    if (this.state) {
      const delta = this.ts !== null ? ts - this.ts : 0
      this.ts = ts
      this.state.tick(delta)
    }
    if (this.running) {
      //window.requestAnimationFrame(this.tick)
    }
  }
}

export default Game
