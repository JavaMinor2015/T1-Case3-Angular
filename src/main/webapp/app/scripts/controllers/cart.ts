'use strict';
/**
 * @ngdoc function
 * @name CartController
 * @description
 * # CartController
 * Controller
 */
angular.module('kantileverAngular').controller('cartController', function($scope, ShoppingCartService) {

  $scope.products = ShoppingCartService.products;

  $scope.addToCart = function (product) {
    var isInCart = false;

    for (var i = 0; i < $scope.products.length; i++){
      if ($scope.products[i].id === product.id){
        isInCart = true;
        $scope.products[i].amount += 1;
        break;
      }
    }

    if (!isInCart){
      $scope.products.push(product);
    }
  };

  $scope.getCartItemAmount = function(){
    var amount = 0;
    for (var i = 0; i < $scope.products.length; i++){
      amount += $scope.products[i].amount;
    }
    return amount;
  };

  $scope.removeProduct = function(product){
    for (var i = 0; i < $scope.products.length; i++){
      if (product.id === $scope.products[i].id){
        var cartProduct = $scope.products[i];
        if (cartProduct.amount > 1){
          cartProduct.amount -= 1;
        }
        else {
          $scope.products.splice(i,1);
        }
      }
    }
  };

  $scope.emptyCart = function(){
    $scope.products.length = 0;
  };

});
