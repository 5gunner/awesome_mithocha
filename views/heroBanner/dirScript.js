angular.module('app')
    .directive('heroBanner', function(Locations, Resources, $sce) {
        return {
            restrict: 'AE',
            templateUrl: Locations.mainLocation + 'heroBanner/index.html',
            scope: {},
            controller: function($scope) {
                Resources.query({
                        source: 'hero_banner'
                    })
                    .$promise.then(function(data) {
                        var item = data[0].acf;
                        $scope.bannerImg = $sce.trustAsHtml(item.image.replace(/<p>|<\/p>/gm, ''));
                        $scope.bannerTitle = data[0].title.rendered;
                        $scope.bannerTxt = $sce.trustAsHtml(item.text.replace(/<p>|<\/p>/gm, ''));
                    });
            }
        };
    });
