import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import NavigationStack from './navigation'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flashcards: [],
      isEditing: null
    }
    this.saveCard = this.saveCard.bind(this)
    this.editingCard = this.editingCard.bind(this)
    this.updateCard = this.updateCard.bind(this)
  }

  saveCard(flashcard) {
    this.setState(prevState => ({
      flashcards: [...prevState.flashcards, flashcard]
    }))
    AsyncStorage.setItem('flashcards', JSON.stringify(this.state.flashcards))
  }

  editingCard(selectedCard) {
    this.setState({ isEditing: selectedCard })
  }

  updateCard(card) {
    const { flashcards } = this.state
    const updatedFlashcards = flashcards.map(flashcard => {
      return flashcard.id === card.id
        ? Object.assign({}, flashcard, {question: card.question, answer: card.answer})
        : flashcard
    })
    this.setState({ flashcards: updatedFlashcards })
  }

  async componentDidMount() {
    const getCards = await AsyncStorage.getItem('flashcards')
    this.setState({ flashcards: JSON.parse(getCards) })
  }

  render() {
    const { flashcards, isEditing } = this.state
    return (
      <NavigationStack screenProps={{
        flashcards,
        isEditing,
        saveCard: this.saveCard, 
        editingCard: this.editingCard,
        updateCard: this.updateCard
      }} />
    )
  }
}
