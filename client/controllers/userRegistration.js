/**
 * Created by madhan on 8/20/17.
 */
var myApp = angular.module('myApp');
myApp.controller('registerController',function ($scope,$location,$http) {
    console.log('register controller')
    $scope.addUser = function () {
        $http.post('/api/users/',$scope.user).then(function (res) {
            console.log($scope.user);
            window.location.href = '#/books';
        },function (err) {
            alert("Some error while posting")
        });
    }
});