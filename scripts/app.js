angular
    .module('webapp', ['ngMaterial', 'ngMessages', 'ngResource', 'ngMdIcons'])
    .controller('DemoCtrl', function($scope, $http, $resource) {

        // API to punk
        $http.get("https://api.punkapi.com/v2/beers")
          .success(function(data, status, headers, config) {
              $scope.beers = data;
          })
          .error(function(data, status, headers, config) {
              console.log("Error " + status);
          })

        $scope.scrollTop = function() {
          var content = document.querySelector('md-content');
          content.scrollTop = 0;
        }

        // use $http or $resource
        // https://api.punkapi.com/v2/beers

        
    })
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('yellow')
            .dark();
    });
