import debug from 'debug'
import { readdirSync } from 'fs'

const log = debug('controller:websocket:types')

const types = {}

const dir = readdirSync(__dirname)
log(dir)
dir
  .filter(file => {
    log(file)
    return file !== new RegExp(/[A-z]*\.(ts)/g).exec(__filename)[0]
  })
  .map(contMod => {
    try {
      types[contMod] = require(`./${contMod}`)
      log(`type loaded ${contMod}`)
    } catch (error) {
      log(error)
      log(`Error trying to load the ${contMod} module`)
    }
  })

export default types
