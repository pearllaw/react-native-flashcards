import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import NavigationStack from './navigation'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flashcards: [],
      isEditing: null,
      correctCards: [],
      incorrectCards: []
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
    const { correctCards, incorrectCards } = this.state
    const updateIncorrect = incorrectCards.filter(flashcard => flashcard !== card)
    if (!correctCards.includes(card) || incorrectCards.includes(card)) 
      return this.setState({ 
        correctCards: [...correctCards, card], incorrectCards: updateIncorrect 
      })
  }

  incorrect(card) {
    const { correctCards, incorrectCards } = this.state
    const updateCorrect = correctCards.filter(flashcard => flashcard !== card)
    if (!incorrectCards.includes(card) || correctCards.includes(card)) 
      return this.setState({ 
        correctCards: updateCorrect, incorrectCards: [...incorrectCards, card] 
      })
  }

  async componentDidMount() {
    const getFlashcards = await AsyncStorage.getItem('flashcards')
    this.setState({ flashcards: JSON.parse(getFlashcards) })
  }

  render() {
    const { flashcards, isEditing, correctCards, incorrectCards } = this.state
    return (
      <NavigationStack screenProps={{
        flashcards,
        isEditing,
        correctCards,
        incorrectCards,
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
