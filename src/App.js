import React from 'react'
// import logo from './logo.svg'
import './App.css'

import LandingPage from './components/LandingPage'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'


function App() {
  return (
    <div className='main'>
    <Router>
      <React.Fragment>
        <Route path="/login" component={LandingPage} />
        <Route exact path="/" render={() => <Redirect to='/login'/>} />
        <Route path="/profile" render={() => <Redirect to='/login'/>} />
        <Route path="/pets" render={() => <Redirect to='/login'/>} />
        <Route path="/vets" render={() => <Redirect to='/login'/>} />
      </React.Fragment>
    </Router>
    </div>
  )
}

export default App;
