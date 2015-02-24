'use strict';

angular.module('tylerwolf.creative', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/creative', {
    templateUrl: 'app/creative/creative.html',
    controller: 'creativeCtrl'
  });
}])

.controller('creativeCtrl', ['$scope', 'entries', function($scope, entries) {
    $scope.entries = entries;
    if(window.leftInt) $interval.cancel(window.leftInt)

    $scope.enter = function($event) {
        render.stop = false;
        var xPos = $scope.scale.x(60);
        var yPos = $scope.scale.y($event.currentTarget.offsetTop + 32);
        positionCube(xPos,yPos);
        $scope.cube.visible = true;
    };

    $scope.leave = function() {
        $scope.cube.visible = false;
        render.stop = true;
    };

    function positionCube(x,y) {
        $scope.cube.position.x = x;
        $scope.cube.position.y = y;
    }

    function setupCanvasScale() {
        $scope.scale = {};
        $scope.scale.x = d3.scale.linear()
            .domain([0,window.innerWidth])
            .range([-window.innerWidth/2,window.innerWidth/2])
            ;
        $scope.scale.y = d3.scale.linear()
            .domain([0,window.innerHeight])
            .range([window.innerHeight/2,-window.innerHeight/2])
            ;
    }

    function setupThree() {
        var scene = new THREE.Scene();
        // var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        var camera = new THREE.OrthographicCamera( window.innerWidth/-2, 
            window.innerWidth/2,
            window.innerHeight/2,
            window.innerHeight/-2, -200, 500 );

        var c = angular.element('canvas');
        var renderer = new THREE.WebGLRenderer({
            canvas: c[0], 
            alpha:true, 
            antialias: true 
        });

        renderer.setSize( window.innerWidth, window.innerHeight );
        // renderer.setSize( 105, window.innerHeight );
        renderer.setClearColor( 0xffffff, 1 );

        var geometry = new THREE.BoxGeometry( 40,40,40 );


        var mapHeight = THREE.ImageUtils.loadTexture( "3d/gold_cubeBump copy.png" );

        mapHeight.anisotropy = 4;
        mapHeight.repeat.set( 0.998, 0.998 );
        mapHeight.offset.set( 0.001, 0.001 )
        mapHeight.wrapS = mapHeight.wrapT = THREE.RepeatWrapping;
        mapHeight.format = THREE.RGBFormat;

        var material = new THREE.MeshPhongMaterial( { 
            metal: true,
            ambient: 0xAA7E0A,
            color: 0xAA7E0A,
            specular: 0xe1ae00,
            shininess: 60,
            bumpMap: mapHeight, 
            bumpScale: 0.2, 
        });

        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

        // create a point light
        var pointLights = []
        pointLights[0] = new THREE.PointLight(0xFFFFFF);
        pointLights[1] = new THREE.PointLight(0xFFF8F8);
        pointLights[2] = new THREE.PointLight(0xF8F8FF);

        // set its position
        pointLights[0].position.x = 60 + window.innerWidth/-2;
        pointLights[0].position.y = window.innerHeight/2;
        pointLights[0].position.z = 130;
        pointLights[0].intensity = 0.6

        pointLights[1].position.x = window.innerWidth/-2;
        pointLights[1].position.y = window.innerHeight/3;
        pointLights[1].position.z = 130;

        pointLights[2].position.x = window.innerWidth/-3;
        pointLights[2].position.y = window.innerHeight/-3;
        pointLights[2].position.z = 130;

        // add to the scene
        pointLights.forEach(function(l,i) {
            scene.add(l);
        });

        camera.position.z = 100;

        $scope.scene = scene;
        $scope.camera = camera;
        $scope.renderer = renderer;
        $scope.geometry = geometry;
        $scope.material = material;
        $scope.cube = cube;

        cube.visible = false
    }

    function render() {
        requestAnimationFrame( render );

        // when stop is set, render one more frame
        if(render.stop == 'now') return;
        if(render.stop) render.stop = 'now';

        var cube = $scope.cube;
        var renderer = $scope.renderer;
        var scene = $scope.scene;
        var camera = $scope.camera;

        cube.rotation.x += 0.04;
        cube.rotation.y += 0.04;

        renderer.render(scene, camera);
    };

    setupCanvasScale();
    setupThree();
    render();


}]);