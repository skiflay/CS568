
import React from 'react';
import './App.css';
import ClassComp from './components/ClassComp';
import FunComp from './components/FunComp';
import Counter from './components/Counter'
import Students from './components/Students';

class App extends React.Component {
  state = {
    fName: 'Simon',
    lName: 'Kiflay',
    count: 0
  }
incrementCounter = ()=>{
  this.setState({
    count: this.state.count + 1
  })
}
decrementCounter = ()=>{
  this.setState({
    count: this.state.count -1
  })
}
  render(){
  return (
    <div className="App">
      <Counter incrementCounter = {this.incrementCounter} 
      decrementCounter = {this.decrementCounter} 
      count ={this.state.count} />
      <ClassComp  fName={this.state.fName}> Hello  </ClassComp>   
      <FunComp lName={this.state.lName} > Your last name is </FunComp>
      <Students />
    </div>
  );
}
}

export default App;
