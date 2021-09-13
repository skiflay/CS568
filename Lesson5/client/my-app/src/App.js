import React from 'react'
import Movies from './components/Movies'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from '../src/components/Home'
import CreateMovie from './components/CreateMovie'


class App extends React.Component {
 

 
//  shouldComponentUpdate(){
   
//  }
  render(){
    return (
    <BrowserRouter >
      <Navbar />
      <Route path='/' exact><Home /></Route>
      <Route path='/movies'><Movies /></Route>
      <Route path='/create'><CreateMovie /></Route>
      
      {/* <Login />
     <Signup /> */}
      </BrowserRouter>
    
  )
  
  }
  
}

export default App;
