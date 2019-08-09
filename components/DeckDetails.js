import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import styles from '../resources/styles'
import { Text, Card, Button } from 'react-native-elements'
import colors from '../resources/colors'

class DeckDetails extends Component {
  render () {
    const currentDeckName = this.props.navigation.getParam('deckName', 'none')
    const deck = this.props.decks[currentDeckName] ? this.props.decks[currentDeckName] : {name : "none", cards: []}
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
            onPress={() => this.props.navigation.navigate('CreateCard', { deckName: currentDeckName })}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state, props) => {
  console.log('mapStateToProps > decks > ', JSON.stringify(state))
  console.log('mapStateToProps > props >', JSON.stringify(Object.keys(props)))
  console.log('>>>')
  return {
    decks: state
  }
}

export default connect(mapStateToProps)(DeckDetails)
