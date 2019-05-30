import React from 'react'

import Banner from './Banner'
import LandingPageForms from './LandingPageForms'
import LoggedIn from '../containers/LoggedIn'

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

class LandingPage extends React.Component {
  constructor() {
    super()
    this.state = {
      error: '',
      isLoggedIn: localStorage.isLoggedIn
    }
  }



  handleLogin = (ev) => {
    ev.preventDefault()
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: ev.target.elements['username'].value,
          password: ev.target.elements['password'].value
        }
      })
    })
    .then(resp => resp.json())
    .then(resp => {
      if (resp.message) {
        this.setState({
          error: `Error: ${resp.message}`
        })
      } else {
        localStorage.setItem('token', resp.jwt)
        localStorage.setItem('isLoggedIn', true)
        this.setState({
          error: '',
          isLoggedIn: true
        })
      }
    })

  }

  toggleLogin = () => {
    localStorage.setItem('isLoggedIn', false)
    this.setState({
      isLoggedIn: false
    })
  }


  render() {
    return (<>
      <Banner />
      <br/>
      <br/>
      {(localStorage.token && this.state.isLoggedIn) ?
      <LoggedIn toggleLogin={this.toggleLogin}/>
      :
      <LandingPageForms handleLogin={this.handleLogin} error={this.state.error}/>
      }
    </>
    )
  }
}

export default LandingPage
