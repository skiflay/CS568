import React from 'react'
import axios from 'axios'

class CreateMovie extends React.Component {
    state = { newMovie: { title: '', genre: '', rating: '' } }

    handleChange = e => {
        let copy = { ...this.state }
        copy[e.target.name] = e.target.value
        this.setState({ newMovie: copy })
    }
    handleClick = (e)=>{
        e.preventDefault()
        let newMovie= { ...this.state }
        console.log(newMovie)
       axios.post('http://localhost:4000/create', newMovie)
    }
    render() {
        return (
            <div className='container'>
                <h1> CreateMovie </h1>
                <form>
                    <div className='form-group'>
                        <input className='form-control' type='text' name='title' value={this.state.title}
                            placeholder='Movie Title' onChange={this.handleChange} />
                    </div>
                    <div className='form-group'>
                        <input className='form-control' type='text' name='genre' value={this.state.genre}
                            placeholder='Genre' onChange={this.handleChange} />
                    </div>
                    <div className='form-group'>
                        <input className='form-control' type='text' name='rating' value={this.state.rating}
                            placeholder='Rating' onChange={this.handleChange} />
                    </div>
                    <button className='btn btn-lg btn-info' onClick={this.handleClick}>Add</button>
                </form>
            </div>
        )
    }

}
export default CreateMovie