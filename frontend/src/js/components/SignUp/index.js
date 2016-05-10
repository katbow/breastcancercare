import React, { Component } from 'react'
// import { Link } from 'react-router'
import { Col, Row, Button, Input } from 'react-materialize'

export default class SignUp extends Component {
  render() {
    return (
      <Row className='formContainer'>
        <Col s={10} m={8} l={6} offset='s1 m2 l3'>
          <Row>
            <Input label='Email' s={6} />
          </Row>
          <Row>
            <Input type='password' label='Password' s={12} />
          </Row>
          <Row>
            <Input type='date' label='Date of Birth' s={6} />
          </Row>
          <Row>
            <Input label='Mobile Number' s={12} />
          </Row>
          <Button className='submit-button' waves='light' large={false}>{this.props.buttonText}</Button>
        </Col>
      </Row>
    )
  }
}
