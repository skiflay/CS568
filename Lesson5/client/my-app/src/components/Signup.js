import React from 'react'
function Signup(props){
    return (
        <form>
            <input type='text' value={props.firstname} name='firstname' placeholder='First Name'/>
            <input type='text' value={props.lastname} name='lastname' placeholder='Last Name' />
            <input type='email' value={props.email} name='email' placeholder='Email' />
            <input type='password' value={props.password} name='password' placeholder='Password' />
            <button>Submit</button>
        </form>
    )
}

export default Signup