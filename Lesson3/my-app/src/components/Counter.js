import React from 'react'

function Counter(props){
    return (
        <div>
            <h1>{props.count}</h1>
            <button onClick={props.incrementCounter }>Increment</button>
            <button onClick={props.decrementCounter }>Decrement</button>
        </div>
    )
}
export default Counter