var app = angular.module('app', []);

app.controller('ScoreController', function ($scope) {
    $scope.teams = [{
        name: 'India',
        score: 0,
        overs: 0
    }, {
        name: 'Australia',
        score: 0,
        overs: 0
    }];

    $scope.addRun = function (team) {
        if ($scope.runs !== null) {
            team.score += $scope.runs;
            team.overs += 0.1;
            $scope.runs = null;
        }
    };
});
