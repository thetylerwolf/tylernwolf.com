'use strict';

angular.module('tylerwolf.works', ['ngRoute', 'analytics'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/works/:workId', {
    templateUrl: 'app/portfolio/works/works.html',
    controller: 'worksCtrl'
  });
}])

.controller('worksCtrl', ['$scope', function($scope) {


}])