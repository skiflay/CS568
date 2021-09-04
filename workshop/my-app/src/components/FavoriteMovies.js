import React from 'react'

function FavoriateMovies(props){
return (
    <div>
        {props.id} {props.name} {props.genre} {props.rate}  {props.delete} 
        {props.favoriteMovies}
    </div>
)
}
export default FavoriateMovies