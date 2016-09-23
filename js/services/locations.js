angular.module('app')
    .factory('Locations', function LocationsFactory() {
        return {
            mainLocation: 'http://localhost:8888/mithocha/wp-content/themes/awesome_mithocha/views/'
        };
    });
