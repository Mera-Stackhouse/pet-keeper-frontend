import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Card, Image, Button, Form } from 'semantic-ui-react'

const PET_URL = 'http://localhost:3000/api/v1/pets'

class Pet extends React.Component {

  state = {
    showEditForm: false,
    showMoreInfo: false,
    pet: this.props.pet,
    editPet: this.props.pet,

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
    this.setState({
      showMoreInfo: !this.state.showMoreInfo
    })
  }

  toggleEditForm = () => {
    this.setState({
      showEditForm: !this.state.showEditForm
    })
  }

  onChangeForm = (ev) => {
    this.setState({
      editPet: {...this.state.editPet, [ev.target.name]: ev.target.value}
    })
  }

  handleEdit = (ev) => {
    ev.preventDefault()
    fetch(PET_URL + '/' + this.state.editPet.id, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${localStorage.token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        pet: this.state.editPet
      })
    })
    .then(resp => resp.json())
    .then(resp => {
      this.setState({
        pet: resp.pet,
        editPet: resp.pet
      })
    })
    .then(() => {
      this.setState({
        showEditForm: false,
        showMoreInfo: true
      })
    })

  }





  render() {
    return (
      <Card>
        <Card.Content>
          <Image src={this.state.pet.img_url} size='medium' centered />
            <br/>
            <br/>
            <Card.Header>{this.state.pet.name}</Card.Header>
            <Card.Meta>{this.state.pet.species}</Card.Meta>
            <Card.Description>
              {this.state.showMoreInfo ?
              <div>
                <p>{this.state.pet.breed}</p>
                <p>{this.state.pet.gender}</p>
                <p>Birthday: {this.state.pet.birthdate}</p>
                <p>Habits: {this.state.pet.habits}</p>
              </div>
              : null}
              {this.state.showEditForm ?
                <Form onSubmit={this.handleEdit}>
                  <Form.Field>
                    <label>Habits:</label>
                    <input value={this.state.editPet.habits} name="habits" onChange={this.onChangeForm}/>
                  </Form.Field>
                  <Button type='submit'>Submit</Button>
              </Form>
              : null}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui three buttons'>
            <Button basic color='blue' onClick={this.toggleShowMore}>
              {this.state.showMoreInfo ? 'See Less' : 'See More'}
            </Button>
            <Button basic color='yellow' onClick={this.toggleEditForm}>
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
