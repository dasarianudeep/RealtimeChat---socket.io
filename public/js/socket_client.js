/**
 * Created by Anudeep on 2/24/2016.
 */
(function(){

    var socket = io();

    socket.emit('join', {user : JSON.parse(sessionStorage.getItem('user'))});

    $("#btn_msg").click(function(){

        socket.emit('chat_sent',{user:JSON.parse(sessionStorage.getItem('user')).chatname, message:$("#chat_input").val()});
        $("#chat_input").val('');


    });

    socket.on('chat_display', function(data){

        $("#chat_list").append("<li><h3 style='text-align: center'><b>: "+data.user+" "+data.message+"</b></h3></li>");
    });
})();