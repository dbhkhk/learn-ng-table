var app = angular.module('myApp', ['ngTable']);

app.controller('MainController', ['$scope', 'NgTableParams', function($scope, NgTableParams) {
  var data = [{name: "Moroni", age: 50} /*,*/];
  $scope.tableParams = new NgTableParams({}, { dataset: data });
}]);