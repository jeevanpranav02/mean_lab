var app = angular.module('app', []);

app.controller('TodoController', function ($scope) {
    $scope.today = new Date();
    $scope.todos = [];

    $scope.addTodo = function () {
        if ($scope.newTodoText !== '') {
            $scope.todos.push({
                text: $scope.newTodoText,
                done: false
            });
            $scope.newTodoText = '';
        }
    };
});
