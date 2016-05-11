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
      title: 'Wear something that makes you feel good',
      details: 'Dressing up can feel great! Put on something fancy or a bit different and it could give you a boost.',
      imgUrl: 'https://unsplash.com/photos/zv-3GbTGnzc',
      type: 'activity',
      author: 'Deidre, Breast Cancer Care Nurse',
      category: 'fun'
    },
    {
      title: 'Create a playlist of songs that make you feel good',
      details: 'You could even dance along!',
      imgUrl: 'https://unsplash.com/photos/7_Bau1vYR8I',
      type: 'activity',
      author: 'Kristina at Breast Cancer Care',
      category: 'fun'
    },
    {
      title: 'Make a facemask from scratch ',
      details: 'Feels even better when you use it knowing you made it!',
      imgUrl: 'http://www.marieclaire.com/beauty/how-to/a2830/best-homemade-face-masks/?zoomable',
      type: 'activity',
      author: 'Marie Claire',
      category: 'fun'
    },
    {
      title: 'Buy or do something nice for someone else ',
      details: 'Helping other people feel good helps you feel good too.',
      imgUrl: 'https://unsplash.com/photos/7pGehyH7o64',
      type: 'activity',
      author: 'Kath at Breast Cancer Care',
      category: 'fun'
    },
    {
      title: 'Have coffee with a friend',
      details: 'You can even go for a fancy coffee to really spice it up.',
      imgUrl: 'https://unsplash.com/photos/4qJdtfJ2MmQ',
      type: 'activity',
      author: 'Anna, a Breast Cancer Survivor',
      category: 'fun'
    },
    {
      title: 'Get your pencils out and spend some time colouring in.  ',
      details: 'Adult colouring books are a fantastic way to help your brain switch off while you focus on making beautiful images. Your local stationer should have some colouring books/magazines or print one from the internet - we love this one by blogger Valentina. ',
      imgUrl: 'https://farm4.staticflickr.com/3178/3111390259_fd8633e9ec_o_d.jpg',
      type: 'activity',
      author: 'The Team at Breast Cancer Care',
      category: 'mindfulness'
    },
    {
      title: 'Get your pencils out and spend some time colouring in.  ',
      details: 'Adult colouring books are a fantastic way to help your brain switch off while you focus on making beautiful images. Your local stationer should have some colouring books/magazines or print one from the internet - we love this one by blogger Valentina. ',
      imgUrl: 'https://farm4.staticflickr.com/3178/3111390259_fd8633e9ec_o_d.jpg',
      type: 'activity',
      author: 'The Team at Breast Cancer Care',
      category: 'mindfulness'
    },
  ]
}
