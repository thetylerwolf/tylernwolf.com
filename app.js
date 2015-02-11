'use strict';

// Declare app level module which depends on views, and components
angular.module('tylerwolf', [
  'ngRoute',
  'tylerwolf.intro',
  'tylerwolf.portfolio',
  'tylerwolf.about',
  'tylerwolf.contact',
  'tylerwolf.creative',
  'tylerwolf.entry'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});

  var navLi = document.getElementsByClassName('navbar-nav')[0].children;
  [].forEach.call(navLi, function(d) {
    d.onclick = function() {
        [].forEach.call(navLi, function(d) {
            d.className = '';
        })

        this.className = 'active';
        
    };
  });
}]);
