import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import decks from './reducers/index'
import DeckList from './components/DeckList'
import DeckDetails from './components/DeckDetails'
import Quiz from './components/Quiz'
import CreateDeck from './components/CreateDeck'
import CreateCard from './components/CreateCard'
import {
  createMaterialTopTabNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation'
import { View, Button } from 'react-native'

const store = createStore(decks)

const TabNavigator = createMaterialTopTabNavigator({
  DeckList: {
    screen: DeckList
  },
  CreateDeck: {
    screen: CreateDeck
  }
})

const StackNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator,
    navigationOptions: () => ({
      title: `Mobile FlashCards`
    })
  },
  DeckDetails: {
    screen: DeckDetails,
    navigationOptions: () => ({
      title: `Deck Details`,
      headerTruncatedBackTitle: `Deck List`
    })
  },
  Quiz: { screen: Quiz },
  CreateDeck: {
    screen: CreateDeck,
    navigationOptions: () => ({
      title: `Create Deck`
    })
  },
  CreateCard: {
    screen: CreateCard,
    navigationOptions: () => ({
      title: `Create Card`
    })
  }
})

const AppContainer = createAppContainer(StackNavigator)

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
