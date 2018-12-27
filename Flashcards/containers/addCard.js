import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native'
import uuidv1 from 'uuid/v1'

export default class AddCard extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      flashcards: {},
      question: '',
      answer: ''
    }
    this.addCard = this.addCard.bind(this)
  }

  addCard() {
    const { flashcards, question, answer } = this.state
    const id = uuidv1()
    const newCard = {
      [id]: {
        id: id,
        question: question,
        answer: answer
      }
    }
    if ( question && answer !== '') {
      this.setState({
        flashcards: {
          ...flashcards,
          ...newCard
        },
        question: '',
        answer: ''
      })
      AsyncStorage.setItem('flashcards', JSON.stringify(flashcards))
    }
  }

  // async componentDidMount() {
  //   try {
  //     const getFlashcards = await AsyncStorage.getItem('flashcards')
  //     this.setState({ flashcards: JSON.parse(getFlashcards) })
  //   }
  //   catch (err) {
  //     console.log(err)
  //   }
  // }

  render() {
    const { question, answer } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Create a Flashcard</Text>
        <View style={styles.form}>
          <View style={styles.input}>
            <Text>Question</Text>
            <TextInput style={styles.question}
              autoCorrect={false}
              value={question}
              onChangeText={(text) => this.setState({ question: text })} />
          </View>
          <View style={styles.input}>
            <Text>Answer</Text>
            <ScrollView>
              <TextInput style={styles.answer}
                multiline = {true}
                autoCorrect={false}
                value={answer}
                onChangeText={(text) => this.setState({ answer: text })} />
            </ScrollView>
          </View>
          <TouchableOpacity style={styles.button} 
            onPress={this.addCard}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: 'transparent',
    padding: 40,
    backgroundColor: '#fff',
    width: '70%'
  },
  title: {
    fontSize: 22,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: '500'
  },
  input: {
    width: '100%'
  },
  question: {
    fontSize: 16,
    borderWidth: 0.5,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
    padding: 10
  },
  answer: {
    fontSize: 16,
    borderWidth: 0.5,
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
    height: 200
  },
  button: {
    backgroundColor: '#1b1b1b',
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: 20,
    width: '50%' 
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
})