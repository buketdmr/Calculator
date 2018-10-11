var endpoint = "https://api.exchangeratesapi.io/latest?base=";

var app = angular.module('MyStart', []);
app.controller('MainController', function($scope, $http){
   
    //let sTime = mday.toLocaleTimeString();

    $scope.currencies = ['Select','GBP', 'EUR', 'USD','TRY', 'BRL', 'CAD', 'AUD', 'EGP', 'JPY', 'CNY', 'AED'];
    
        $scope.str = "Currency rates from 'https://api.exchangeratesapi.io' by date: " ;  
        $scope.InCurr ="Select";
        $scope.OutCurr="Select";
      
       $scope.sorgula = function(){
           
        sTime = new Date();
        $scope.sTime = sTime.toLocaleTimeString();

        var urlm = endpoint + this.InCurr

        var onUserComplete = function (response){
             $scope.user = response.data;
         };
     
         var onError = function(reason)
         {
             $scope.error ="Could not found"
         }; 
            
         $http.get(urlm)
             .then(onUserComplete,onError);               
      }
 
        
    $scope.convert = function(input, inCrr, outCrr){  
               
        return input * this.user.rates[outCrr]; 
    }
                  
     $scope.outAmount= function(){
        
        return  this.convert(this.InputAmount,this.InCurr, this.OutCurr);

    }
   
});