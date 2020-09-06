(async ()=>{
   log = require('debug')("controller:mod:computer")
    const { computer: computerEvents } = require('./events.json')
    const { Console } = require('console')
    const loudness = require('loudness')
    const { eventBus } = global
    
    let systemVol  = await loudness.getVolume()
    
    eventBus.emit(computerEvents.settings,{vol:systemVol})
    eventBus.on(computerEvents.getVolume,()=>{
        eventBus.emit(computerEvents.getVolumeCalback, { vol: systemVol })
    })

    eventBus.on(computerEvents.setVolume, ({vol}) => {0
        systemVol= vol
        loudness.setVolume(+vol)
        // return the vol to the client
        eventBus.emit(computerEvents.getVolume,true)
    })



})()