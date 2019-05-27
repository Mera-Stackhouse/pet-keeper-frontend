import React from 'react'
import PetsContainer from './PetsContainer'
import VetSearch from '../components/VetSearch'
import Profile from '../components/Profile'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'

import { BrowserRouter as Router, Route } from 'react-router-dom'

function LoggedIn() {
  return (
    <Router>
      <React.Fragment>
        <Banner />
        <NavBar />
        <Route exact path="/profile" component={Profile} />
        <Route path="/pets" component={PetsContainer} />
        <Route path="/vets" component={VetSearch} />
      </React.Fragment>
    </Router>
  );
}

export default LoggedIn;
