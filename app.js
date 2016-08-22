'use strict';

// Declare app level module which depends on views, and components
angular.module('tylerwolf', [
  'ngRoute',
  'tylerwolf.intro',
  'tylerwolf.portfolio',
  'tylerwolf.about',
  'tylerwolf.creative',
  'tylerwolf.entry',
  'analytics'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});

}])
.run(function(analytics) {

  var navLi = document.getElementsByClassName('navbar-nav')[0].children;
  [].forEach.call(navLi, function(d) {
    d.onclick = function() {
        [].forEach.call(navLi, function(d) {
            d.className = '';
        })

        this.className = 'active';

    };
  });
});

angular.module('analytics', ['ng']).service('analytics', [
  '$rootScope', '$window', '$location', function($rootScope, $window, $location) {
    var track = function() {
      $window._gaq.push(['_trackPageview', $location.path()]);
      console.log('track', $location.path());
    };
    $rootScope.$on('$viewContentLoaded', track);
  }
]);
