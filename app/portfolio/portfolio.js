'use strict';

angular.module('tylerwolf.portfolio', ['ngRoute', 'analytics'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/portfolio', {
    templateUrl: 'app/portfolio/portfolio.html',
    controller: 'portfolioCtrl'
  }).when('/portfolio/:workId', {
    templateUrl: 'app/portfolio/works/works.html',
    controller: 'workCtrl'
  });
}])

.controller('portfolioCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.show = true;

    $scope.filters = $rootScope.filters || [{
        name: 'Design',
        value: 'design',
        selected: false
    },{
        name: 'Software',
        value: 'software',
        selected: false
    },{
        name: 'UX/UI Design',
        value: 'ux',
        selected: false
    },{
        name: 'Data Visualization',
        value: 'dataviz',
        selected: false
    }];

    $scope.selectedFilters = $scope.filters.filter(function(d) {
        return d.selected;
    });

    $scope.filterClick = function(filter) {
        filter.selected = !filter.selected;
        $scope.selectedFilters = $scope.filters.filter(function(d) {
            return d.selected;
        });
        $rootScope.filters = $scope.filters;
    };

    $scope.filterLeave = function(filter) {
        filter.hover = false;
    };

    $scope.portFilters = function(o) {
        var show = false;
        var selectedFilters = $scope.selectedFilters || $scope.filters;

        if($scope.filters.every(function(d) { return !d.selected; })) {
            return true;
        } else {
            show = selectedFilters.every(function(d) {
                return o.types.indexOf(d.value) !== -1
            });
        }
        return show;
    };

    $scope.works = [{
        title: 'Top UX Words of 2016',
        types: ['design','software', 'dataviz'],
        thumbnail: 'ux_words.png',
        id: 'uxwords'
    },{
        title: 'Correlation-Dispersion Data Visualization',
        types: ['design','software', 'dataviz'],
        thumbnail: 'corrdisp_viz.png',
        id: 'corrdisp'
    },{
        title: 'E*Trade Financial',
        types: ['design', 'ux'],
        thumbnail: 'etrade_thumbnail.png',
        id: 'etrade'
    },{
        title: 'The Garden for Cardboard',
        types: ['design','software'],
        thumbnail: 'thegarden_thumbnail.png',
        id: 'thegarden'
    },{
        title: 'tylernwolf.com',
        types: ['ux','design','software'],
        thumbnail: 'tylernwolf_thumbnail.png',
        id: 'tylernwolf'
    },{
        title: '2048',
        types: ['design','software'],
        thumbnail: '2048_thumbnail.png',
        id: '2048'
    },{
        title: 'Sketch Data Studio',
        types: ['software'],
        thumbnail: 'datastudio_thumbnail.png',
        id: 'datastudio'
    },{
        title: 'Risk Simulation Equalizer',
        types: ['ux','software','dataviz'],
        thumbnail: 'equalizer_thumbnail.png',
        id: 'equalizer'
    },{
        title: 'Financial Heatmap',
        types: ['ux','software','dataviz','design'],
        thumbnail: 'heatmap_thumbnail.png',
        id: 'heatmap'
    },{
        title: 'Novus',
        types: ['ux','software','dataviz'],
        thumbnail: 'novus_thumbnail.png',
        id: 'novus'
    },{
        title: 'NVD3',
        types: ['software','dataviz'],
        thumbnail: 'nvd3_thumbnail.png',
        id: 'nvd3'
    }];

}])

.controller('workCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {

}])
.directive('twWork', ['$routeParams', function($routeParams) {
    return {
        // scope: {},
        restrict: 'AE',
        templateUrl: function() {
            return 'app/portfolio/works/' + $routeParams.workId + '.html';
        },
        controller: function() {
        }
    };
}]);
