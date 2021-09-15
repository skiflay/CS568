import React from 'react'
function Signup(props){
    return (
    <div className='container'>
        <form >
            <div className='form-group'>
            <input className= 'form-control' type='text' value={props.firstname} name='firstname' placeholder='First Name'/>
            </div>
            <div className='form-group'>
            <input className= 'form-control' type='text' value={props.lastname} name='lastname' placeholder='Last Name' />
            </div>
            <div className='form-group'>
            <input className= 'form-control' type='email' value={props.email} name='email' placeholder='Email' />
            </div>
            <div className='form-group'>
            <input className= 'form-control' type='password' value={props.password} name='password' placeholder='Password' />
            </div>
            <button className= 'btn btn-lg btn-primary '>Submit</button>
        </form>
    </div>
    )
}

export default Signup