import React, { Component } from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { connect } from "react-redux";
import { addCard } from "../actions";
import { saveCard } from "../utils/api";
import styles from "../resources/styles";
import { Input, Button } from "react-native-elements";
import colors from "../resources/colors";

class CreateCard extends Component {
  static navigationOptions = {
    title: "Add Question",
  };

  state = {
    question: "",
    answer: "",
  };

  handleSubmit() {
    const key = this.props.currentDeckName;
    console.log("CURRENT DECK NAME >>> ", key);
    const card = { ...this.state };
    const deck = this.props.decks[key];
    console.log(">>> added CURRENT DECK", JSON.stringify(deck));
    console.log(">>> added CURRENT DECK > CARD", JSON.stringify(card));

    console.log(">>> ADDING CARD PROPS OBJECTS>> ", JSON.stringify(Object.keys(this.props)));
    this.props.dispatch(addCard({ key, card }))
    saveCard( deck, card );
    // >>> ADDING CARD PROPS OBJECTS>>  ["screenProps","navigation","currentDeckName","decks","dispatch"]
    // this.props.createCard(key, card);
    this.setState(() => ({ question: "", answer: "" }));
    console.log(">>> added card-card", JSON.stringify(card));
    console.log(">>> added card-props", JSON.stringify(this.props));

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
            backgroundColor={colors.buttonBlue}
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
    currentDeckName: props.navigation.getParam("deckName", "none"),
    decks: state,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     createCard: (name, card) => dispatch(addCard({ name, card })),
//   };
// };

export default connect(mapStateToProps)(CreateCard);
