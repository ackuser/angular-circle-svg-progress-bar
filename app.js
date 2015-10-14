angular.module('app', [])
.controller('mainController', ["$scope", function($scope){


	$scope.init = function(percentage, duration, repetition)
	{
		$scope.duration = duration;
		$scope.completionPercent = percentage;
		$scope.repeat = repetition;
		$scope.percent = percentage + "%";
	};


	$scope.submit = function() {
		alert($scope.completionPercent + " " + $scope.repeat + " " + $scope.duration);
	};

	$scope.$watch(function() {
		return $scope.repeat;
	}, function(newValue, oldValue) {
		console.log("change detected: " + newValue)
	});



}]);
