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
      title: 'Wear something that makes you feel good',
      details: 'Dressing up can feel great! Put on something fancy or a bit different and it could give you a boost.',
      imgUrl: 'img/dressup.jpg',
      type: 'activity',
      author: 'Deidre, Breast Cancer Care Nurse',
      category: 'fun'
    },
    {
      title: 'Create a playlist of songs that make you feel good',
      details: 'You could even dance along!',
      imgUrl: 'img/songlist.jpg',
      type: 'activity',
      author: 'Kristina at Breast Cancer Care',
      category: 'fun'
    },
    {
      title: 'Make a facemask from scratch ',
      details: 'Feels even better when you use it knowing you made it!',
      imgUrl: 'img/facemask.jpg',
      type: 'activity',
      author: 'Marie Claire',
      category: 'fun'
    },
    {
      title: 'Buy or do something nice for someone else ',
      details: 'Helping other people feel good helps you feel good too.',
      imgUrl: 'img/flowers.jpg',
      type: 'activity',
      author: 'Kath at Breast Cancer Care',
      category: 'fun'
    },
    {
      title: 'Have coffee with a friend',
      details: 'You can even go for a fancy coffee to really spice it up.',
      imgUrl: 'img/coffeefriend.jpg',
      type: 'activity',
      author: 'Anna, a Breast Cancer Survivor',
      category: 'fun'
    },
    {
      title: 'Get your pencils out and spend some time colouring in.  ',
      details: 'Adult colouring books are a fantastic way to help your brain switch off while you focus on making beautiful images. Your local stationer should have some colouring books/magazines or print one from the internet - we love this one by blogger Valentina. ',
      imgUrl: 'img/colouring.jpg',
      type: 'activity',
      author: 'The Team at Breast Cancer Care',
      category: 'mindfulness'
    },
    {
      title: 'Switch on your brain and do some Sudoku or Puzzles.',
      details: 'There\'s nothing like a puzzle to get the cogs turning - open a newspaper and do the Sudoku Puzzle, get a puzzle book or go online to find great puzzles or apps. Head over to the Guardian for a free printable Sudoku every day!',
      imgUrl: 'img/puzzle.jpg',
      type: 'activity',
      author: 'Kath at Breast Cancer Care',
      category: 'mindfulness'
    },
    {
      title: 'Download the "breathe to relax" app',
      details: 'Breathe2Relax is a portable stress management tool which provides detailed information on the effects of stress on the body and instructions and practice exercises to help users learn the stress management skill called diaphragmatic breathing. Get it here: https://itunes.apple.com/gb/app/breathe2relax/id425720246?mt=8',
      imgUrl: 'img/relax.jpg',
      type: 'activity',
      author: 'Kristina at Breast Cancer Care',
      category: 'mindfulness'
    },
    {
      title: 'Learn about something new.',
      details: 'Is there something you always wanted to learn about but never had the time? Take the time today to read up on a topic you\'ve always been interested in. History of India? Anatomy of a Bee? How the internet works? If you need over to the random page on Wikipedia and learn about something completely new!',
      imgUrl: 'img/books.jpg',
      type: 'activity',
      author: 'The Team at Breast Cancer Care',
      category: 'mindfulness'
    },
    {
      title: 'Take a photo of something beautiful. ',
      details: 'Get your camera and take a photo of something not because something\'s happening with it, or there\'s an event, but just because you see beauty in it.  Put the photo somewhere you\'ll see it occasionally to remind you about the unexpected beauty in the world.',
      imgUrl: 'img/pictures.jpg',
      type: 'activity',
      author: 'The Team at Breast Cancer Care',
      category: 'mindfulness'
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
