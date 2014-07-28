angular.module('myApp', [])
 .controller('ClockController', 
    function($scope){
      $scope.clock = {
        time: new Date()
      };
      var refreshClock = function(){
        $scope.clock.time = new Date();
      };
      setInterval(function(){
        $scope.$apply(refreshClock); 
      }, 1000);
      refreshClock();
    }); 