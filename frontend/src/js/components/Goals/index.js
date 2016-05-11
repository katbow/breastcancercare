import React, { Component } from 'react'
import { Row, Col, Input } from 'react-materialize'

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
                          <Input name='group1' type='checkbox' label='Not for me' />
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
                          <Input name='group1' type='checkbox' label='Not for me' />
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
