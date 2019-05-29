import React from 'react'

import Pet from '../components/Pet'

import 'semantic-ui-css/semantic.min.css'
import { Card, Form } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' }
]

const URL = 'http://localhost:3000/api/v1/profile'
const PET_URL = 'http://localhost:3000/api/v1/pets'


class PetsContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      gender: ''
    }

    fetch(URL, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
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
    return this.state.pets.map( p => <Pet key={p.id} pet={p} handleDelete={this.handleDelete}/>)
  }

  onSubmit = (ev) => {
    ev.preventDefault()
    fetch(PET_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        pet: {
          name: ev.target.name.value,
          species: ev.target.species.value,
          breed: ev.target.breed.value,
          img_url: ev.target.img_url.value,
          gender: this.state.gender
        }
      })
    })
    .then(resp => resp.json())
    .then(resp => {
      this.setState({
        pets: resp.pets
      })
    })
    this.clearForm(ev)
  }

  clearForm = (ev) => {
    ev.target.name.value = ''
    ev.target.species.value = ''
    ev.target.breed.value = ''
    ev.target.img_url.value = ''
  }


  onChange = (ev, {value}) => {
    this.setState({
      gender: value
    })
  }


  handleDelete = (petId) => {
    console.log('here')
    fetch(PET_URL + "/" + petId, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(resp => {
      this.setState({
        pets: resp.pets
      })
    })
  }

  render() {
    return (
      <div>
        <Card.Group>
          {this.renderPets()}
        </Card.Group>
        <br/>
        <h2>Add a Pet</h2>
        <Form onSubmit={this.onSubmit}>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Name' name='name' placeholder='Name' />
            <Form.Input fluid label='Species' name='species' placeholder='Cat, Dog, Micropig...' />
            <Form.Select fluid label='Gender' onChange={this.onChange} name='gender' options={options} placeholder='Gender' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Breed' name='breed' placeholder='Maine Coon' />
            <Form.Input fluid label='Image URL' name='img_url' placeholder='Url' />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PetsContainer


// {this.renderPets()}
