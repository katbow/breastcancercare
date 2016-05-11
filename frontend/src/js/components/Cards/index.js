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
      title: 'call an old friend',
      details: 'Calling an old friend will ...',
      imgUrl: 'img/body-1.jpg',
      type: 'activity',
      author: 'Anna, a Breast Cancer Care Nurse'
    },
    {
      title: 'Deliver a meal',
      details: 'Make sure to ask in advance if they have any dietary restrictions or are following any guidelines. Stay for a visit, or just drop off the food if they’re not up for it (a cooler left outside the front door is perfect for this).',
      imgUrl: 'img/meal.jpg',
      type: 'support',
      author: 'Aurore, breast-cancer survivor'
    },
    {
      title: 'Send a quick email, text, or message saying you’re thinking of them',
      details: '',
      imgUrl: 'img/text.jpg',
      type: 'support',
      author: 'Megane, breast-cancer survivor'
    },
    {
      title: 'Add “Feel free to take me up on this offer whenever” when you offer help',
      details: 'That way they’ll know the offer will still be sincere whenever they need it (in a week, a month, a year).',
      imgUrl: 'img/offer.jpg',
      type: 'support',
      author: 'Coralie, a Breast Cancer Care Nurse'
    },
    {
      title: 'Go for a movie',
      details: 'Offer to take them out to a movie. If they’re too tired, come by with a rental',
      imgUrl: 'img/popcorn.jpg',
      type: 'support',
      author: 'Tristana, a Breast Cancer Care Nurse'
    },
    {
      title: 'Offer to visit',
      details: 'Check that they\’re feeling up for it',
      imgUrl: 'img/visite.jpg',
      type: 'support',
      author: 'Justine, a Breast Cancer Care Nurse'
    }
  ]
}
