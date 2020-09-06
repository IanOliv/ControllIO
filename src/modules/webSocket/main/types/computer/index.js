const log = require('debug')("controller:@computer")
const { _types } = require('./events.json')
const { computer: computer_types } = require('../../../../computer/events.json')
const {eventBus} = global



module.exports = async (socket)=>{


    socket.emit(_types.greetings,{data:"hellow"})
    eventBus.on(computer_types.getVolumeCalback,(vol)=>{
        socket.emit(computer_types.getVolume,{data:{...vol}})
    })
    eventBus.emit(computer_types.getVolume,true)

    socket.on(computer_types.setVolume,(data)=>{
        eventBus.emit(computer_types.setVolume,data)
    })
    
}