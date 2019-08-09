// mapStateToProps - STATE >>  {}
// App.js:99 mapStateToProps - PROPS >>  {}
// reducer.js:6 GET_DECKSSTATE BEFORE >> {}
// reducer.js:7 GET_DECKS. ACTION {"type":"GET_DECKS","decks":{}}
// reducer.js:13 ADD_DECKSTATE BEFORE >> {}
// reducer.js:14 ADD_DECK. ACTION {"type":"ADD_DECK","deck":{"name":"psycho-deck","cards":[]}}
// App.js:35 PROPS {}
// reducer.js:23 CREATE_CARDSTATE BEFORE >> {"psycho-deck":{"name":"psycho-deck","cards":[]}}
// reducer.js:24 CREATE_CARD. ACTION {"type":"ADD_CARD","key":"psycho-deck","card":{"question":"jak sie masz","answer":"dobrze, dziekuje"}}
// reducer.js:23 CREATE_CARDSTATE BEFORE >> {"psycho-deck":{"name":"psycho-deck","cards":[{"question":"jak sie masz","answer":"dobrze, dziekuje"}]}}
// reducer.js:24 CREATE_CARD. ACTION {"type":"ADD_CARD","key":"psycho-deck","card":{"question":"jak sie chuj","answer":"dobrze, kurwa"}}
// reducer.js:13 ADD_DECKSTATE BEFORE >> {"psycho-deck":{"name":"psycho-deck","cards":[{"question":"jak sie masz","answer":"dobrze, dziekuje"},{"question":"jak sie chuj","answer":"dobrze, kurwa"}]}}
// reducer.js:14 ADD_DECK. ACTION {"type":"ADD_DECK","deck":{"name":"second-deck","cards":[]}}
// App.js:58 PROPS {dispatch: ƒ}
// App.js:98 mapStateToProps - STATE >>  {"psycho-deck":{"name":"psycho-deck","cards":[{"question":"jak sie masz","answer":"dobrze, dziekuje"},{"question":"jak sie chuj","answer":"dobrze, kurwa"}]},"second-deck":{"name":"second-deck","cards":[]}}
// App.js:99 mapStateToProps - PROPS >>  {}
//
var json = {
  'psycho-deck': {
    name: 'psycho-deck',
    cards: [
      { question: 'jak sie masz', answer: 'dobrze, dziekuje' },
      { question: 'jak sie chuj', answer: 'dobrze, kurwa' }
    ]
  },
  'second-deck': { name: 'second-deck', cards: [] }
}

import { getDecks, addCard, addDeck } from './data/actions'
import { saveDeck, saveCard, retrieveData } from './data/api'

function old2_componentDidMountOLD () {
  const decks = {}
  // get decks
  this.props.dispatch(getDecks(decks))

  // add deck
  const deck = {
    name: 'psycho-deck',
    cards: []
  }
  this.props.dispatch(addDeck(deck))
  console.log('PROPS', JSON.stringify(this.props))

  /// get decks
  // this.props.dispatch(getDecks(decks))

  /// add card
  const card = { question: 'jak sie masz', answer: 'dobrze, dziekuje' }
  this.props.dispatch(addCard({ key: deck.name, card }))

  const card2 = { question: 'jak sie chuj', answer: 'dobrze, kurwa' }
  this.props.dispatch(addCard({ key: deck.name, card: card2 }))
  // add deck

  const deck2 = {
    name: 'second-deck',
    cards: []
  }
  this.props.dispatch(addDeck(deck2))

  // get decks again
  // this.props.dispatch(getDecks(decks))

  console.log('PROPS', this.props)
}

function old_componentDidMount () {
  // var json = {"psycho-deck":{"name":"psycho-deck","cards":[{"question":"jak sie masz","answer":"dobrze, dziekuje"},{"question":"jak sie chuj","answer":"dobrze, kurwa"}]},"second-deck":{"name":"second-deck","cards":[]}}

  const firstDeck = { name: 'FIRST-deck', cards: [] }
  const secondDeck = { name: 'second-deck', cards: [] }
  const d3 = { name: 'DECK333', cards: [] }

  const questionOne = {
    question: 'jak sie masz',
    answer: 'dobrze, dziekuje'
  }
  const questionTwo = {
    question: 'kun kau czaj HUJ',
    answer: 'maj czaj'
  }
  // saveDeck(firstDeck)
  // saveDeck(d3)

  // saveCard(d3, questionTwo)
  saveCard(d3, {
    question: 'chuj i tyle',
    answer: 'nie boj nitz'
  })
  saveCard(d3, {
    question: 'karta mnie nie idzie',
    answer: 'chujowy ze mnie developer'
  })
  // saveCard(d3, questionTwo)

  retrieveData().then(data =>
    console.log('readstorage called in app', JSON.stringify(data))
  )
}
