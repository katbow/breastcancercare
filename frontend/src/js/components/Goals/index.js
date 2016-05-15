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
                            <img src='https://cloud.githubusercontent.com/assets/1287388/15274022/f9ce5198-1aa0-11e6-986e-9f52175df0e6.png' />
                            <img src='https://cloud.githubusercontent.com/assets/1287388/15274020/f9cb3440-1aa0-11e6-9e62-ae89adc18e05.png' />
                            <img src='https://cloud.githubusercontent.com/assets/1287388/15274019/f9c64d9a-1aa0-11e6-8c09-7ab479ad4caf.png' />
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
                            <img src='https://cloud.githubusercontent.com/assets/1287388/15274022/f9ce5198-1aa0-11e6-986e-9f52175df0e6.png' />
                            <img src='https://cloud.githubusercontent.com/assets/1287388/15274020/f9cb3440-1aa0-11e6-9e62-ae89adc18e05.png' />
                            <img src='https://cloud.githubusercontent.com/assets/1287388/15274019/f9c64d9a-1aa0-11e6-8c09-7ab479ad4caf.png' />
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
     [ 'Mindfulness', 'https://cloud.githubusercontent.com/assets/1287388/15274015/f9ba52ec-1aa0-11e6-9b85-c0c6270f164b.png' ],
     [ 'Fun and frivolous', 'https://cloud.githubusercontent.com/assets/1287388/15274021/f9cd3326-1aa0-11e6-9169-efb44b486e45.png' ]
  ],
  goals2: [
     [ 'Healthy Living', 'https://cloud.githubusercontent.com/assets/1287388/15274023/f9ce909a-1aa0-11e6-860f-45e383795e24.png' ],
     [ 'Medical', 'https://cloud.githubusercontent.com/assets/1287388/15274017/f9be5252-1aa0-11e6-9751-e68787a68369.png' ]
  ]
}

export default Goals
