angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  console.log("ShortenController");
  $scope.link = { link: 'http://www.somelink.com' };
  $scope.addLink = function() {
    Links.post($scope.link).then(function(response) {
      console.log("POSTING LINK ", response);
      $scope.link = response.data;
    });
  };
});
