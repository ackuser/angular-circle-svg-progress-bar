angular.module('app', [])
.controller('mainController', ["$scope", function($scope){


	$scope.init = function(percentage, duration, repetition, returning)
	{
		$scope.duration = duration + "s";
		$scope.completionPercent = percentage;
		$scope.repeat = repetition;
		$scope.percent = percentage + "%";
		$scope.return = returning;
		$scope.interval = "0;" + $scope.completionPercent/100+ ";";

	};


	$scope.submit = function() {
		alert($scope.completionPercent + " " + $scope.repeat + " " +
		$scope.duration + " " + $scope.return);
	};

	$scope.$watch('return', function(newValue, oldValue) {
		console.log(newValue);
		if (newValue === 'false')
			$scope.interval = "0;" + $scope.completionPercent/100+ ";";
		else
			$scope.interval = "0;" + $scope.completionPercent/100+ ";0;";
		console.log($scope.interval);
		angular.element($('#animation1')[0]).beginElement();
		angular.element($('#animation2')[0]).beginElement();
	});


}]);
