angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.search = '';
  $scope.getLinks = function(){
    Links.get().then(function(response) {
      $scope.data.links = response.data;
    });
  };
  $scope.getLinks();
});
