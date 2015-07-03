'use strict';

angular.module('tylerwolf.datastudio', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/datastudio', {
    templateUrl: 'app/datastudio/datastudio.html',
    controller: 'dataStudioCtrl'
  });
}])

.controller('dataStudioCtrl', ['$scope', function($scope) {

}]);