import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <nav className='navbar bg-dark container'>
            <Link to='/'>Home</Link>
            <Link to='/movies'>Movies</Link>
            <Link to='/create'>AddMovies</Link>
        </nav>
    )
}
export default Navbar