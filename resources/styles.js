import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  footer: {
    padding: 40
  },
  header: {
    textAlign: 'center',
    marginTop: 20,
    padding: 40
  },
  textCenter: {
    textAlign: 'center'
  },
  button: {
    borderRadius: 4,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 5,
    marginTop: 5
  },
  buttonsInFooterQuiz: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  iconContainerQuiz: {
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  buttonRedQuiz: {
    backgroundColor: 'red',
    borderRadius: 4,
    margin: 15
  },
  buttonGreenQuiz: {
    backgroundColor: 'green',
    borderRadius: 4,
    margin: 15
  },
  flipCardBack: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    borderRadius: 4,
    margin: 15
  },
  flipCardFront: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    borderRadius: 4,
    margin: 15
  },
  flipCardContainer: { flex: 4 },
  headerQuizContainer: {
    marginTop: 50,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  createCardInputGroup: {
    paddingTop: 50,
    paddingBottom: 50
  }
})

export default styles
