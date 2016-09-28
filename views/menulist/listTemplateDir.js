angular.module('app')
.directive('menuPage', function(Locations){
  return{
      restrict: 'AE',
      templateUrl: Locations.mainLocation + 'menulist/listTemplate.html',
      scope: {
        title: '=',
        number: '=',
        price: '=',
        details: '=',
        allergie: '=',
        vegan: '='
      }
  };
});
