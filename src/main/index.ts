import eventBus from './events.bus'
import loader from '../modules/loader'
import debug from 'debug'

const log = debug('controller:main')

class Main {
  constructor () {
    global.eventBus = eventBus
    loader()
  }
}
export default Main
