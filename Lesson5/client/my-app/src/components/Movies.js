import React from 'react'

function Movies(props){
    return (
        <ul>
          {<li>{props.name}</li>}
          {<li>{props.genre}</li>}
          {<li>{props.rating}</li>}
        </ul>
    )
}

export default Movies 