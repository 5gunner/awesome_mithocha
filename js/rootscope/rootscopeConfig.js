angular.module('app')
.run(function(Locations, Resources, $rootScope, $sce){
  Resources.query({source: 'details'})
  .$promise.then(function(data){
    var item = data[0].acf;
    $rootScope.address = item.address;
    $rootScope.telnumber = item.phone_number;
    $rootScope.address = item.address;
    $rootScope.telnumber = item.phone_number;
    $rootScope.openTime = $sce.trustAsHtml(item.opening_time.replace(/<(?:.|\n)*?>/gm, ''));
    $rootScope.mapLng = item.map.lng;
    $rootScope.mapLat = item.map.lat;
    $rootScope.facebook = item.facebook;
    $rootScope.instagram = item.instagram;
  });
});
