import React from 'react'
import Movies from './components/Movies'
import axios from 'axios'
import Login from './components/Login'
import Signup from './components/Signup'

class App extends React.Component {
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
//  shouldComponentUpdate(){
   
//  }
  render(){
    console.log(this.state.movies)
    return (
    <div className="App">
      {
        this.state.movies.map(movie=>{
          return(
          <Movies  name={movie.name} genre={movie.genre} rating={movie.rating} >

          </Movies>
          )
        })
      }
      <Signup />
      <Login />

    </div>
  );
  }
  
}

export default App;
