import debug from 'debug'
import express from 'express'
import { createServer, Server } from 'http'
import socketIo from 'socket.io'
import cors from 'cors'
import main from './main'

const { mouse: mouseEvents } = require('@modules/mouse/events.json')
const { eventBus } = global

const log = debug('controller:mod:websocket')

/**
 *  TODO: do a func that load all the events files ,
 *  TODO:...and  load in memory
 */

class App {
    public app: express.Application;
    public server: Server;
    private io: SocketIO.Server;
    public PORT: number = 8100;

    constructor() {
        this.routes() 
        this.sockets()
        this.listen()
    }

    routes() {
        this.app = express()
        this.app.route('/').get((req, res) => {
            res.sendFile(__dirname + '/public/index.html')
        })
        this.app.route('/js/main.js').get((req, res) => {
            res.sendFile(__dirname + '/public/js/main.js')
        })
    }

    private sockets(): void {
        this.server = createServer(this.app)
        this.io = socketIo(this.server)
    }

    private listen(): void {
        this.io.on('connection', main)
    }
}

new App().server.listen(3030, () => {
    log('Server is runing')
})
