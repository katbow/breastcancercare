import React, { Component } from 'react'
import { Row, Col, CardPanel, Button } from 'react-materialize'
import { Link } from 'react-router'

export default class Goals extends Component {


  render () {
    return (
      <div>
        <Row>
          <Col s={8} offset={'s2'} className='goals-container'>

            {this.props.goals.map(goal => {
              return (
                <CardPanel className='teal lighten-4 black-text'>
                  {goal}
                </CardPanel>
              )
            })
            }
          </Col>
        </Row>
        <Row>
          <Col offset='s4' s={8}>
            <Link to={'/cards'}><Button className='submit-button' waves='light' large={true}>Skip Step</Button></Link>
          </Col>
        </Row>
        <Row>
          <Col offset='s4' s={8}>
            <Link to={'/cards'}><Button className='submit-button' waves='light' large={true}>Complete</Button></Link>
          </Col>
        </Row>
      </div>
    )
  }
}

Goals.defaultProps = {
  goals: [
     'Mindfulness / Overcoming anxieties and concerns, practical & escapism',
     'Fun stuff / Fun and frivolous, improving mood (watch out these don\'t alienate people of lower income)',
     'Helpful hints for recovery (personalised to user by stated preferences/energy levels)',
     'Normalisation cards - scientific evidence normalising their experience, and hints at dealing with that issue',
     'User-generated',
     'Measurement cards - helps us track the experience over time and tailor suggestion',
     'Inspirational cards - simply positive, not asking anyone to do anything',
     'Sponsored cards from partners'
  ]
}

export default Goals
