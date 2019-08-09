export const GET_DECKS = 'GET_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'
export const REMOVE_DECK = 'REMOVE_DECK'


export function getDecks (decks) {
  return {
    type: GET_DECKS,
    decks
  }
}

export function addDeck ( deck) {
  return {
    type: ADD_DECK,
    deck
  }
}
export function removeDeck (deck) {
  return {
    type: REMOVE_DECK,
    deck
  }
}

export function addCard ({key, card}) {
  return {
    type: ADD_CARD,
    key,
    card
  }
}
