app.controller('UserController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams){
	$scope.user = [];
	$scope.createUser = function(user) {
		$http({
			method: 'POST',
		  	url: '/user',
		  	params: user
		}).then(function successCallback(response) {
			
		}, function errorCallback(response) {
		    
		});
	};

	$scope.getUser = function() {
		$http({
			method: 'GET',
		  	url: '/user',
		}).then(function successCallback(response) {
			console.log(response.data);
			$scope.user = response.data;
		}, function errorCallback(response) {
		    
		});
	};


	$scope.deleteUser = function(id) {
		var data = {id: id};
		$http({
			method: 'DELETE',
		  	url: '/user',
		  	params: data
		}).then(function successCallback(response) {
			console.log(response.data);
			$scope.user = response.data;
		}, function errorCallback(response) {
		    
		});
	};
}]);