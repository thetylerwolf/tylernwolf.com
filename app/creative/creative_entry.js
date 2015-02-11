'use strict';

angular.module('tylerwolf.entry', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/creative/:id', {
    templateUrl: 'app/creative/creative_entry.html',
    controller: 'entryCtrl'
  });
}]).controller('entryCtrl',['$scope', '$routeParams', 'entries', function($scope, $routeParams, entries) {
    var id = $routeParams.id;
        entries.forEach(function(d) {
            if(d.id == id) $scope.entry = d
        });

    $scope.entry.op();
}])
