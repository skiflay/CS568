import axios from 'axios'
import React from 'react'
class Login extends React.Component {

    state = {
        user: {username: '', password: ''}
    }

    handleChange = (e) => {
       let copy = {...this.state.user}
       copy[e.target.name] = e.target.value
       this.setState({user: copy})
    }

    onClickLogInSubmit= ()=>{
        axios.post('http://localhost:4000/users', this.state.value)
        .then(response=>console.log(response))
    }
    render() {
        return (
            <div className='container'>
            <form>
                <div className='form-group'> 
                <input className = 'form-control' type='text' value={this.state.username} name='username'
                    placeholder='Username' onChange={(e)=>this.handleChange(e)} /></div>
               <div className='form-group'>
                <input className= 'form-control' type='password' value={this.state.password} name='password'
                    placeholder='Password' onChange={(e)=>this.handleChange(e)} />
                <button className = 'btn btn-lg btn-primary' onClick={this.LogInSubmit}>Submit</button>
                </div>
            </form>
            </div>
        )
    }

}

export default Login