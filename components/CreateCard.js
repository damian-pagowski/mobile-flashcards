import React, { Component } from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { connect } from "react-redux";
import { addCard } from "../actions";
import { _saveCard } from "../utils/api";
import styles from "../resources/styles";
import { Input, Button } from "react-native-elements";

class CreateCard extends Component {
  static navigationOptions = {
    title: "Add Question",
  };

  state = {
    question: "",
    answer: "",
  };

  handleSubmit() {
    let key = this.props.deck.name;
    let question = this.state.card;
    let answer = this.state.answer;
    let card = [{ question, answer }];

    _saveCard({ key, card });

    this.props.createCard(key, card);
    this.setState(() => ({ question: "", answer: "" }));
    this.props.navigation.goBack();
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.content}>
          <Input
            style={styles.input}
            onChangeText={question => this.setState({ question })}
            value={this.state.question}
            placeholder="Question"
          />
          <Input
            style={styles.input}
            onChangeText={answer => this.setState({ answer })}
            value={this.state.answer}
            placeholder="Answer"
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

const mapStateToProps = (state, props) => {
  return {
    currentDeckName : props.navigation.getParam('deckName', 'none'),
    decks: state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createCard: (name, card) => dispatch(addCard({ name, card })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCard);
