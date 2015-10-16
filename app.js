angular.module('app', [])
.controller('mainController', ["$scope", function($scope){

}])
.controller('testCtrl', ["$scope", function($scope){

	$scope.graph= {};

	//console.log($scope.graph);
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
		//template: html,
		//controller: 'testCtrl',
		templateUrl: 'circle.html',
		scope: {
			duration: '=',
			percentage: '=',
			repeat: '=',
			returning: '=',
			interval: '='
		},

		link: function(scope, elem, attrs) {



			/*scope.$watch('returning', function(newValue, oldValue) {
			scope.interval = '0;34;0;';
			scope.repeat = 'indefinite';
			scope.duration = '3s';
			scope.completionPercent = '74';
		});*/
		//	*/

		scope.$watch(function(){
			console.log(scope.duration);
			console.log(scope.percentage);
			scope.interval = "0;" + scope.percentage / 100 + ";0;"
			if(scope.returning === 'false'){
				//scope.graph.interval = "0;" + scope.graph.completionPercent/100+ ";";
				//console.log(scope.graph.interval);
			}
			else{
				//scope.graph.interval = "0;" + scope.graph.completionPercent/100+ ";0;";
				//console.log(scope.graph.completionPercent);
				console.log(scope.interval);
			}
			angular.element( document.querySelector( '#animation1' ) )[0].beginElement();
			angular.element( document.querySelector( '#animation2' ) )[0].beginElement();
		},
		animateIt
		);

		function animateIt(){
			//angular.element( document.querySelector( '#animation1' ) )[0].beginElement();
			//angular.element( document.querySelector( '#animation2' ) )[0].beginElement();
		}

	}
};
});
