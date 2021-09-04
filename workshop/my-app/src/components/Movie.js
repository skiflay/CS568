import React from 'react'

function Movie(props){
return (
    <div>   
    <h4>{props.id} {props.name} {props.genre} {props.rate}  {props.delete} {props.favoriteMovies} </h4>
    </div>
)
}
export default Movie