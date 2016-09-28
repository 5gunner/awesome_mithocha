angular.module('app')
.config(function($routeProvider){
  var location = 'http://localhost:8888/mithocha/wp-content/themes/awesome_mithocha/views/';
  $routeProvider
    .when('/vorspeisen', {
      templateUrl: location + 'vorspeisen/index.html',
      controller: 'mainListCtrl'
    });
});
