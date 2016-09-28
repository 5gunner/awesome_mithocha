angular.module('app')
    .controller('mainListCtrl', function($scope, Resources, $sce) {
        // Initializing empty clean arrays for refactorations
        $scope.Vorspeisen = [];

        // Refactoring function
        function refoctoring(factorArray) {
            return function(item, index) {
                factorArray[index] = {
                    title: item.title.rendered,
                    price: item.acf.price,
                    number: item.acf.number,
                    details: $sce.trustAsHtml(item.acf.details),
                    allergie: item.acf.allergie,
                    vegan: item.acf.vegan
                };
            };
        }

        // Getting all the Foods.
        /*
        Getting the starters.
        --------------------- */
        Resources.query({
                source: 'vorspeisen'
            })
            .$promise.then(function(retrieved_vorspeisen) {
                retrieved_vorspeisen.forEach(refoctoring($scope.Vorspeisen));
            });
    });
