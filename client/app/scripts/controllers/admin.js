'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of admin
 */
angular.module('yapp')
  .controller('AdminCtrl', function ($scope, $state, $http) {

    $scope.$state = $state;

    $scope.getDatabases = function(){
      $http({
        method: 'GET',
        url: 'http://localhost:5000/database'
      }).then(function successCallback(response) {
        $scope.databases = angular.fromJson(response.data.databases);
        console.log(response)
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log('Ups an error occurred while calling the backend!')
      });
    }

  });
