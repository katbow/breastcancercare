import React, { Component } from 'react'
import { Row, Col, Input, Button } from 'react-materialize'
import { Link } from 'react-router'

export default class Goals extends Component {

  render () {
    return (
      <div>
        <Row>
          <Col s={6}>
            <Row>
              <Col s={10} offset={'s1'} className='goal-container'>
                {this.props.goals1.map(goal => {
                  return (
                    <Row>
                      <div className='card-panel'>
                        <Col s={4} className='goal-img'>
                          <img src={goal[1]} />
                        </Col>
                        <Col s={7} offset={'s1'} className='goal'>
                          <h5>{goal[0]}</h5>
                          <div className='level'>
                            <img src='img/level1c.png' />
                            <img src='img/level2c.png' />
                            <img src='img/level3c.png' />
                          </div>
                          <Input name='group1' type='checkbox' label='Yes, Please!' />
                        </Col>
                      </div>
                    </Row>
                  )
                })
                }
              </Col>
            </Row>
          </Col>
          <Col s={6}>
            <Row>
              <Col s={10} offset={'s1'} className='goal-container'>
                {this.props.goals2.map(goal => {
                  return (
                    <Row>
                      <div className='card-panel'>
                        <Col s={4} className='goal-img'>
                          <img src={goal[1]} />
                        </Col>
                        <Col s={7} offset={'s1'} className='goal'>
                          <h5>{goal[0]}</h5>
                          <div className='level'>
                            <img src='img/level1c.png' />
                            <img src='img/level2c.png' />
                            <img src='img/level3c.png' />
                          </div>
                          <Input name='group1' type='checkbox' label='Yes, Please!' />
                        </Col>
                      </div>
                    </Row>
                  )
                })
                }
              </Col>
            </Row>

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
  goals1: [
     [ 'Mindfulness', 'img/Mindfulness.png' ],
     [ 'Fun and frivolous', 'img/Fun.png' ]
  ],
  goals2: [
     [ 'Healthy Living', 'img/HealthyLiving.png' ],
     [ 'Medical', 'img/Medical.png' ]
  ]
}

export default Goals
