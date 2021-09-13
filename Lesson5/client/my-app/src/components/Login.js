import React from 'react'
function Login(props){
    return (
        <form>
            <input type='text' value={props.username} name='username' placeholder='Username'/>
             <input type='password' value={props.password} name='password' placeholder='Password'/>
             <button>Submit</button>

        </form>
    )
}

export default Login