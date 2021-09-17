import axios from 'axios'
import React from 'react'
import {Redirect} from 'react-router-dom'
class Login extends React.Component {

    state = {
        user: {username: '', password: ''},
        isRedirect: false
    }

    handleChange = (e) => {
        e.preventDefault()
       let copy = {...this.state.user}
       copy[e.target.name] = e.target.value
       this.setState({user: copy})
    }

    onClickLogInSubmit= ()=>{
        axios.post('http://localhost:4000/users', this.state.user)
        let copy = {...this.state.isRedirect}
        copy.isRedirect= true
        this.setState({isRedirect: copy})
        alert('Thank you')
    }
    render() {
        let signInForm = (
            <div className='container'>
        {/* <form> */}
            <div className='form-group'> 
            <input className = 'form-control' type='text' value={this.state.username} name='username'
                placeholder='Username' onChange={(e)=>this.handleChange(e)} /></div>
           <div className='form-group'>
            <input className= 'form-control' type='password' value={this.state.password} name='password'
                placeholder='Password' onChange={(e)=>this.handleChange(e)} />
            <button className = 'btn btn-lg btn-primary' onClick={this.onClickLogInSubmit}>Submit</button>
            </div>
        {/* </form> */}
        </div> ) 
        
       return ( 
           <div>
               {!this.state.isRedirect? signInForm : <Redirect to = '/movies' /> }
           </div>
       )
       
       
    }

}

export default Login