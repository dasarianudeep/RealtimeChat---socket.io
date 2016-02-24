/**
 * Created by Anudeep on 2/23/2016.
 */
var express = require('express'),
    app = express(),
    httpserver = require('http').Server(app),
    io = require('socket.io')(httpserver);

var websocket_clients = [];

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function(socket){
    console.log('client connected');
    console.log(socket.id);

    socket.on('join', function(data){
        console.log(data);
    });

    socket.on('chat_sent', function(data){

        console.log(data);
        io.emit('chat_display', data);
    });

    socket.on('disconnect', function(){
        console.log('client disconnected');
    })

});

httpserver.listen(8080, function(){
    console.log('Listening to port 8080');
});