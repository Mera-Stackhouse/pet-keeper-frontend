import React from 'react'

import Pet from '../components/Pet'

import 'semantic-ui-css/semantic.min.css'
import { Card } from 'semantic-ui-react'

const URL = ''


class PetsContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: []
    }

    // fetch(URL)
    // .then(resp => resp.json())
    // .then(data => {
    //   this.setState({
    //     pets: data.pets
    //   })
    // })
  }

  // renderPets = () => {
  //   this.props.pets.map( p => <Pet key={p.id} pet={p} />)
  // }

  render() {
    return (
    <div>
      <Card.Group>

      </Card.Group>
    </div>
    )
  }
}

export default PetsContainer


// {this.renderPets()}
