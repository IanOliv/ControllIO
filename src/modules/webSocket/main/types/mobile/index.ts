import debug from 'debug'
import ytMController from '../ytmusic'
const { _types } = require('./events.json')
const { _types: ytmusic_types } = require('../ytmusic/events.json')
const log = debug('controller:@mobile')

export default (socket) => {
  socket.join('mobile')
  socket.on(_types.greetings, (data) => {
    log('Mobile ')
    log(data)
    log('Mobile ')
  })
  socket.on(_types.outputChanges, (data) => {
    log('Mobile change outputs')
    log(data)
    socket
      .to('ytmusic')
      .emit(ytmusic_types.onOutputsChange, data)

    log('Mobile change outputs')
  })

  socket
    .in('mobile')
    .on('yt:outputChange', () => {
      console.log('ssss')
    })

  socket.emit(_types.greetings, 'Hello Listener mobile ')
}
