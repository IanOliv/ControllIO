const log = require('debug')("controller:websocket:types")
const { readdirSync } = require('fs');


const types = {}

const dir = readdirSync(__dirname)

dir
.filter(file => file !== new RegExp(/[A-z]*\.(js)/g).exec(__filename)[0])
.map(contMod => {
        try {
            types[contMod]=require(`./${ contMod }`)
            log(`type loaded ${contMod}`)      
        } catch (error) {
            log(error)
            log(`Error trying to load the ${ contMod } module`)
        }
})



module.exports = types