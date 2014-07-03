angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.loading = false;
  $scope.addLink = function() {
    $scope.loading = true;
    Links.post($scope.link).then(function(response) {
      console.log("LINK ADDED ", response);
      $scope.loading = false;
    });
  };
});
