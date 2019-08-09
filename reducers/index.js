import { GET_DECKS, ADD_DECK, ADD_CARD, REMOVE_DECK } from '../actions/index'

export default function decks (state = {}, action) {
  switch (action.type) {
    case GET_DECKS:
      console.log('GET_DECKSSTATE BEFORE >>', JSON.stringify(state)) // TODO REMOVE
      console.log('GET_DECKS. ACTION', JSON.stringify(action)) // TODO REMOVE
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK: {
      console.log('ADD_DECKSTATE BEFORE >>', JSON.stringify(state)) // TODO REMOVE
      console.log('ADD_DECK. ACTION', JSON.stringify(action)) // TODO REMOVE
      return {
        ...state,
        [action.deck.name]: {
          ...action.deck
        }
      }
    }
    case ADD_CARD: {
      console.log('CREATE_CARDSTATE BEFORE >>', JSON.stringify(state)) // TODO REMOVE
      console.log('CREATE_CARD. ACTION', JSON.stringify(action)) // TODO REMOVE
      return {
        ...state,
        [action.key]: {
          ...state[action.key],
          cards: [...state[action.key].cards, action.card]
        }
      }
    }

    case REMOVE_DECK: {
      console.log('REMOVE_DECK. STATE BEFORE>>', JSON.stringify(state)) // TODO REMOVE
      console.log('REMOVE_DECK. ACTION', JSON.stringify(action)) // TODO REMOVE
      const newState = { ...state }
      delete newState[action.deck.name]
      return newState
    }
    default:
      return state
  }
}
