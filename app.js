/**
 * Created by Anudeep on 2/23/2016.
 */
var express = require('express'),
    app = express(),
    httpServer = require('http').Server(app),
    io = require('socket.io')(httpServer);



app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function(){
    console.log('client connected');
});

app.listen(8080, function(){
    console.log('Listening to port 8080');
});