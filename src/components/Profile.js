import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Button, Form } from 'semantic-ui-react'

const PROFILE_URL = 'http://localhost:3000/api/v1/profile'
const USER_URL = 'http://localhost:3000/api/v1/users/'

class Profile extends React.Component {
  constructor() {
    super()

    this.state = {
      user: {},
      editUser:{},
      showEditForm: false
    }

    fetch(PROFILE_URL, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        user: data.user,
        editUser: data.user
      }, () => console.log(this.state.user))
    })
  }

  onClick = () => {
    console.log('here')
    this.setState({
      showEditForm: true
    })
  }


  handleEdit = (ev) => {
    ev.preventDefault()
    this.setState({
      showEditForm: false
    })
    const newUser = this.state.editUser
    console.log(newUser)
    fetch(USER_URL + this.state.user.id, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${localStorage.token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user: newUser
      })
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        user: data
      })
    })
  }

  onChangeForm = (ev) => {
    console.log(ev.target.value)
    this.setState({
      editUser: {...this.state.editUser, [ev.target.name]: ev.target.value}
    })
  }

  render() {
    return (

        <div class="ui items">
          <div class="item">
            <div class="image">
              <img src={this.state.user.avatar_url} alt="user avatar"/>
            </div>
            <div class="content">
              <div class="header">{this.state.user.username}</div>
              <div class="meta">
                <span>{this.state.user.neighborhood}</span>
              </div>
              <div class="description">
                <p>Mobile: {this.state.user.mobile}</p>
                <p>Email: {this.state.user.email}</p>
              </div>
              <div class="extra">
                Member since: {this.state.user.created_at}
              </div>
              <br/>
              <Button onClick={this.onClick}>
                Edit
              </Button>
              <Button disabled>
                Delete
              </Button>
            </div>
          </div>
          {this.state.showEditForm ?
            <Form onSubmit={this.handleEdit}>
              <Form.Field>
                <label>Neighborhood</label>
                <input value={this.state.editUser.neighborhood} name="neighborhood" onChange={this.onChangeForm}/>
              </Form.Field>
              <Form.Field>
                <label>Mobile</label>
                <input value={this.state.editUser.mobile} name="mobile" onChange={this.onChangeForm}/>
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input value={this.state.editUser.email} name="email" onChange={this.onChangeForm}/>
              </Form.Field>
              <Form.Field>
                <label>Avatar Image</label>
                <input value={this.state.editUser.avatar_url} name="avatar_url" onChange={this.onChangeForm}/>
              </Form.Field>
              <Button type='submit'>Submit</Button>
            </Form>
            : null}
        </div>
    )
  }

}

export default Profile
