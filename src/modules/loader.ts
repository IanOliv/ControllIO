import debug from 'debug'
import { readdirSync } from 'fs'

const log = debug('controller:loader')

export default () => {
  const dir = readdirSync(__dirname)
  log(dir)
  dir
    .filter(file => file !== new RegExp(/[A-z]*\.(ts)/g).exec(__filename)[0])
    .map(contMod => {
      try {
        require(`./${contMod}`)
      } catch (error) {
        log(`Error trying to load the ${contMod} module`)
        log(error)
      }
    })

  // if (new RegExp(/[A-z]*\.(js)/g).exec(__filename)[0]!==dir[0]){
  //     log(new RegExp(/[A-z]*\.(js)/g).exec(__filename)[0] !== __filename)
  //     log(new RegExp(/[A-z]*\.(js)/g).exec(__filename) )
  //     log(__filename)
  //      throw new Error('this file cannot load this function')
  // }
}
