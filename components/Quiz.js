import React, { Component } from "react";
import { connect } from "react-redux";
import { View, TouchableOpacity } from "react-native";
import {
  clearLocalNotification,
  setLocalNotification,
} from "../utils/notification";
import styles from "../resources/styles";
import FlipCard from "react-native-flip-card";
import { Card, Button, Icon, Text } from "react-native-elements";
import colors from "../resources/colors";
const CORRECT = "correct";
const WRONG = "wrong";

class Quiz extends Component {
  static navigationOptions = {
    name: "Quiz",
  };

  state = {
    current: 0,
    scores: 0,
    isFinished: false,
  };

  componentDidMount() {
    clearLocalNotification().then(setLocalNotification);
  }
  render() {
    const numberOfQuestions = this.props.questions.length;
    return this.state.isFinished
      ? <View style={styles.container}>
          <View style={styles.headerQuizContainer}>
            <Text style={styles.textCenter}>
              Your Result is {this.getPercentage()}%
            </Text>
            <View style={styles.iconContainerQuiz}>
              <Icon
                raised
                name="trophy"
                type="font-awesome"
                color={colors.buttonBlue}
              />
            </View>
          </View>

          <View style={styles.buttonsInFooterQuiz}>
            <Button
              buttonStyle={styles.buttonGreenQuiz}
              title="Try Again"
              onPress={() => this.restartQuiz()}
            />
          </View>
        </View>
      : <View style={styles.container}>
          {/* question number */}
          <View style={styles.headerQuizContainer}>
            <Text style={styles.textCenter}>
              {this.props.deckName}
            </Text>
            <Text style={styles.textCenter}>
              {this.state.current + 1} / {numberOfQuestions}
            </Text>
          </View>
          {/* card */}
          <View style={styles.flipCardContainer}>
            <FlipCard>
              {/* Face Side */}
              <View style={styles.flipCardFront}>
                <Text style={styles.textCenter}>
                  {this.props.questions[this.state.current]["question"]}
                </Text>
              </View>
              {/* Back Side */}
              <View style={styles.flipCardBack}>
                <Text style={styles.textCenter}>
                  {this.props.questions[this.state.current]["answer"]}
                </Text>
              </View>
            </FlipCard>
          </View>
          {/* buttons */}
          <View style={styles.buttonsInFooterQuiz}>
            <Button
              buttonStyle={styles.buttonGreenQuiz}
              title="Correct"
              onPress={() => this.submitResult(CORRECT)}
              disabled={this.state.isFinished}
            />
            <Button
              buttonStyle={styles.buttonRedQuiz}
              title="Wrong"
              onPress={() => this.submitResult(WRONG)}
              disabled={this.state.isFinished}
            />
          </View>
        </View>;
  }

  getPercentage() {
    return (this.state.scores / this.props.questions.length * 100).toFixed(0);
  }
  restartQuiz() {
    this.setState({
      current: 0,
      scores: 0,
      isFinished: false,
    });
  }
  submitResult(result) {
    if (result === CORRECT) {
      this.setState({ ...this.state, scores: ++this.state.scores });
    }
    if (this.state.current < this.props.questions.length - 1) {
      this.setState({ ...this.state, current: ++this.state.current });
    } else {
      this.setState({ ...this.state, isFinished: true });
    }
  }
}

const mapStateToProps = (state, props) => {
  const deckName = props.navigation.getParam("deckName", "none");
  const questions = state[deckName].cards;
  return {
    deckName,
    questions,
  };
};

export default connect(mapStateToProps)(Quiz);
