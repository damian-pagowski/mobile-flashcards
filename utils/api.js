import { AsyncStorage } from 'react-native'

export const FLASHCARD_STORAGE_KEY = 'Udacity:MobileFlashCards'

export const retrieveData = () => {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(results => {
    const data = JSON.parse(results)
    return data
  })
}

export const saveDeck = deck => {
  return AsyncStorage.mergeItem(
    FLASHCARD_STORAGE_KEY,
    JSON.stringify({ [deck.name]: deck })
  )
}

export const deleteDeck = deck => {
  return retrieveData().then(decks => {
    const newDecks = { ...decks }
    delete newDecks[deck.name]
    AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(newDecks))
  })
}

export const saveCard = (deck, card) => {
  AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify(decks[deck.name].cards.push(card)))
}
