console.log = require('debug')("controller:mod:websocket")
const {_types} = require('./events.json')
const types =require('./types')
const infos = require('./modules/infos')



// setInterval(()=>{

//     console.log(infos.getData())


// },5000)

function IO (socket){  
    try {
        console.log(`A cliet has connected ${ socket.id}`)
        socket.emit(_types.get)


        /** 
         * Default events 
         */
        
        socket.on("log", (e) => {
            // console.log(e);
        })
    
    

        socket.on('disconnect', () => {
            console.log(`client disconnected ${socket.id}`);
            infos.removeUser(socket.id)
            infos.removeType(socket.id)
        });
        /**
         * Types events
         */


        const {handshake :{query:{type}}}= socket
        infos.addUser(({ id: socket.id, type }))
        infos.addType(({ id: socket.id, type }))


        types[type](socket)

    } catch(e){
        //TODO: Implement client listener 4 errors
        socket.emit(_types.error,"something went wrong")
        console.log('Deu  Erro')
    }


}

module.exports = IO