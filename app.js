/**
 * Created by madhan on 8/16/17.
 */
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

Genre = require('./models/genres.js');
Book = require('./models/books.js');
User = require('./models/users');
var app = express();
//connect to mongoose
app.use(express.static('client'))

mongoose.connect('mongodb://localhost/bookstore');
app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json());
var db = mongoose.connection;

app.get('/',function (req,res) {
    res.send('please use /api/books or /api/genres');
});
app.get('/api/genres',function(req,res){
    Genre.getGenres(function (err,genres) {
        if(err){
            throw err;
        }
        res.json(genres);
    })
});
app.get('/api/books',function(req,res){
    Book.getBooks(function (err,books) {
        if(err){
            throw err;
        }
        res.json(books);
    })
})
app.get('/api/books/:_id',function(req,res){
    Book.getBookById(req.params._id,function (err,book) {
        if(err){
            throw err;
        }
        res.json(book);
    })
})
app.post('/api/genres',function(req,res){
    var genre = req.body;
    Genre.addGenre(genre,function (err,genre) {
        if(err){
            throw err;
        }
        res.json(genre);
    })
});
app.post('/api/books/',function(req,res){
    var book = req.body;
    Book.addBook(book,function (err,book) {
        if(err){
            throw err;
        }
        res.json(book);
    })
})
app.put('/api/genres/:_id',function(req,res){
    var id =req.params._id;
    var genre = req.body;
    Genre.updateGenre(id,genre,{},function (err,genre) {
        if(err){
            throw err;
        }
        res.json(genre);
    })
});
app.put('/api/books/:_id',function(req,res){
    var id =req.params._id;
    var book = req.body;
    Book.updateBook(id,book,{},function (err,book) {
        if(err){
            throw err;
        }
        res.json(book);
    })
});
app.delete('/api/genres/:_id',function(req,res){
    var id =req.params._id;
    var genre = req.body;
    Genre.deleteGenre(id,genre,{},function (err,genre) {
        if(err){
            throw err;
        }
        res.json(genre);
    })
});
app.delete('/api/books/:_id',function(req,res){
    var id =req.params._id;
    var book = req.body;
    Book.deleteBook(id,book,{},function (err,book) {
        if(err){
            throw err;
        }
        res.json(book);
    })
});
app.post('/api/users/',function(req,res){
    var user = req.body;
    User.addUser(user,function (err,user) {
        if(err){
            throw err;
        }
        res.json(user);
    })
})
app.listen(8080);

console.log("server running on 8080");


