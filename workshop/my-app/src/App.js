
import React, {Component} from 'react'
import Movie from './components/Movie'
import AddMovie from './components/AddMovie'

class App extends Component {
  state = {
    movies : [{id: 1, name:'Prison Break', genre: 'Drama', rate: 13},
              {id: 2, name:'The Bourne Identity', genre: 'Drama', rate: 13}
            ],
        newMovie: {id:'', name:'', genre: '', rate: ''}
  }
  
  deleteMovie = id=>{
    let result = this.state.movies.filter(movie=> id!==movie.id)
    this.setState({
      movies: result
    })
  }

  haddleChangeMovie = e=>{

    this.setState({newMovie:{
     [e.target.name] :  e.target.value
    }})
  }
  // haddleNameChangeMovie = e=>{
  //   this.setState({newMovie:{
  //    name:  e.target.value
  //   }})
  // }
  // haddleGenreChangeMovie = e=>{
  //   this.setState({newMovie:{
  //    genre:  e.target.value
  //   }})
  // }
  // haddleRateChangeMovie = e=>{
  //   this.setState({newMovie:{
  //    rate:  e.target.value
  //   }})
  // }
  saveMovie = (e)=>{ 
    e.preventDefault()
      this.setState({movies: this.state.movies.concat(this.state.newMovie)})  
  }

  render(){
    return (
      <div> 
        <h1>ID   Name   Genre   Rate </h1>
   { this.state.movies.map(movie=>{ 
      return (  
        <Movie
          key= {movie.id} id={movie.id} name={movie.name} genre={movie.genre} rate={movie.rate} 
          delete = {<button onClick={()=>this.deleteMovie(movie.id)}> Delete </button>}
          >
        </Movie>
      )
    })
  }
  <AddMovie 
  id={this.state.newMovie.id} name={this.state.newMovie.name} 
  genre={this.state.newMovie.genre} rate={this.state.newMovie.rate}
  haddleChangeMovie = {(e)=>{this.haddleChangeMovie(e)}} 
  // haddleIdChangeMovie = {(e)=>{this.haddleIdChangeMovie(e)}}
  // haddleNameChangeMovie = {(e)=>{this.haddleNameChangeMovie(e)}}
  // haddleGenreChangeMovie = {(e)=>{this.haddleGenreChangeMovie(e)}}
  // haddleRateChangeMovie = {(e)=>{this.haddleRateChangeMovie(e)}}
  saveMovie = {this.saveMovie}
  >
  </AddMovie>
  {this.state.newMovie.name}
    </div>
  )
  
  }
  
}

export default App;
