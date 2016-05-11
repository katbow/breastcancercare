import React from 'react'
import { Row, Col } from 'react-materialize'
import Cards from './Cards.js'

export default class CardsList extends React.Component {
  constructor () {
    super()
    this.state = {
      activecard: '',
      displayCard: this.displayCard.bind(this),
      changeCard: this.changeCard.bind(this)
    }
  }
  componentWillMount () {
    this.setState({
      activecard: this.props.cards[0],
    })
  }
  saveForLater (title) {
    console.log('save', title)
    this.changeCard()
  }
  changeCard () {
    const index = this.props.cards.indexOf(this.state.activecard)
    console.log(index)
    console.log('THIS', this)
    if (index === 2) {
      this.props.history.pushState('/aims')
    }
    this.setState({
      activecard: this.props.cards[index+1]
    })
  }
  notInterested (title) {
    console.log('no', title)
    this.changeCard()
  }
  acceptChallenge (title) {
    console.log('accept', title)
    this.changeCard()
  }
  displayCard () {
    return (
      <Cards
        author={this.state.activecard.author}
        type={this.state.activecard.type}
        title={this.state.activecard.title}
        details={this.state.activecard.details}
        imgUrl={this.state.activecard.imgUrl}
        acceptChallenge={this.acceptChallenge.bind(this)}
        saveForLater={this.saveForLater.bind(this)}
        notInterested={this.notInterested.bind(this)}
      />
    )
  }

  render () {
    return (
      <div className='card-list'>
        <Row>
          <Col s={10} m={8} l={6} offset='s1 m2 l3'>
            {this.displayCard()}

          </Col>
        </Row>
      </div>
    )
  }
}

CardsList.defaultProps = {
  cards: [
    {
      title: 'Do some light exercise',
      details: 'daily exercise will lighten the mood',
      imgUrl: 'img/walking-1.jpg',
      type: 'activity',
      author: 'Deidre, Breast Cancer Care Nurse'
    },
    {
      title: 'Find a different recipe to cook',
      details: 'food is one of the chief joys of life. find some new flavours',
      imgUrl: 'img/cooking-1.jpg',
      type: 'activity',
      author: 'Deidre, Breast Cancer Care Nurse'
    },
    {
      title: 'it\'s normal for your body to change',
      details: 'As body shape changes what we feel comfortable wearing changes.  Give yourself some time to explore your wardrobe and discard items that no longer help you to feel good. (Anna)',
      imgUrl: 'img/body-1.jpg',
      type: 'normalisation',
      author: 'Lee, breast-cancer survivor'
    },
    {
      title: 'it\'s normal for your body to change',
      details: 'As body shape changes what we feel comfortable wearing changes.  Give yourself some time to explore your wardrobe and discard items that no longer help you to feel good. (Anna)',
      imgUrl: 'img/body-1.jpg',
      type: 'normalisation',
      author: 'Sally, breast-cancer survivor'
    },
    {
      title: 'call an old friend',
      details: 'Calling an old friend will ...',
      imgUrl: 'img/body-1.jpg',
      type: 'activity',
      author: 'Anna, a Breast Cancer Care Nurse'
    }
  ]
}
