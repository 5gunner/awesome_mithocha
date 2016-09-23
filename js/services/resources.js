angular.module('app')
    .factory('Resources', function ResourcesFactory($resource) {
        return $resource('http://localhost:8888/mithocha/wp-json/wp/v2/:source/:id', {
            source: '@source'
        }, {
            id: '@id'
        });
    });
