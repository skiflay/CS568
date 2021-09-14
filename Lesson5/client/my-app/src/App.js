import React from 'react'
import Movies from './components/Movies'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../src/components/Home'
import CreateMovie from './components/CreateMovie'


class App extends React.Component {
  state = {
    isUserLoggedIn: true
  }



  render() {
    return (
      <BrowserRouter >
        <Navbar isUserLoggedIn = {this.state.isUserLoggedIn} />
        <Route path='/' exact><Home /></Route>
        {this.state.isUserLoggedIn? <Route path='/movies'><Movies /></Route>: null }
        {this.state.isUserLoggedIn? <Route path='/create'><CreateMovie /></Route>: null}
        <Route path='/signin'><Login /></Route>
        <Route path='/signup'><Signup /></Route>

      </BrowserRouter>

    )

  }

}

export default App;
