angular.module('app', [])
.controller('mainController', ["$scope", function($scope){

}])
.controller('testCtrl', ["$scope", function($scope){

			$scope.init2 = function(percentage, duration, repetition, returning)
			{
				$scope.duration = duration + "s";
				$scope.completionPercent = percentage;
				$scope.repeat = repetition;
				$scope.percent = percentage + "%";
				$scope.return = returning;
				$scope.interval = "0;" + $scope.completionPercent/100+ ";";

			};


	}])	.directive('pieChart', function() {
	  return {
	    restrict: 'E',
			controller: 'testCtrl',
	    templateUrl: 'circle.html',
	    scope: {
				duration: '@',
				completionPercent: '@',
				repeat: '@',
				returning: '@',
				interval: '@'
	    },

	    link: function(scope, elem, attrs) {

	      scope.$watch('returning', function(newValue, oldValue) {
					console.log();
					angular.element( document.querySelector( '#animation1' ) )[0].beginElement();
					angular.element( document.querySelector( '#animation2' ) )[0].beginElement();
				});

	    }
	  };
	});
