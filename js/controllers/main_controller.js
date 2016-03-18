app.controller('MainController', ['$scope', 'Teas', function($scope, Teas){
      Teas.teas().then(function (teas) {
        $scope.teas = teas.data;
        console.log($scope.teas);
      })
      $scope.add = Teas.add;
      $scope.checkout = Teas.checkout;
    }]);
