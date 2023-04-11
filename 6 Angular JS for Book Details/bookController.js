var app = angular.module('app', []);

app.controller('BookController', function ($scope) {
    $scope.book = {
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        isbn: '0316769177',
        available: true,
        issued: false,
    };
});
