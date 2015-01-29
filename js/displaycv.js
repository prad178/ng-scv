(function(){
	var app = angular.module('sciencv', ['sciencvFilters']);
	app.controller('personalInformation', function($http){
		this.data;
		this.name='aaaa';
		var that = this;
		var responsePromise = $http.get("services/identification.json", {});
		responsePromise.success(function(data, status, headers, config){
			that.displayData = data;
		});
		responsePromise.error(function(data, status, header, config){
			alert('sorry!');
		});
	});
})();