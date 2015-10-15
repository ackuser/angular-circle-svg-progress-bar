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
	  var html =
	    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">' +
	          '<linearGradient id="lg" x1="0.5" y1="1" x2="0.5" y2="0">' +
						'<stop stop-opacity="1" stop-color="royalblue"/>' +
						'<stop  stop-opacity="1" stop-color="royalblue">' +
						'<animate id="animation1" attributeName="offset" values="{{interval}}" repeatCount={{repeat}} dur="{{duration}}" repeatDur="00:30" begin="0s"/>' +
						'</stop>' +
						'<stop  stop-opacity="0" stop-color="royalblue">' +
						'<animate id="animation2" attributeName="offset" values="{{interval}}" repeatCount={{repeat}} dur="{{duration}}" repeatDur="00:30" begin="0s"/>' +
						'</stop>' +
						'<stop stop-opacity="0" stop-color="royalblue"/>' +
						'</linearGradient>' +
						'<circle cx="50" cy="50" r="45" fill="url(#lg)" stroke="crimson" stroke-width="5"/>' +
						'<text x="50" y="50" font-family="sans-serif" font-size="20px" text-anchor="middle" fill="red">{{completionPercent}} %</text>' +
						'</svg>';

	  return {
	    restrict: 'E',
			controller: 'testCtrl',
	    template: html,
	    scope: {
				duration: '@',
				completionPercent: '@',
				repeat: '@',
				returning: '@',
				interval: '@'
	    },

	    link: function(scope, elem, attrs) {

	      scope.$watch('scope', function(newValue, oldValue) {
					angular.element( document.querySelector( '#animation1' ) )[0].beginElement();
					angular.element( document.querySelector( '#animation2' ) )[0].beginElement();
				});

	    }
	  };
	});
