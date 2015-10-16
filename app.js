angular.module('app', [])
.controller('mainController', ["$scope", function($scope){

}])
.controller('testCtrl', ["$scope", function($scope){

	$scope.graph= {};

	$scope.init2 = function(percentage, duration, repetition, returning)
	{
		var percent = percentage / 100;
		//console.log("Hello World");
		$scope.graph = {
			duration : duration + "s",
			completionPercent : percentage,
			repeat : repetition,
			percent : percentage + "%",
			returning : returning,
			interval : "0;" + percentage + ";0;"
		};
	};





}])	.directive('pieChart', function() {
	return {
		restrict: 'E',
		templateUrl: 'circle.html',
		scope: {
			duration: '=',
			percentage: '=',
			repeat: '=',
			returning: '='
		},

		link: function(scope, elem, attrs) {



			scope.$watch(function(){
				console.log(scope.returning);
				console.log(scope.duration);
				console.log(scope.percentage);
				if(scope.returning === 'true'){
					scope.interval = "0;" + scope.percentage / 100 + ";"
				}
				else{
					scope.interval = "0;" + scope.percentage / 100 + ";0;"
				}
				console.log(scope.interval);
				animateIt();
			}
		);

		function animateIt(){
			angular.element( document.querySelector( '#animation1' ) )[0].beginElement();
			angular.element( document.querySelector( '#animation2' ) )[0].beginElement();
		}

	}
};
});
