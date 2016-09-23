angular.module('app')
.directive('headerDetail', function($sce, Locations, Resources, $rootScope){
  return{
    restrict: 'AE',
    templateUrl: Locations.mainLocation + 'header_details/index.html'
  };
});
