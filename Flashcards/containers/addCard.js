import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native'

export default class AddCard extends Component {
  constructor(props) {
    super(props) 
    this.state ={
      question: '',
      answer: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Create a Flashcard</Text>
        <View style={styles.form}>
          <View style={styles.input}>
            <Text>Question</Text>
            <TextInput style={styles.question}
              autoCorrect={false}
              value={this.state.question}
              onChangeText={(text) => this.setState({ question: text })} />
          </View>
          <View style={styles.input}>
            <Text>Answer</Text>
            <ScrollView>
              <TextInput style={styles.answer}
                multiline = {true}
                autoCorrect={false}
                value={this.state.answer}
                onChangeText={(text) => this.setState({ answer: text })} />
            </ScrollView>
          </View>
          <TouchableOpacity style={styles.button}>
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
    width: '70%',
  },
  form: {
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: 'transparent',
    padding: 40,
    backgroundColor: '#fff',
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