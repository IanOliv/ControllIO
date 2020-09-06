const app = require('express')();
console.log = require('debug')("controller:mod:websocket")
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors')
const { mouse: mouseEvents } = require('../mouse/events.json')
const { eventBus } = global
const main =require('./main')





/**
 *  TODO: do a func that load all the events files ,
 *  TODO:...and  load in memory
 */

io.on("connection",main)

// io.on('connection', (socket) => {
//     console.log('a client has connected');
//     socket.on(mouseEvents.up,(data)=>{
//         console.log(' Up');
//         eventBus.emit(mouseEvents.up,212231)
//     })
//     socket.on(mouseEvents.down, (e) => { 
//         console.log(' Down');
//         eventBus.emit(mouseEvents.up, e)
//     })
//     socket.on(mouseEvents.left, () => {
//         console.log(' Left');
//      })
//     socket.on(mouseEvents.right, () => { 
//         console.log(' Right');
//     })

//     socket.on("log", (e) => {
//         console.log(e);
//     })



//     socket.on('disconnect', () => {
//         console.log('client disconnected');
//     });
// });

app.use(cors())
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});