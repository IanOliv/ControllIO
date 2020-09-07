import debug from 'debug'
import loudness from 'loudness'
const { computer: computerEvents } = require('./events.json')

const { eventBus } = global

const log = debug('controller:mod:computer')

const main = async () => {
  let systemVol = await loudness.getVolume()

  eventBus.emit(computerEvents.settings, { vol: systemVol })
  eventBus.on(computerEvents.getVolume, () => {
    eventBus.emit(computerEvents.getVolumeCalback, { vol: systemVol })
  })

  eventBus.on(computerEvents.setVolume, ({ vol }) => {
    systemVol = vol
    loudness.setVolume(+vol)
    // return the vol to the client
    eventBus.emit(computerEvents.getVolume, true)
  })
}
main()
