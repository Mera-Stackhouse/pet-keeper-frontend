import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Card, Image, Button } from 'semantic-ui-react'

class Pet extends React.Component {


  render() {
    return (
      <Card>
        <Card.Content>
          <Image src={this.props.pet.image_url} />
            <Card.Header>Steve Sanders</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
              Breed:
              Habits:
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='blue'>
              Edit
            </Button>
            <Button basic color='red'>
              Delete
            </Button>
           </div>
        </Card.Content>
      </Card>
    )
  }
}

export default Pet
