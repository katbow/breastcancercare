import React, { Component } from 'react'
import { Row, Col, CardPanel } from 'react-materialize'

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
