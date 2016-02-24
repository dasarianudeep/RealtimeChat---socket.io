/**
 * Created by Anudeep on 2/23/2016.
 */
(function(){
    angular.module('socketapp')
        .controller('ChatController', ['$rootScope','$scope','UserService','SocketService',ChatController]);

    function ChatController($rootScope,$scope,UserService, SocketService){

        var vm  = this;
        vm.loggedUsername = JSON.parse(sessionStorage.getItem('user'));
        vm.chatlist = UserService.getAllChatUsers(vm.loggedUsername.username);
        vm.sendMessage = function(){

            SocketService.sendMessage(vm.message);
            vm.message = '';
        }

        vm.notify = function(){

            SocketService.notify();
        }

        vm.hideNotification = function(){

            SocketService.hideNotification();
        }





    }
})();