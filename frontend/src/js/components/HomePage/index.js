import React, { Component } from 'react'
import { Link } from 'react-router'
import { Button, Row, Col } from 'react-materialize'

export default class HomePage extends Component {
  render () {
    return (
      <Row>
        <Col s={8} m={6} l={4} offset='s2 m3 l4'>
          <Row>
            <h2 className='homepage'>I am a Survivor</h2>
          </Row>
          <Row>
            <Col offset='s3' s={6}>
              <Link to={'/survivorsignup'}><Button waves='light'>Sign Up</Button></Link>
            </Col>
          </Row>
          <Row>
            <h2 className='homepage'>I am a Supporter</h2>
          </Row>
          <Row>
            <Col offset='s3' s={6}>
              <Link to={'/supportersignup'}><Button waves='light'>Sign Up</Button></Link>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}
