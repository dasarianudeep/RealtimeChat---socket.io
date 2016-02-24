/**
 * Created by Anudeep on 2/23/2016.
 */
(function(){
    angular.module('socketapp')
        .controller('ChatController', ['$rootScope','UserService',ChatController]);

    function ChatController($rootScope,UserService){

        var vm  = this;
        var loggedUser = JSON.parse(sessionStorage.getItem('user'));
        vm.chatlist = UserService.getAllChatUsers(loggedUser.username);

    }
})();