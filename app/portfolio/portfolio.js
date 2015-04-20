'use strict';

angular.module('tylerwolf.portfolio', ['ngRoute', 'analytics'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/portfolio', {
    templateUrl: 'app/portfolio/portfolio.html',
    controller: 'portfolioCtrl'
  });
}])

.controller('portfolioCtrl', ['$scope', function($scope) {
    var showMe = 'twport!';
    // var user = '';
    var user = 'twport!';
    // user = window.prompt('Enter password');
    // user = 'twport!';

    if(user == showMe) {
        $scope.show = true;
    } else {
        $scope.hide = true;
    }

    $scope.visible = {};
    var visible = $scope.visible;

    $scope.toggleSection = function(sectionId) {
        visible[sectionId] = !visible[sectionId]
    };

    $scope.showing = function(sectionId) {
        return visible[sectionId];
    };

    $scope.showClass = function(sectionId) {
        return visible[sectionId] ? 'glyphicon glyphicon-chevron-down' : 'glyphicon glyphicon-chevron-right';
    };

}])