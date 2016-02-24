/**
 * Created by Anudeep on 2/24/2016.
 */
(function(){

    angular.module('socketapp')
        .factory('SocketService', ['UserService',SocketService]);


    function SocketService(UserService){

        var socket = io(),
            chatusers = [];
        socket.emit('join', {user : JSON.parse(sessionStorage.getItem('user'))});

        socket.on('chat_display', function(data){

            $("#chat_list").append("<li><h3 style='text-align: center'><b><i> "+data.user+" </i>:"+data.message+"</b></h3></li>");
        });

        //socket.on('update_availability', function(clientids){
        //
        //            clientids.forEach(function(clientid){
        //                UserService.users.find(function(user){
        //                    console.log('hello');
        //                    return user.id === clientid;
        //                }).isAvailable = true;
        //            });
        //           // chatusers = UserService.chatusers;
        //})

        socket.on('update_availability',function(clientids){
            console.log('hey avail');

            clientids.forEach(function(clientid){
                $("#"+clientid).removeClass('label-default').addClass('label-success');
                $("#"+clientid).text('ONLINE');
            })


        })
        var socketService = {
            sendMessage : sendMessage


        }

        return socketService;
        ///////////////// Implementation Here /////////////////
        function sendMessage(msg){

            socket.emit('chat_sent', {user:JSON.parse(sessionStorage.getItem('user')).chatname,message:msg})
        }




    }

})();