import React from 'react'

import Banner from './Banner'
import LandingPageForms from './LandingPageForms'
import LoggedIn from '../containers/LoggedIn'

class LandingPage extends React.Component {
  constructor() {
    super()
    this.state = {
      error: ''
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
        this.setState({
          error: ''
        })
      }
    })

  }


  render() {
    return (<>
      <Banner />
      <br/>
      <br/>
      {localStorage.token?
      <LoggedIn />
      :
      <LandingPageForms handleLogin={this.handleLogin} error={this.state.error}/>
      }
    </>
    )
  }
}

export default LandingPage
