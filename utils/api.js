import { AsyncStorage } from 'react-native'

const STORAGE_KEY = 'Mobileflashcard:data'

export function fetchData () {
  return AsyncStorage.getItem(STORAGE_KEY)
}

export function addQuestion ({ deck, question }) {
  const entry = { ...deck }
  entry.cards = [...entry.cards, question]
  return saveEntry({ entry, key: deck.name })
}

export function saveEntry ({ entry, key }) {
  return AsyncStorage.mergeItem(
    STORAGE_KEY,
    JSON.stringify({
      [key]: entry
    })
  )
}

export function removeEntry (key) {
  return AsyncStorage.getItem(STORAGE_KEY).then(results => {
    const data = JSON.parse(results)
    data[key] = undefined
    delete data[key]
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  })
}