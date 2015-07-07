'use strict';

angular.module('tylerwolf.intro', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app/intro/intro.html',
    controller: 'introCtrl'
  });
}])

.controller('introCtrl', ['$scope', function($scope) {
    var navLi = document.getElementsByClassName('navbar-nav')[0].children;
    [].forEach.call(navLi, function(d) {
        d.className = '';
    });
}]);