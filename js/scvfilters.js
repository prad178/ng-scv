angular.module('sciencvFilters', [])
.filter('decodeuri', function(){
	return function(input){
		return decodeURIComponent(input);
	};
});