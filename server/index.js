
const express = require('express')
const app = express()
const server = require('http').createServer(app);
const fs = require("fs")
const io = require('socket.io')
(server, {
    cors: {
        origin: '*',
    }
})

var obj = {
    message: []
};

var users = {
    name: []
}

io.on('connection', (socket) => {
    socket.on('message', payload => {
        socket.broadcast.emit('message', (socket.id, payload))
        // write messages to messages.json
        // fs.readFile('./data/messages.json', 'utf8', function readFileCallback(err, data) {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         obj = JSON.parse(data)
        //         obj.message.push({ id: socket.id, message: payload.userMessage }); //add some data
        //         json = JSON.stringify(obj, null, 2); //convert it back to json
        //         fs.writeFile('./data/messages.json', json, 'utf8', (err) => {
        //             if (err) {
        //                 rej('could not write to file');
        //             } else {
        //                 res('successfully updated messages');
        //             }
        //         })
        //     }
        // });
    })

    // welcome new user
    socket.emit('welcome', "Welcome to ChatApp");

    //broadcast when user connects
 
    //socket.broadcast.emit('welcome', 'A user joined the chat')
 

    //add user names from log in page
    socket.on('login', (newUser) => {
        console.log(newUser)
        fs.readFile('./data/users.json', 'utf8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                users = JSON.parse(data)
                users.name.push(newUser); //add some data
                userList = JSON.stringify(users, null, 2); //convert it back to json
                fs.writeFile('./data/users.json', userList, 'utf8', (err) => {
                    if (err) {
                        rej('could not write to file');
                    } else {
                        res('successfully updated messages');
                    }
                })
            }
        });   
    })

    //say bye to disconnected user 
    socket.on('disconnect', () => {
        io.emit('finalMessage', "User has left the chat")
    })
})

server.listen(8080, () => {
    console.log("listening at port 8080")
})

console.log("Server started")