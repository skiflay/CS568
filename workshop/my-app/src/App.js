
import React, {Component} from 'react'
import Movie from './components/Movie'
import AddMovie from './components/AddMovie'
import FavoriateMovies from './components/FavoriteMovies'

class App extends Component {
  state = {
    movies : [{id: 1, name:'Prison Break', genre: 'Drama', rate: 13},
              {id: 2, name:'The Bourne Identity', genre: 'Drama', rate: 13}
            ],
        newMovie: {id:'', name:'', genre: '', rate: ''},
        favoriateMovies: [],
        showHideFav: true
  }
  AddFavoriateMovie = (id)=>{
    const movie = this.state.movies.find(item=>{
      return item.id === id
    })
    this.setState({favoriateMovies: this.state.favoriateMovies.concat(movie)})
  }

  deleteMovie = id=>{
    let result = this.state.movies.filter(movie=> id!==movie.id)
    this.setState({
      movies: result
    })
  }
  deleteFavoriateMovie = id=>{
    let result = this.state.favoriateMovies.filter(movie=> id !==movie.id)
    this.setState({
      favoriateMovies: result
    })
  }
  haddleChangeMovie = e=>{
    const newMovie = {...this.state.newMovie}
    newMovie[e.target.name] = e.target.value;
    this.setState({newMovie})
  }
  
  saveMovie = (e)=>{ 
    e.preventDefault()
      this.setState({movies: this.state.movies.concat(this.state.newMovie)})  
  }
  showHideBtn =()=>{
   this.setState({showHideFav: !this.state.showHideFav})
  }
  render(){
    let favoriate = this.state.favoriateMovies.map(movie=>{ 
        return (  
          <FavoriateMovies
            key= {movie.id} id={movie.id} name={movie.name} genre={movie.genre} rate={movie.rate} 
            delete = {<button onClick={()=>this.deleteFavoriateMovie(movie.id)}> Delete </button>}
            >
          </FavoriateMovies>
        )
      })
    
    return (
      <div> 
        <h1>ID   Name   Genre   Rate </h1>
   { this.state.movies.map(movie=>{ 
      return (  
        <Movie
          key= {movie.id} id={movie.id} name={movie.name} genre={movie.genre} rate={movie.rate} 
          delete = {<button onClick={()=>this.deleteMovie(movie.id)}> Delete </button>}
          favoriteMovies = {<button onClick={()=>this.AddFavoriateMovie(movie.id)}>AddToFavoriteMovies</button>}
          >
        </Movie>
      )
    })
  }
  <AddMovie 
  key= {this.state.newMovie.id} id={this.state.newMovie.id} name={this.state.newMovie.name} 
  genre={this.state.newMovie.genre} rate={this.state.newMovie.rate}
  haddleChangeMovie = {(e)=>{this.haddleChangeMovie(e)}} 
  saveMovie = {this.saveMovie}
  >
  </AddMovie>
  
  <hr/>
        <h1>My Favoriate Movies List</h1>
        <button onClick={this.showHideBtn}>Show/Hide</button>
  { 
    this.state.showHideFav ? favoriate : null
  }
        
    </div>
  )
  
  }
  
}

export default App;
