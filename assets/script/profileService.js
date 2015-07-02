angular.module('profileApp.profileServices', [])
.service('ProfileServices',["$resource", function($resource){
return{
/*Method for getting personal detail JSON file*/
	getPersonalDetail : function(){
		return $resource("data/personalDetail.json")
	},
/*Method for getting professional detail JSON file*/
	getProfessionalDetail : function(){
		return $resource("data/professionalDetail.json")
	}
}
}]);