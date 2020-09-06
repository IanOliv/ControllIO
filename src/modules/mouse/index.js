const log = require('debug')("controller:mod:mouse")
const {mouse:mouseEvents}= require('./events.json')
var robot = require("robotjs");
class Mouse {
    constructor(){
        const {eventBus} =global
        eventBus.on(mouseEvents.up, ({ data:{x,y} })=>{
        //     log("Its up ")
            // log(data)[{ distance, currentDirection}]

        //     log(distance)
        //     log(currentDirection)

        // const {x,y}= robot.getMousePos()
        // const nX =x+(distance* Math.cos(currentDirection))
        // const nY =y+ (distance * Math.sin(currentDirection))
        //     log(nX)
        //     log(nY)
                // log(robot.getMousePos()
                
            robot.moveMouse(x, y)
                // log(robot.getMousePos())
            


        }) 
        eventBus.on(mouseEvents.down, () => {
            log("Its down")
        }) 
        eventBus.on(mouseEvents.left, () => {
            log("Its left")
        }) 
        eventBus.on(mouseEvents.right, () => {
            log("Its right")
        }) 
    }

}


module.exports  = new Mouse()