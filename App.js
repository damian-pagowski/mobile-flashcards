import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
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
import { Ionicons } from '@expo/vector-icons'

const store = createStore(reducer)

const TabNavigator = createMaterialTopTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) =>
        <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    }
  },
  CreateDeck: {
    screen: CreateDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) =>
        <Ionicons name='ios-add-circle' size={30} color={tintColor} />
    }
  }
})

const StackNavigator = createStackNavigator({
  Home: { screen: TabNavigator },
  DeckDetails: { screen: DeckDetails },
  Quiz: { screen: Quiz },
  CreateDeck: { screen: CreateDeck },
  CreateCard: { screen: CreateCard }
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
