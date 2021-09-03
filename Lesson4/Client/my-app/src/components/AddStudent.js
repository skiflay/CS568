import React, {Component} from 'react'

class AddStudent extends Component{
    state = this.props.students
    addStd= ()=>{
        
    }
    handleChange = (e)=>{
        let addedStd = [ {name: e.target.value}]
        console.log(addedStd)
        this.setState({
            ...addedStd
        })
    }
   
render(){
    
    return (
        <div>
           < input type='text' name='add' onChange={this.handleChange}/>
           <button onClick={this.handleSubmit}>Add</button>
        </div>
    )
}
}
export default AddStudent