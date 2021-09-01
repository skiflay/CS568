import React from 'react';


class ClassComp extends React.Component{
    render(){
        return (<div>
            <h1>  {this.props.children} {this.props.fName} </h1>
            
            </div>
        )
    }
}
export default ClassComp