angular.module('conversionWidget', [])
.controller('mainController', ['$scope', 'rateCalculator', function($scope, rateCalculator) {
	//get list of supported currencies
	$scope.currencies = ['NGN', 'USD', 'EUR', 'GBP'];//using a dummy
	$scope.performCalculation = function() {
		if ($scope.fromAmount && $scope.fromCurrency && $scope.toCurrency && ($scope.fromCurrency!=$scope.toCurrency)) {
			$scope.toAmount = Math.floor($scope.fromAmount * rateCalculator($scope.fromCurrency, $scope.toCurrency) * 100)/100;
		} else {
			$scope.toAmount = '';
		}
	}
	//ensure one of the currency pairs is in Naira
	$scope.changeFromCurrency = function() {
		if ($scope.fromCurrency!="NGN" && $scope.fromCurrency!="") {
			$scope.toCurrency="NGN"
		}
	}
	$scope.changeToCurrency = function() {
		if ($scope.toCurrency!="NGN" && $scope.toCurrency!="") {
			$scope.fromCurrency="NGN"
		}
	}
}])
.directive('myConverter', function() {
  return {
    template:
    '<label>Convert From</label>'+
    '<select data-ng-model="fromCurrency" ng-init="fromCurrency = currencies[0]" ng-change="changeFromCurrency(); performCalculation()" data-ng-options="currency for currency in currencies">'+
	'</select>'+
	'<input type="number" ng-model="fromAmount" ng-change="performCalculation()">'+
	'<label>To</label>'+
	'<select data-ng-model="toCurrency" ng-change="changeToCurrency(); performCalculation()" data-ng-options="currency for currency in currencies">'+
	'</select>'+
	'<input type="text" ng-model="toAmount" readonly="readonly">'
  };
})
.factory('rateCalculator', function() {
	//use the currency pair and get the exchange rate (api  suggested)
	return function(fromCurrency, toCurrency) {
		switch(fromCurrency+"_"+toCurrency){
			//buy sell pair dummy
			case "NGN_USD":
				return (1/307);
				break;
			case "NGN_EUR":
				return (1/354);
				break;
			case "NGN_GBP":
				return (1/399);
				break;
			case "USD_NGN":
				return 305;
				break;
			case "EUR_NGN":
				return 353;
				break;
			case "GBP_NGN":
				return 398;
				break;
		}
	}
});