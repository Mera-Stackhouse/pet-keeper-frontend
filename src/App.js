import React from 'react'
// import logo from './logo.svg'
import './App.css'

import LandingPage from './components/LandingPage'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'


function App() {
  return (
    <Router>
      <React.Fragment>
        <Route exact path="/" render={() => <Redirect to='/login'/>} />
        <Route path="/login" component={LandingPage} />
      </React.Fragment>
    </Router>
  )
}

export default App;
