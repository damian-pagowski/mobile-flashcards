import React, { Component } from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { connect } from "react-redux";
import { addDeck } from "../actions";
import { _saveDeck } from "../utils/api";
import styles from "../resources/styles";
import { Input, Button } from "react-native-elements";

class CreateDeck extends Component {
  static navigationOptions = {
    title: "New Deck",
  };

  state = { name: "" };

  handleSubmit() {
    const name = this.state.title;
    const deck = {
      name,
      cards: [],
    };
    this.props.addDeck(name, deck);
    _saveDeck({ name, deck });
    this.setState({ name: "" });
    this.props.navigation.navigate("DeckDetails", { deck });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.content}>
          <Input
            style={styles.input}
            onChangeText={title => this.setState({ title })}
            value={this.state.text}
            placeholder="What is the title of new deck?"
          />
          <Button
            backgroundColor="#03A9F4"
            buttonStyle={styles.button}
            title="Submit"
            onPress={() => this.handleSubmit()}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addDeck: (name, deck) => dispatch(addDeck({ [name]: deck })),
  };
};

export default connect(null, mapDispatchToProps)(CreateDeck);
