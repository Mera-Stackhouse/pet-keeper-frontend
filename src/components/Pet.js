import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Card, Image, Button } from 'semantic-ui-react'

class Pet extends React.Component {

  // birthday = () => {
  //   console.log(this.props.pet.birthdate)
  //   console.log(new Date(this.props.pet.birthdate))
  //   const b = new Date(this.props.pet.birthdate)
  //   const m = b.getMonth()
  //   const d = b.getDay()
  //   const y = b.getYear()
  //   return `${m} - ${d} - ${y}`
  // }

  // Age

  render() {
    return (
      <Card>
        <Card.Content>
          <Image src={this.props.pet.img_url} />
            <br/>
            <br/>
            <Card.Header>{this.props.pet.name}</Card.Header>
            <Card.Meta>{this.props.pet.species}: {this.props.pet.breed}</Card.Meta>
            <Card.Description>
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui three buttons'>
            <Button basic color='blue' disabled>
              See More
            </Button>
            <Button basic color='yellow' disabled>
              Edit
            </Button>
            <Button basic color='red' disabled>
              Delete
            </Button>
           </div>
        </Card.Content>
      </Card>
    )
  }
}

export default Pet
