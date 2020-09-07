import debug from 'debug'
const { _types } = require('./events.json')
const { computer: computer_types } = require('@modules/computer/events.json')
const { eventBus } = global
const log = debug('controller:@computer')
export default async (socket) => {
  socket.emit(_types.greetings, { data: 'hellow' })
  eventBus.on(computer_types.getVolumeCalback, (vol) => {
    socket.emit(computer_types.getVolume, { data: { ...vol } })
  })
  eventBus.emit(computer_types.getVolume, true)

  socket.on(computer_types.setVolume, (data) => {
    eventBus.emit(computer_types.setVolume, data)
  })
}
