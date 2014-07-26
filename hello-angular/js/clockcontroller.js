function ClockController($scope){
  $scope.clocktime = new Date();
  var refreshClock = function(){
    $scope.clocktime = new Date();
  };
  setInterval(function(){
    $scope.$apply(refreshClock); 
  }, 1000);
  refreshClock();
} 