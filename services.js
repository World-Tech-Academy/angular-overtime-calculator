(function(){
	angular.module('overtime')
		.factory('calculator', function(){
			var service = {
				calcPaymentDue: calcPaymentDue
			};
			return service;

			function calcPaymentDue(hours,rate){
				return hours <= 40 ? hours * rate : 40 * rate + ((hours - 40) * rate * 1.5);
			}
		});
})();
