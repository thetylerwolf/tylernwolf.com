'use strict';

angular.module('tylerwolf.intro', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app/intro/intro.html',
    controller: 'introCtrl'
  });
}])

.controller('introCtrl', ['$scope', function($scope) {

}]);