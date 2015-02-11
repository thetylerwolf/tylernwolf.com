'use strict';

angular.module('tylerwolf.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'app/about/about.html',
    controller: 'aboutCtrl'
  });
}])

.controller('aboutCtrl', ['$scope', function($scope) {

}]);