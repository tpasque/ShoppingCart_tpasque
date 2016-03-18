app.service('Teas', ['$http', function($http){
  this.teas = function () {
    return $http.get('../data.json');
  }
  var checkout = [];
  this.checkout = checkout;
  this.add = function (quantity, tea) {
    quantity = quantity ? quantity : 1;
    tea.quantity = quantity;
    tea.total = tea.price/100 * quantity;
    tea.quantity = parseFloat(quantity);
    checkout.push(tea)
  }

}])
