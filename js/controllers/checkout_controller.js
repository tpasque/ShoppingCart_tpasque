app.controller('CheckoutController', ['$scope', 'Teas', function($scope, Teas){
      $scope.checkout = Teas.checkout;
      $scope.showEdit = false;

      // total of order
      $scope.total = function () {
        var checkoutTotalArray = []
        for (var i = 0; i < Teas.checkout.length; i++) {
          var checkoutTotal = Teas.checkout[i].total
          checkoutTotalArray.push(checkoutTotal)
          var total = checkoutTotalArray.reduce((prev, curr) => prev + curr);
        }
        if(total === undefined) {
          return '$0.00'
        } else {
          return '$' + parseFloat(total).toFixed(2);
        }

      };

      // remove item from checkout
      $scope.remove = function (indexValue) {
        $scope.checkout.splice(indexValue, 1);
      }

      // show edit quantity select box
      $scope.toggleEdit = function() {
        $scope.showEdit = !$scope.showEdit
        $scope.hideQty = !$scope.hideQty
        $scope.hideSave = !$scope.hideSave
      }

      // updates quantity
      $scope.updateQuantity = function(editQuantity){
       this.item.quantity = editQuantity
       this.item.total = this.item.price/100 * editQuantity
     }

    }]);
