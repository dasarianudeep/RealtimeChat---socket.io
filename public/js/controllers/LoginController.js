/**
 * Created by Anudeep on 2/23/2016.
 */
(function(){
    angular.module('socketapp')
        .controller('LoginController', ['$location','UserService',LoginController]);

    function LoginController($location,UserService){

        var vm = this;
        vm.isValidUser = true;

        vm.authenticateUser = function(){

            var authenticatedUser = UserService.authenticateUser(vm.username, vm.passwd);
            if(authenticatedUser)
            {
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