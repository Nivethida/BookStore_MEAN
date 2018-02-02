/**
 * Created by nivethida on 8/17/17.
 */
var myApp = angular.module('myApp');
myApp.controller('BooksController',function ($scope,$http,$location,$routeParams) {
    console.log("booksController...");
    $scope.getBooks = function () {
        $http.get('/api/books').then(function (res) {
            $scope.books = res.data;
        },function (err) {
            alert("Some error")
        })
    }
    $scope.getBook = function () {
        var id = $routeParams.id;
        $http.get('/api/books/'+id).then(function (res) {
            $scope.book = res.data;
        },function (err) {
            alert("Some error")
        })
    }
    $scope.addBook = function () {
        $http.post('/api/books/',$scope.book).then(function (res) {
           window.location.href = '#/books';
        },function (err) {
            alert("Some error")
        })
    }
    $scope.updateBook = function () {
        var id = $routeParams.id;
        $http.put('/api/books/'+id,$scope.book).then(function (res) {
            window.location.href = '#/books';
        },function (err) {
            alert("Some error")
        })
    }
    $scope.deleteBook = function (id) {
        $http.delete('/api/books/'+id).then(function (res) {
            window.location.href = '#/books';
        },function (err) {
            alert("Some error")
        })
    }
})
