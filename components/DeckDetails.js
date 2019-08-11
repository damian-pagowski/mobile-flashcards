import React, { Component } from 'react'
import { View, Alert } from 'react-native'
import { connect } from 'react-redux'
import styles from '../resources/styles'
import { Text, Card, Button, Icon } from 'react-native-elements'
import colors from '../resources/colors'
import { removeDeck } from '../actions'
import { removeEntry } from '../utils/api'

class DeckDetails extends Component {
  render () {
    const currentDeckName = this.props.navigation.getParam('deckName', 'none')
    const deck = this.props.decks[currentDeckName]
      ? this.props.decks[currentDeckName]
      : { name: 'none', cards: [] }
    return (
      <View style={styles.container}>
        <Card title={deck.name.toUpperCase()}>
          <Text style={styles.header}>Number of Questions:</Text>
          <Text h3 style={styles.textCenter}>
            {deck.cards.length}
          </Text>
        </Card>
        <View style={styles.footer}>
          <Button
            backgroundColor={colors.buttonBlue}
            buttonStyle={styles.button}
            title='Add Question'
            onPress={() =>
              this.props.navigation.navigate('CreateCard', {
                deckName: currentDeckName
              })}
          />
          <Button
            backgroundColor={colors.buttonBlue}
            buttonStyle={styles.button}
            title='Start Quiz'
            disabled={deck.cards.length < 1}
            onPress={() =>
              this.props.navigation.navigate('Quiz', {
                deckName: currentDeckName
              })}
          />
          <Button
            backgroundColor={colors.buttonRed}
            buttonStyle={styles.button}
            title='Delete Deck'
            onPress={() =>
              Alert.alert(
                'Removing deck',
                'Are you sure you want remove this deck? It cannot be undone.',
                [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed - do nothing'),
                    style: 'cancel'
                  },
                  {
                    text: 'Delete',
                    onPress: () => {
                      removeEntry(currentDeckName)
                      this.props.dispatch(removeDeck(deck))
                      this.props.navigation.goBack()
                    }
                  }
                ],
                { cancelable: false }
              )}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    decks: state
  }
}

export default connect(mapStateToProps)(DeckDetails)
