angular.module('kantileverAngular').controller('loginController', function ($scope, $location, $auth, toastr) {
    $scope.login = function () {
        console.info('test');
        console.info($scope.user);
        $auth.login($scope.user);
        //  .then(function () {
        toastr.success('You have successfully signed in!');
        $location.path('/');
        //  })
        //  .catch(function (error) {
        //  toastr.error(error.data.message, error.status);
        //  });
    };
});
//# sourceMappingURL=login.js.map