import debug from 'debug'
// import store from './store'

const log = debug('controller:@default')

// const { _types } = require('./events.json')

// setInterval(() => {
//     log(store.getData())
// }, 5000)
export default (socket) => {
    log(socket.handshake.query)
    // const { title, url, name } = socket.handshake.query
    socket.emit('teste', 'ssssss')
    socket.emit('message', 'ssssss')

}
