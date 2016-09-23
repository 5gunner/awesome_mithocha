angular.module('app')
    .directive('logo', function(Locations, Resources, $sce) {
        return {
            restrict: 'AE',
            templateUrl: Locations.mainLocation + 'logo/index.html',
            scope: {},
            controller: function($scope) {
                Resources.query({
                        source: 'logo'
                    })
                    .$promise.then(function(data) {
                        $scope.logo = $sce.trustAsHtml(data[0].content.rendered.replace(/(<p[^>]+?>|<p>|<\/p>\n)/, ""));
                    });
            }
        };
    });
