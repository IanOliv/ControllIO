const init = () => {
    const input = document.getElementById("volumeInput")
    const cliente = document.getElementById("ClientConnectedValue")
    let socket = io('http://localhost:3000/?type=ytmusic');
    console.log('AAAAA')

    socket.on('yt:outputChange', ({ volume }) => { input.value = volume })
    console.log('AAAAA')

    input.addEventListener('input', (e) => {
        console.log(e)
        socket.emit('ytmusic:changeOutputs', { type: e.type, volume: e.target.value })
    })

    document.querySelector('button#next').addEventListener('click', () => {
        socket.emit('ytmusic:changeOutputs', { type: 'dir', commd: 'next' })

    })
}

window.onload = init
