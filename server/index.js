const express = require('express')()
const app = require('http').createServer(express);
const io = require('socket.io')(app, {
    cors: {
        origin: '*',
    }
})

const users = [
    {
        username: '',
        id: ''
    }
]

io.on('connection', (socket) => {
    console.log(socket.id)
    socket.on('message', payload => {
        console.log("message received ", payload)
        socket.broadcast.emit('message', payload)
    })
})

io.listen(8080, () => {
    console.log("listening at port 6000")
})

console.log("Server started")