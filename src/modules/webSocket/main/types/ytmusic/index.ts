import debug from 'debug'
import store from './store'

const log = debug('controller:@ytmusic')

const { _types } = require('./events.json')

// setInterval(() => {
//     log(store.getData())
// }, 5000)
export default (socket) => {
    log(socket.handshake.query)
    const { title, url, name } = socket.handshake.query

    store.addClient({
        id: socket.id,
        playing: title,
        url: url
    })
    socket.join('ytmusic')
    socket.join('mobile')
    socket.on(_types.isListen, (data) => {
        log('heloo')
        log(data)
        log('heloo')
    })
    socket.on(_types.onOutputsChange, (data) => {
        log('Outputs Change')
        log(data)
        socket
            .in('mobile')
            .emit('yt:outputChange', data)

        log('Outputs Change')
    })

    socket.on('disconnect', (data) => {
        console.log('ytdisconnecte')
        console.log(socket.id)
        store.removeClient(socket.id)
        console.log('ytdisconnecte')
    })

    socket.emit(_types.greetings, 'Hello Listener ')
    name && socket.emit(_types.getOthersClients, store.listOthersClients(socket.id))
}
