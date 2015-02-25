'use strict';

angular.module('tylerwolf.contact', ['ngRoute', 'analytics'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'app/contact/contact.html',
    controller: 'contactCtrl'
  });
}])

.controller('contactCtrl', ['$scope', function($scope) {

}]);