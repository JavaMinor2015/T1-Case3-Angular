'use strict';
/**
 * @ngdoc function
 * @name CartController
 * @description
 * # CartController
 * Controller
 */
angular.module('kantileverAngular').controller('cartController', function($scope, orderService) {

  $scope.order = orderService.newOrder;
  $scope.products = $scope.order.products;

  $scope.addToCart = function (product) {
    var isInCart = false;

    for (var i = 0; i < $scope.products.length; i++){
      if ($scope.products[i].content.id === product.content.id){
        isInCart = true;

        $scope.products[i].content.amount += 1;
        break;
      }
    }

    if (!isInCart){
      product.content["amount"] = 1;
      $scope.products.push(product);
    }
    $scope.order.totalPrice += product.content.price;
  };

  $scope.getCartItemAmount = function(){
    var amount = 0;
    for (var i = 0; i < $scope.products.length; i++){
      amount += $scope.products[i].content.amount;
    }
    return amount;
  };

  $scope.removeProduct = function(product){
    for (var i = 0; i < $scope.products.length; i++){
      if (product.content.id === $scope.products[i].content.id){
        var cartProduct = $scope.products[i];
        if (cartProduct.content.amount > 1){
          cartProduct.content.amount -= 1;
        }
        else {
          $scope.products.splice(i,1);
        }
      }
    }
    $scope.order.totalPrice -= product.content.price;
  };

  $scope.emptyCart = function(){
    $scope.products.length = 0;
    $scope.order.totalPrice = 0;
  };

});
