const express = require('express');
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./routes/movies')


app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://simon:test123@cluster0.wkrdr.mongodb.net/moviesDB', ()=>{
    console.log('MongoDB Connected')
})
app.use('/create', router)
app.use('/movies', router)


app.listen(4000, ()=> console.log('Server is running on post 4000'))


module.exports = app;
