'use strict';

angular.module('tylerwolf.entry', ['ngRoute', 'analytics'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/creative/:id', {
    templateUrl: 'app/creative/creative_entry.html',
    controller: 'entryCtrl',
  });
}]).controller('entryCtrl',['$scope', '$routeParams', '$interval', 'entries', function($scope, $routeParams, $interval, entries) {
    var id = $routeParams.id;
        entries.forEach(function(d) {
            if(d.id == id) $scope.entry = d
        });

    $scope.interval = $scope.entry.op();

    $scope.$on('$destroy', function() {
        $interval.cancel($scope.interval);
    });
}])
