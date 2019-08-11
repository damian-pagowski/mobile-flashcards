import React, { Component } from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { connect } from "react-redux";
import { addCard } from "../actions";
import { addQuestion } from "../utils/api";
import styles from "../resources/styles";
import { Input, Button } from "react-native-elements";
import colors from "../resources/colors";

class CreateCard extends Component {
  state = {
    question: "",
    answer: "",
  };

  handleSubmit() {
    const key = this.props.currentDeckName;
    const card = { ...this.state };
    const deck = this.props.decks[key];
    this.props.dispatch(addCard({ key, card }));
    addQuestion({ deck: deck, question: card })
    this.setState(() => ({ question: "", answer: "" }));
    this.props.navigation.goBack();
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.content}>
          <View style={styles.createCardInputGroup}>
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
          </View>

          <Button
            backgroundColor={colors.buttonBlue}
            buttonStyle={styles.button}
            title="Submit"
            disabled={
              this.state.answer.length < 1 || this.state.question.length < 1
            }
            onPress={() => this.handleSubmit()}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    currentDeckName: props.navigation.getParam("deckName", "none"),
    decks: state,
  };
};

export default connect(mapStateToProps)(CreateCard);
