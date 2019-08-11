import React, { Component } from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { connect } from "react-redux";
import { addDeck } from "../actions";
import styles from "../resources/styles";
import { Input, Button } from "react-native-elements";
import colors from "../resources/colors";
import { saveEntry } from "../utils/api";

class CreateDeck extends Component {
  static navigationOptions = {
    name: "New Deck",
  };

  state = { name: "" };

  handleSubmit() {
    const name = this.state.name;
    const deck = {
      name,
      cards: [],
    };
    this.props.addDeck(deck);
    saveEntry({key: name, entry: deck})
    this.setState({ name: "" });
    this.props.navigation.navigate("DeckDetails", { deckName: deck.name });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.content}>
          <View style={styles.createCardInputGroup}>
            <Input
              style={styles.input}
              onChangeText={name => this.setState({ name })}
              value={this.state.name}
              placeholder="What is the name of new deck?"
            />
          </View>

          <Button
            backgroundColor={colors.buttonBlue}
            buttonStyle={styles.button}
            title="Submit"
            disabled={this.state.name.length < 1}
            onPress={() => this.handleSubmit()}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addDeck: deck => dispatch(addDeck(deck)),
  };
};

export default connect(null, mapDispatchToProps)(CreateDeck);
