'use strict';
angular.module('kantileverAngular')
    .controller('loginController', function ($scope, $location, $auth, toastr) {
    $scope.login = function () {
        $auth.login($scope.user)
            .then(function () {
            if ($auth.isAuthenticated()) {
                toastr.success('You have successfully signed in!');
                $location.path('/profile');
            }
            else {
                toastr.error('Whoops, wrong email or password!');
                $location.path('/login');
            }
        })
            .catch(function () {
            toastr.error('User already exists!');
        });
    };
});
//# sourceMappingURL=login.js.map