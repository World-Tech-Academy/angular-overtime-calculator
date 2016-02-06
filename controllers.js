(function(){
	angular.module('overtime')
		.controller('overtime', function(calculator){
			var self = this;

			self.calcPaymentDue = calcPaymentDue;

			self.hours = 40;
			self.rate = 20;
			self.due = 800;

			function calcPaymentDue(){
				self.due = calculator.calcPaymentDue(self.hours,self.rate);
			}
		});
})();
