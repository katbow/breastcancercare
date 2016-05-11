import React, { Component } from 'react'
import { Link } from 'react-router'
import { Col, Row, Button, Input, Collapsible, CollapsibleItem } from 'react-materialize'

export default class SignUp extends Component {
  render () {
    return (
      <Row>
        <Col s={8} m={6} l={4} offset='s2 m3 l4'>
          <Row>
            <Input label='Email' s={12} />
          </Row>
          <Row>
            <Input type='password' label='Password' s={12} />
          </Row>
          <Row>
            <Collapsible popout>
              <CollapsibleItem header='Apply for text notifications' icon='phone'>
                <Input label='Mobile Number' s={12} />
              </CollapsibleItem>
            </Collapsible>
          </Row>
          <Row>
            <Collapsible popout>
              <CollapsibleItem header='Apply for post cards' icon='place'>
                <Input label='House Number' s={12} />
                <Input label='Street Name' s={12} />
                <Input label='Post Code' s={12} />
                <Input label='City' s={12} />
                <Input label='Country' s={12} />
              </CollapsibleItem>
            </Collapsible>
          </Row>
          <Row>
            <Col offset='s3' s={6}>
              <Link to={'/survivorgoals'}><Button className='submit-button' waves='light' large={true}>{this.props.buttonText}</Button></Link>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}
