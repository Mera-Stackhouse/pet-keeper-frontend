import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import { Menu, Input } from 'semantic-ui-react'

class NavBar extends React.Component {

  state = {
    active: '/pets'
  }

  redirect = (path) => {
    this.setState({
      active: path
    })
  }

  handleLogout = () => {

    console.log('logout')
    // localStorage.clear()

  }

  render() {
    return (
    <div className="navbar">
      <Menu pointing secondary>
        <Menu.Item
          name="pets"
          as={ NavLink }
          to='/pets'
          active={false}
        />
        <Menu.Item
          name="profile"
          as={ NavLink }
          to='/profile'
          active={false}
        />
        <Menu.Item
          name="find a veterinarian"
          as={ NavLink }
          to='/vets'
          active={false}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input
              icon={{ name: 'search', link: true }}
              placeholder='Search...'
              transparent
            />
          </Menu.Item>
          <Menu.Item
            name='logout'
            onClick={this.handleLogout}
          />
        </Menu.Menu>
      </Menu>
    </div>
    )
  }
}

export default NavBar


// onClick={this.redirect('/profile')}
// active={this.state.active === '/profile'}
