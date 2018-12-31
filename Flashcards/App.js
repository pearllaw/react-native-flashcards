import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import NavigationStack from './navigation'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flashcards: [],
      isEditing: null,
      correct: [],
      incorrect: []
    }
    this.saveCard = this.saveCard.bind(this)
    this.editingCard = this.editingCard.bind(this)
    this.updateCard = this.updateCard.bind(this)
    this.deleteCard = this.deleteCard.bind(this)
    this.correct = this.correct.bind(this)
    this.incorrect = this.incorrect.bind(this)
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
    AsyncStorage.setItem('flashcards', JSON.stringify(flashcards))
  }

  deleteCard(id) {
    const { flashcards } = this.state
    const updatedFlashcards = flashcards.filter(card => card.id !== id)
    this.setState({ flashcards: updatedFlashcards })
    AsyncStorage.setItem('flashcards', JSON.stringify(flashcards))
  }

  correct(card) {
    const { correct, incorrect } = this.state
    const updateIncorrect = incorrect.filter(flashcard => flashcard !== card)
    if (!correct.includes(card) || incorrect.includes(card)) 
      return this.setState({ 
        correct: [...correct, card], incorrect: updateIncorrect 
      })
  }

  incorrect(card) {
    const { correct, incorrect } = this.state
    const updateCorrect = correct.filter(flashcard => flashcard !== card)
    if (!incorrect.includes(card) || correct.includes(card)) 
      return this.setState({ 
        correct: updateCorrect, incorrect: [...incorrect, card] 
      })
  }

  async componentDidMount() {
    const getFlashcards = await AsyncStorage.getItem('flashcards')
    this.setState({ flashcards: JSON.parse(getFlashcards) })
  }

  render() {
    const { flashcards, isEditing } = this.state
    return (
      <NavigationStack screenProps={{
        flashcards,
        isEditing,
        saveCard: this.saveCard, 
        editingCard: this.editingCard,
        updateCard: this.updateCard,
        deleteCard: this.deleteCard,
        correct: this.correct,
        incorrect: this.incorrect
      }} />
    )
  }
}
