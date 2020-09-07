import debug from 'debug'
import robot from 'robotjs'
const { mouse: mouseEvents } = require('./events.json')
const log = debug('controller:mod:mouse')

class Mouse {
  constructor () {
    const { eventBus } = global
    eventBus.on(mouseEvents.up, ({ data: { x, y } }) => {
      robot.moveMouse(x, y)
    })
    eventBus.on(mouseEvents.down, () => {
      log('Its down')
    })
    eventBus.on(mouseEvents.left, () => {
      log('Its left')
    })
    eventBus.on(mouseEvents.right, () => {
      log('Its right')
    })
  }
}

export default new Mouse()
