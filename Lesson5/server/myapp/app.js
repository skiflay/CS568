var createError = require('http-errors');
var express = require('express');
const mongodb = require('mongodb')
const cors = require('cors')


var client = mongodb.MongoClient;
var url = 'mongodb+srv://simon:test123@cluster0.wkrdr.mongodb.net/myFirstDatabase?';

client.connect(url, function (err, client) {
    
    var db = client.db("libraryBook");
    var collection = db.collection("book");
    
    var query = {};
    
    var cursor = collection.find(query);
    
    cursor.forEach(
        function(doc) {
           // console.log(doc);
        }, 
        function(err) {
            client.close();
        }
    );   
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const moviesRouter = require('./routes/movies')

var app = express();



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/movies', moviesRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
 
});


app.listen(4000, ()=> console.log('Server is running on post 4000'))
module.exports = app;
