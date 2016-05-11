import React from 'react'
import { Row, Col, Card, CardTitle, Button } from 'react-materialize'
import { Link } from 'react-router'

class MotivationCard extends React.Component {
  constructor () {
    super()
    this.state = { type: 'motivation' }
  }
  componentDidMount () {
    this.setState({
      type: this.props.type
    })
  }
  questionBar () {
    console.log(this.state)
    let title = this.props.title
    return this.state.type === 'activity'? <Row>
      <Col s={4} m={4} l={4}>
        <div
          onClick={this.props.acceptChallenge.bind(this, { title })}
          className='decision-buttons'
        >
          <a className='accept-challenge' href='#'>
            <p className='accept-challenge'>I will do this</p>
          </a>
          <img src='http://dl38tvmapnp8c.cloudfront.net/images/newsletter%20page/TickMark.png'/>
        </div>
      </Col>
      <Col s={4} m={4} l={4}>
        <div onClick={this.props.saveForLater.bind(this, { title })}
          className='decision-buttons'
        >
          <a href='#'>
            <p className='save-for-later'>Save for later</p>
          </a>
        </div>
      </Col>
      <Col s={4} m={4} l={4}>
        <div onClick={this.props.notInterested.bind(this, { title })}
          className='decision-buttons'
        >
          <a className='not-interested' href='#'>
            <p className='not-interested'> Not interested</p>
          </a>
          <img src='http://vignette4.wikia.nocookie.net/thecrew/images/6/6b/X-mark.png/revision/20140810141000'/>
        </div>
      </Col>
    </Row> : ''
  }
  render () {
    return (
      <Card header={<CardTitle reveal image={this.props.imgUrl} waves='light'/
      >}
        title={this.props.title}
        reveal={<p>{this.props.details}</p>}
      >
        {this.questionBar()}
        <p>by {this.props.author}</p>
        <Link to='/aims'><Button className='submit-button' waves='light'>Go to Favourites</Button></Link>
      </Card>
    )
  }
}

MotivationCard.defaultProps = {
  title: 'Do some light exercise',
  details: ''
}

export default MotivationCard
