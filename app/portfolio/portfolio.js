'use strict';

angular.module('tylerwolf.portfolio', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/portfolio', {
    templateUrl: 'app/portfolio/portfolio.html',
    controller: 'portfolioCtrl'
  });
}])

.controller('portfolioCtrl', ['$scope', function($scope) {
    var showMe = 'twport!';
    var user = '';
    
    user = window.prompt('Enter password');

    if(user == showMe) {
        $scope.show = true;
    } else {
        $scope.hide = true;
    }

}])