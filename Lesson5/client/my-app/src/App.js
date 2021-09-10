import React from 'react'
import Movies from './components/Movies'

class App extends React.Component {
 constructor(){
   console.log('Constructor')
   super()
  this.state = {name:'Simon'}
 }

 componentDidMount(){
   console.log('component did mount')
  this.setState({name: 'Kiflay'})
 }
//  shouldComponentUpdate(){
   
//  }
  render(){
    console.log('Render')
    return (
    <div className="App">
      <Movies name={this.state.name} />
    </div>
  );
  }
  
}

export default App;
