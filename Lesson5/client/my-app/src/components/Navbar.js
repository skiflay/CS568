import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(props){
    return(
        <nav className='navbar bg-dark container'>
            <Link to='/'>Home</Link>
           {props.isUserLoggedIn ? <Link to='/movies'>Movies</Link>: null}
           {props.isUserLoggedIn ?  <Link to='/create'>AddMovies</Link>: null}
            <Link to='/signin'>SignIn</Link>
            <Link to='/signup'>SignUp</Link>
        </nav>
    )
}
export default Navbar