import React from 'react'
import axios from 'axios'

class Movies extends React.Component{
  constructor(){
    super()
   this.state = {movies: []}
  }
  
  componentDidMount(){
    axios.get('/movies')
    .then(result=>{
      let copyMovies = [...this.state.movies]
      copyMovies = result.data
      this.setState({movies: copyMovies})
    })  
   }
   handleDelete = id=>{
     axios.delete('/movies')
     .then(result=>{
       let copyMovies = [...this.state.movies]
       copyMovies = result.data
       copyMovies.filter(item=>{
         return id !==item.id
       })
       this.setState({movies: copyMovies})
     })
     
   }
  render(){
    return (
      <div>
      {
        this.state.movies.map(movie=>{
          return(
         <ul key={movie._id}>  
          {<li>{movie.name}</li>}
          {<li>{movie.genre}</li>}
          {<li>{movie.rating}</li>}
          <button onClick={()=>this.handleDelete(movie.id)}>Delete</button>
          <button onClick={this.handleUpdate}>Update</button>
        </ul>
          )})
        
          }
        </div>
    )
} 
}

export default Movies 