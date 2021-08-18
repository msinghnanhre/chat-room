const express = require('express')
const app = express()
const http = require('http');
const server = http.createServer(app);
const fs = require("fs")

require("dotenv").config();
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "*",
    }
});
    

var obj = {
    message: []
};

var users = {
    name: []
}

io.on('connection', (socket) => {
    socket.id
    //socket.broadcast.emit("hello", "world")
    socket.on('message', payload => {
        socket.broadcast.emit('message', (payload))
        console.log(payload)
    })
    //socket.broadcast.emit('hi');
    socket.on("example", (data) => {
        console.log(data)
    })
    // welcome new user
    socket.emit('welcome', "Welcome to ChatApp");


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
    
    
})

server.listen(process.env.PORT, () => {
    console.log("listening at port 8080")
})
