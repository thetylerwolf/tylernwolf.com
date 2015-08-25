'use strict';

angular.module('tylerwolf.about', ['ngRoute', 'analytics'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'app/about/about.html',
    controller: 'aboutCtrl'
  });
}])

.controller('aboutCtrl', ['$scope', function($scope) {

}])

// .directive('twResume', ['Resume', function(Resume) {
//     return {
//         scope: {},
//         restrict: 'AE',
//         template: '<svg/>',
//         controller: function() {
//             d3.select('svg')
//                 .attr('width','100%')
//                 .attr('height','500px')
//                 ;
//         }
//     };
// }]);
