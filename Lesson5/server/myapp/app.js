var createError = require('http-errors');
var express = require('express');
const mongodb = require('mongodb')
const cors = require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const moviesRouter = require('./routes/movies')

var client = mongodb.MongoClient;
var url = 'mongodb+srv://simon:test123@cluster0.wkrdr.mongodb.net/moviesDB';

client.connect(url, function (err, db) {
    if(err) throw err
    console.log('MongoDB connected!')
});


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
