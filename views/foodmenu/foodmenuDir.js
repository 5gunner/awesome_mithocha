angular.module('app')
    .directive('foodMenu', function(Locations) {
        return {
            restrict: 'AE',
            templateUrl: Locations.mainLocation + 'foodmenu/index.html'
        };
    });
