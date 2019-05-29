import React from 'react'

import Pet from '../components/Pet'

import 'semantic-ui-css/semantic.min.css'
import { Card } from 'semantic-ui-react'

const URL = 'http://localhost:3000/api/v1/profile'


class PetsContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: []
    }

    fetch(URL, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.TIADUXTXQwKAAgk1QpPx7k5Y8LHmAQnJo6GDRvug6AI`
      }
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        pets: data.user.pets
      }, () => console.log(this.state.pets))
    })
  }

  renderPets = () => {
    return this.state.pets.map( p => <Pet key={p.id} pet={p} />)
  }

  render() {
    return (
      <div>
        <Card.Group>
          {this.renderPets()}
        </Card.Group>
      </div>
    )
  }
}

export default PetsContainer


// {this.renderPets()}
