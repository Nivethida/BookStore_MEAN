
var myApp = angular.module('myApp');
myApp.controller('genreController',function ($scope,$http,$location) {
    console.log("GenreController...");
    $scope.addGenre = function () {
        $http.post('/api/genres/',$scope.genre).then(function (res) {
           alert("new genre is added successfully");
        },function (err) {
            alert("Some error")
        })
    }
    $scope.getGenres = function () {
        $http.get('/api/genres/').then(function (res) {
            $scope.genres = res.data;
        },function (err) {
            alert("Some error")
        })
    }
    $scope.deleteGenre = function (id) {
        $http.delete('/api/genres/'+id).then(function (res) {
            window.location.href = '#/books';
        },function (err) {
            alert("Some error")
        })
    }
})
