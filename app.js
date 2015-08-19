var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io')(server);
    
server.listen(process.env.PORT, process.env.IP);
//server.listen(8000);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
})

io.on('connection', function(socket){
    console.log("nuevo usuario")
    socket.on('sendMessage', function(data){
        console.log("nuevo mensaje")
        io.emit('newMessage', {msg: data});
    });
});

