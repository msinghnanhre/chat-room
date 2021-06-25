const { fstat } = require('fs');

const express = require('express')()
const app = require('http').createServer(express);
const fs = require("fs")
//const data = require("./data.json")
const io = require('socket.io')(app, {
    cors: {
        origin: '*',
    }
})

var obj = {
    table: []
};

io.on('connection', (socket) => {
    //console.log(socket.id)
    socket.on('message', payload => {

        socket.broadcast.emit('message', payload)
        //const newData = ({ id: socket.id, username: payload.username, message: payload.userMessage })

        // const stringData = JSON.stringify(newData);

        obj.table.push({ id: socket.id, username: payload.username, message: payload.userMessage });
        let json = JSON.stringify(obj)

        // const data = fs.readFile("./data.json", 'utf8')
        // console.log(data)
        fs.writeFile('./data.json', json, 'utf8', (err) => {
            if (err) {
                rej('could not write to file');
            } else {
                res('successfully updated tweets');
            }
        })
        fs.readFile('./data.json', 'utf8', function readFileCallback(err, data) {
            if (err) {
                console.log(err);
            } else {
                obj = JSON.parse(data); //now it an object
                obj.table.push({ id: 2, square: 3 }); //add some data
                json = JSON.stringify(obj); //convert it back to json
                fs.writeFile('myjsonfile.json', json, 'utf8', callback); // write it back 
            }
        });
    })
    // fs.wrtieFile
})

io.listen(8080, () => {
    console.log("listening at port 6000")
})

console.log("Server started")