const mongoose =require('mongoose')

const movieSchema = {
    name: String,
    genre: String,
    rating: String
}
const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie