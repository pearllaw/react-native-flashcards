import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import NavigationStack from './navigation'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flashcards: []
    }
    this.saveCard = this.saveCard.bind(this)
  }


  saveCard(flashcard) {
    this.setState(prevState => ({
      flashcards: [...prevState.flashcards, flashcard]
    }))
    AsyncStorage.setItem('flashcards', JSON.stringify(this.state.flashcards))
  }

  // async componentDidMount() {
  //   const getCards = await AsyncStorage.getItem('flashcards')
  //   this.setState({ flashcards: JSON.parse(getCards) })
  // }

  render() {
    const { flashcards } = this.state
    return (
      <NavigationStack screenProps={{
        flashcards,
        saveCard: this.saveCard 
      }} />
    )
  }
}
