# Mobile Flash Cards

Sample application developed with react native. 
Tested on android emulator only (what a pain)
Data created in app is persisted in AsyncStorage.
## Installation

Before frst run install all node dependencies by typing

```bash
Run npm i
```

## Usage
To run app just type

```bash
npm start
```
## Project Structure
```bash
/utils - code for handling notification and data persistance
/resources - UI styles and constants for colors
/reducers - redux reducer
/actions - redux actions
/componends - implementation of application screens
App.js - application main class
```

## Functionalities
 With mobile flashcards Application user can:
- add a deck of related questions
- add cards to deck
- run a quiz. To see the answer just flip a card. At the end of quiz summary with final scores will be displayed. User can Re-take quiz.
- Deck can be removed.
- User should receive notification if quiz was not taken untill 20:00
- Preventing of adding duplicated deck name is not implemented in this version. Same for duplicated questions.


## License
[MIT](https://choosealicense.com/licenses/mit/)