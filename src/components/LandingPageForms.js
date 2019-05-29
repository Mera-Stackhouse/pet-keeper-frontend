import React from 'react'

import { Button, Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const LandingPageForms = (props) => {
  return (
    <>
      <Form onSubmit={props.handleSignUp}>
        <h3>Sign Up</h3>
        <Form.Field>
          <label>Username</label>
          <input name="username"/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input name="password"/>
        </Form.Field>
        <Button type='submit' disabled>Submit</Button>
      </Form>
      <br/>
      <br/>
      <Form onSubmit={props.handleLogin}>
        <h3>Log In</h3>
        <p style={{color: "red"}}>{props.error}</p>
        <Form.Field>
          <label>Username</label>
          <input name="username"/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type='password' name="password"/>
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </>
  )
}

export default LandingPageForms
