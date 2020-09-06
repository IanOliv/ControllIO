const io = require('socket.io-client');

const socket =io('http://localhost:3000?type=mouse')

socket.emit('mouse:up',{data:{x:100,y:200}})
