import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import styles from "../resources/styles";
import { Text, Card, Button } from "react-native-elements";

class DeckDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params;
    return {
      title: deck.name,
    };
  };

  render() {
    const { deck, navigation } = this.props;
    return (
      <View style={styles.container}>
           <Card title={deck.title.toUpperCase()}>
          <Text style={styles.textCenter}>Number of Questions:</Text>
          <Text h3 style={styles.textCenter}>
            {deck.cards.length}
          </Text>
        </Card>
        <View style={styles.footer}>
          <Button
            backgroundColor="#03A9F4"
            buttonStyle={styles.button}
            title="Add Question"
            onPress={() => navigation.navigate("CreateCard", { deck: deck })}
          />
          {deck.questions.length > 0 &&
            <Button
              backgroundColor="#03A9F4"
              buttonStyle={styles.button}
              title="Start Quiz"
              onPress={() => navigation.navigate("Quiz", { deck: deck })}
            />}
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({decks}, props) => {
  return {
    deck: decks[props.navigation.state.params.deck.name],
  };
};

export default connect(mapStateToProps)(DeckDetails);
