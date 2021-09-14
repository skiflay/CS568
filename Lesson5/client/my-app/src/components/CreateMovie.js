import React from 'react'
import axios from 'axios'

class CreateMovie extends React.Component {
    state = { newMovie: { title: '', genre: '', rating: '' } }

    handleChange = e => {
        let copy = { ...this.state.newMovie }
        copy[e.target.name] = e.target.value
        this.setState({ newMovie: copy })
    }
    handleClick = (e)=>{
        e.preventDefault()
        let newMovie = {...this.state.newMovie}
        console.log(newMovie)
       axios.post('/movies', newMovie)
    }
    render() {
        return (
            <div className='container'>
                <h1> CreateMovie </h1>
                <form onSubmit={this.handleClick}>
                    <div className='form-group'>
                        <input className='form-control' type='text' name='title' value={this.state.newMovie.title}
                            placeholder='Movie Title' onChange={this.handleChange} />
                    </div>
                    <div className='form-group'>
                        <input className='form-control' type='text' name='genre' value={this.state.newMovie.genre}
                            placeholder='Genre' onChange={this.handleChange} />
                    </div>
                    <div className='form-group'>
                        <input className='form-control' type='text' name='rating' value={this.state.newMovie.rating}
                            placeholder='Rating' onChange={this.handleChange} />
                    </div>
                    <button className='btn btn-lg btn-info'>Add</button>
                </form>
            </div>
        )
    }

}
export default CreateMovie