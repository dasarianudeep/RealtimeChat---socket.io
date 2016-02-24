/**
 * Created by Anudeep on 2/23/2016.
 */
(function(){
    angular.module('socketapp')
        .factory('UserService', UserService);

    function UserService(){

        var users = [{
            id:10001,
            username:'anudeepd',
            passwd:'pass',
            isAvailable:false
        },
            {
                id:10002,
                username:'sudeepv',
                passwd:'pass',
                isAvailable:false
            },
            {
                id:10003,
                username:'rishib',
                passwd:'pass',
                isAvailable:false
            },
            {
                id:10004,
                username:'praneethv',
                passwd:'pass',
                isAvailable:false
            },
            {
                id:10005,
                username:'neeleshn',
                passwd:'pass',
                isAvailable:false
            },{
                id:10006,
                username:'vikasv',
                passwd:'pass',
                isAvailable:false,
            },
            {
                id:10007,
                username:'kaushikv',
                passwd:'pass',
                isAvailable:false
            },
            {
                id:10008,
                username:'praneethb',
                passwd:'pass',
                isAvailable:false
            }];


        var userService = {
            getAllChatUsers : getAllChatUsers,
            authenticateUser:authenticateUser
        }

        return userService;
        /////////////////// Implementation Here ///////////////

        function getAllChatUsers(loggedUser){

            var chatusers = users.filter(function(user){

                return user.name !== loggedUser;
            });

            return chatusers;

        }

        function authenticateUser(username, passwd){

            var loggedUser = users.find(function(user){

                return user.username === username && user.passwd === passwd;
            });

            return loggedUser;
        }






    }

})();