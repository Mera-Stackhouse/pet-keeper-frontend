import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Card, Image, Button, Form } from 'semantic-ui-react'

class Pet extends React.Component {

  state = {
    showEditForm: false,
    showMoreInfo: false
  }

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

  toggleShowMore = () => {
    const newState = !this.state.showMoreInfo
    this.setState({
      showMoreInfo: newState
    })
  }



  render() {
    return (
      <Card>
        <Card.Content>
          <Image src={this.props.pet.img_url} />
            <br/>
            <br/>
            <Card.Header>{this.props.pet.name}</Card.Header>
            <Card.Meta>{this.props.pet.species}</Card.Meta>
            <Card.Description>
              {this.state.showMoreInfo ?
              <div>
                <p>{this.props.pet.breed}</p>
                <p>{this.props.pet.gender}</p>
                <p>Birthday: {this.props.pet.birthdate}</p>
                <p>Food:</p>
                <p>Habits:</p>
                <p>Medications:</p>
              </div>
              : null}
              {this.state.showEditForm ?
              <Form>
              </Form>
              : null}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui three buttons'>
            <Button basic color='blue' onClick={this.toggleShowMore}>
              {this.state.showMoreInfo ? 'See Less' : 'See More'}
            </Button>
            <Button basic color='yellow' disabled>
              Edit
            </Button>
            <Button basic color='red' onClick={() => this.props.handleDelete(this.props.pet.id)}>
              Delete
            </Button>
           </div>
        </Card.Content>
      </Card>
    )
  }
}

export default Pet
