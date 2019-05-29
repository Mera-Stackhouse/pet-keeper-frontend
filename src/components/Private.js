import React from 'react'
import LoggedIn from '../containers/LoggedIn'

class Private extends React.Component {
  render() {
    {loggedIn?
    <LoggedIn />
    :
    <Redirect to='/login' />
    }
  }
}

export default Private
