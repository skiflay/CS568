import React from 'react'
import axios from 'axios'

class Movies extends React.Component{
  constructor(){
    super()
   this.state = {
     movies: [], 
     showUpdateForm: false,
     updatedMovie: {id: '', title: '', genre: '', rating: ''}
    }
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
     axios.delete('/movies/'+ id)
     alert('Movie Deleted', id)
   }
   handleUpdate = (id)=>{
    this.setState({showUpdateForm: true})
     let updatedMovie = {...this.state.updatedMovie, id}
    this.setState({updatedMovie })
}
   handleChangeUpdate = (e) => {
    // const [name, value] = e.target
    let copy = { ...this.state.updatedMovie }
    console.log(copy[e.target.name] = e.target.value)
    this.setState({updatedMovie: copy})
    
}

handleSaveUpdate(id){
  let copyId = this.state.updatedMovie.id
  console.log(this.state.updatedMovie, '/movies/' + copyId)
  axios.put('/movies/' + copyId, this.state.updatedMovie)
}
  render(){
    return (
      <div>
        {!this.state.showUpdateForm ?
        this.state.movies.map(movie=>{
          return(   
         <ul key={movie._id}>  
          {<li>TITLE: {movie.title}</li>}
          {<li>GENRE: {movie.genre}</li>}
          {<li>RATING: {movie.rating}</li>}
          <button onClick={()=>this.handleDelete(movie._id)}>Delete</button>
          <button onClick={()=>this.handleUpdate(movie._id)}>Update</button>
        </ul>
      
          )
          }) :
          
          (<div className='container'>                   
                    
                <h1> Update Movie </h1>
                {/* <form> */}
                    <div className='form-group'>
                        <input className='form-control' type='text' name='title' 
                        value={this.state.updatedMovie.title}
                        placeholder='Movie Title' onChange={this.handleChangeUpdate} />
                    </div>
                    <div className='form-group'>
                        <input className='form-control' type='text' name='genre' 
                        value={this.state.updatedMovie.genre}
                        placeholder='Genre' onChange={this.handleChangeUpdate} />
                    </div>
                    <div className='form-group'>
                        <input className='form-control' type='text' name='rating' 
                        value={this.state.updatedMovie.rating}
                        placeholder='Rating' onChange={this.handleChangeUpdate} />
                    </div>
                    <button className='btn btn-lg btn-info'
                    onClick={()=>this.handleSaveUpdate(this.state.updatedMovie._id)}>Save</button>
                {/* </form> */}
                </div>)
              }
                </div> 
    )
    
} 
}

export default Movies 