/**
 * Created by Anudeep on 2/23/2016.
 */
(function(){
    angular.module('socketapp')
        .controller('LoginController', ['$rootScope','$location','UserService',LoginController]);

    function LoginController($rootScope,$location,UserService){

        var vm = this;
        vm.isValidUser = true;

        vm.authenticateUser = function(){

            var authenticatedUser = UserService.authenticateUser(vm.username, vm.passwd);
            if(authenticatedUser)
            {
                //$rootScope.loggedUsername = authenticatedUser.username;
                //angular.module('socketapp').value('session_user', authenticatedUser.username);
                sessionStorage.setItem('user', JSON.stringify(authenticatedUser));
                console.log(JSON.parse(sessionStorage.getItem('user')));
                $location.path('/chatapp');

            }
            else {
                vm.isValidUser = false;
            }


        }

    }

})();