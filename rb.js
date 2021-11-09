            var myApp = angular.module("myApp", []);
            myApp.service("bookingService", function() {
                this.calc = function(x, y, z) {
                    return ((parseInt(x) * 500) + (parseInt(y) * 1000) + (parseInt(z) * 10));
                }
                this.fiveDis = function(x, y, z) {
                    return (((parseInt(x) * 500) + (parseInt(y) * 1000) + (parseInt(z) * 10)) - ((((parseInt(x) * 500) + (parseInt(y) * 1000) + (parseInt(z) * 10)) * 5)/100));
                }
                this.tenDis = function(x, y, z) {
                    return (((parseInt(x) * 500) + (parseInt(y) * 1000) + (parseInt(z) * 10)) - ((((parseInt(x) * 500) + (parseInt(y) * 1000) + (parseInt(z) * 10)) * 10)/100));
                }
                this.twentyDis = function(x, y, z) {
                    return (((parseInt(x) * 500) + (parseInt(y) * 1000) + (parseInt(z) * 10)) - ((((parseInt(x) * 500) + (parseInt(y) * 1000) + (parseInt(z) * 10)) * 20)/100));
                }
            });
            myApp.controller( "bookingController", function($scope, bookingService) {
                $scope.x = 1;
                $scope.y = 1;
                $scope.z = 1;
                $scope.result = 0;
                $scope.disResult = 0;
                $scope.calcPrice = function() {
                    $scope.result = bookingService.calc($scope.x, $scope.y, $scope.z)
                }
                $scope.calcFiveDiscount = function() {
                    $scope.disResult = bookingService.fiveDis($scope.x, $scope.y, $scope.z)
                }
                $scope.calcTenDiscount = function() {
                    $scope.disResult = bookingService.tenDis($scope.x, $scope.y, $scope.z)
                }
                $scope.calcTwentyDiscount = function() {
                    $scope.disResult = bookingService.twentyDis($scope.x, $scope.y, $scope.z)
                }
            });
            
            myApp.component("comment",{ 
                controller: "bookingController",
                service: "bookingService",
                template: `Destination: <input type="text" ng-model="destination"> 
                            Hotel Name: <input type="text" ng-model="hotelName"> 
                        <p>Thank you for choosing <strong>{{destination}}</strong> as Destination. Enjoy you visit @ <strong>{{hotelName}}</strong>.</p>
                `
            });  
