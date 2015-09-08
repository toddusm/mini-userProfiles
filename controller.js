var app = angular.module('userProfiles');

app.controller('mainController', function($scope, mainService){
	$scope.users = mainService.getUsers();
	console.log($scope.users);
})