const log = require('debug')("controller:main")
const eventBus = require('./events.bus')
const loader = require('../modules/loader')

class Main{

    constructor(){
        global.eventBus = eventBus 
        loader()

    }


}
module.exports =Main