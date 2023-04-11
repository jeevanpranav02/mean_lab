var app = angular.module('app', []);

app.controller('MainController', function ($scope, $http) {
    $scope.apiUrl = 'https://api.github.com/users/jeevanpranav02';

    $http.get($scope.apiUrl)
        .then(function (response) {
            $scope.post = response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
});
