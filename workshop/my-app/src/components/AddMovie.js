import React from 'react'

function AddMovie(props){
    return (
        <div>
           <form>
               <input type="text" value={props.id} name='id' placeholder='Id' onChange={props.haddleChangeMovie}/>
               <input type="text" value={props.name} name='name' placeholder='Movie Name' onChange={props.haddleChangeMovie}/>
               <input type="text" value={props.genre} name='genre' placeholder='Genre' onChange={props.haddleChangeMovie}/>
               <input type="text" value={props.rate} name='rate' placeholder='Rate'onChange={props.haddleChangeMovie}/>
               <button onClick= {props.saveMovie} >AddMovie</button>
           </form>
        </div>
    ) 
}
export default AddMovie