app.controller('HomeController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams){
	$scope.user = [];
	$scope.createUser = function(user) {
		console.log(user);
		$http({
			method: 'POST',
		  	url: '/user',
		  	params: user
		}).then(function successCallback(response) {
			$scope.user = response.data;
		}, function errorCallback(response) {
		    
		});
	};
}]);