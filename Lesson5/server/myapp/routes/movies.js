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
    Movie.find().then(result => res.send(result))
})

router.delete('/:id', (req, res) => {
    let id = req.params.id
    Movie.findByIdAndDelete({ _id: id }, (err) => {
        if (!err) {
            res.send('deleted')
        } else {
            console.log(err)
        }
    })
})

router.put('/:id', (req, res) => {
    const updatedMovie = {
        id: req.body.id,
        title: req.body.title,
        genre: req.body.genre,
        rating: req.body.rating
    }
    Movie.findByIdAndUpdate({ _id: req.params.id }, { $set: updatedMovie }, err => {
        if (!err) {
            res.send('Movie Updated')
        } else {
            console.log(err)
        }

    })
})
module.exports = router