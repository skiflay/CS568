import React from 'react'
import axios from 'axios'

class Movies extends React.Component{
  constructor(){
    super()
   this.state = {movies: []}
  }
  
  componentDidMount(){
    axios.get('http://localhost:4000/movies')
    .then(result=>{
      let copyMovies = [...this.state.movies]
      copyMovies = result.data
      this.setState({movies: copyMovies})
    })
   
   }
  render(){
    return (
      <div>
      {
        this.state.movies.map(movie=>{
          return(
         <ul>
          {<li>{movie.name}</li>}
          {<li>{movie.genre}</li>}
          {<li>{movie.rating}</li>}
        </ul>
          )})
          }
        </div>
    )
} 
}

export default Movies 