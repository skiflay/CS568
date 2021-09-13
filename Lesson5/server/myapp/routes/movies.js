const express = require('express')
const router = express.Router()
const mongodb = require('mongodb')
const Movie = require('../model/movies')



router.get('/', (req, res)=>{   
    res.send([{name: 'Titanic', genre: 'Romance', rating: 13}]) 
   // Movie.find().then(result=> res.json(result)) 
})


module.exports = router