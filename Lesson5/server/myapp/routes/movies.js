const express = require('express')
const router = express.Router()
const Movie = require('../model/movies')



router.post('/', (req, res) => {
    const title = req.body.title;
    const genre = req.body.genre;
    const rating = req.body.rating;
    const newMovie = new Movie({
        title: title,
        genre: genre,
        rating: rating
    })
    newMovie.save()
    res.send('Movie has saved!')
})

router.get('/', (req, res) => {
    Movie.find().then(result => res.json(result))
})

router.delete('/', (req, res)=>{
       
})
module.exports = router