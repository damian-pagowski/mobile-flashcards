import React, { Component } from "react";
import { connect } from "react-redux";
import { View, TouchableOpacity, FlatList } from "react-native";
import { getDecks } from "../actions";
import { retrieveData } from "../utils/api";
import styles from "../resources/styles";
import { ListItem } from "react-native-elements";

const RenderedItem = ({ card, navigation }) => {
  return (
    <ListItem
      component={TouchableOpacity}
      onPress={() => {
        navigation.navigate("DeckDetails", { deckName: card.name });
      }}
      title={card.name || "Unknown"}
      subtitle={"Questions: " + card.cards ? card.cards.length : 0}
      leftAvatar={{
        title:
          card.name && card.name.length > 0
            ? card.name.charAt(0).toUpperCase()
            : "?",
      }}
    />
  );
};

class DeckList extends Component {
  static navigationOptions = {
    title: "List of Decks",
  };

  componentDidMount() {
    retrieveData().then(decks => this.props.dispatch(getDecks(decks)));
  }

  keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <View style={styles.deckList}>
        <FlatList
          data={Object.keys(this.props.decks)}
          keyExtractor={(card, index) => index.toString()}
          renderItem={card =>
            <RenderedItem
              card={this.props.decks[card.item]}
              navigation={this.props.navigation}
            />}
        />
      </View>
    );
  }
}

const mapStateToProps = decks => {
  return { decks };
};

export default connect(mapStateToProps)(DeckList);
