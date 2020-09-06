const log = require('debug')("controller:types:mouse")

const { mouse: mouseEvents } = require('../../../../mouse/events.json')
const { eventBus } = global

module.exports = (socket)=>{
    socket.on(mouseEvents.up, (data) => {
        console.log(' Up');
        eventBus.emit(mouseEvents.up,{data})
    })
    socket.on(mouseEvents.down, (e) => { 
        console.log(' Down');
        eventBus.emit(mouseEvents.up, e)
    })
    socket.on(mouseEvents.left, () => {
        console.log(' Left');
     })
    socket.on(mouseEvents.right, () => { 
        console.log(' Right');
    })


}