import debug from 'debug'

import types from './types/index'
import infos from './modules/infos'
import { Socket } from 'socket.io'

const { _types } = require('./events.json')

const log = debug('controller:mod:websocket')
// setInterval(()=>{

//     log(infos.getData())

// },5000)

const io = (socket:Socket) => {
  try {
    log(`A cliet has connected ${socket.id}`)
    socket.emit(_types.get)

    /**
         * Default events
         */

    socket.on('log', (e) => {
      // log(e);
    })

    socket.on('disconnect', () => {
      log(`client disconnected ${socket.id}`)
      infos.removeUser(socket.id)
      infos.removeType(socket.id)
    })
    /**
         * Types events
         */

    const { handshake: { query: { type } } } = socket
    infos.addUser(({ id: socket.id, type }))
    infos.addType(({ id: socket.id, type }))

    types[type].default(socket)
  } catch (e) {
    // TODO: Implement client listener 4 errors
    socket.emit(_types.error, 'something went wrong')
    log('Deu  Erro')
    log(e)
  }
}

export default io
