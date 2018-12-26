import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Text, TextInput } from 'react-native'

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
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '70%'
  },
  form: {
    borderRadius: 10,
    borderWidth: 0.5,
    padding: 40
  },
  title: {
    fontSize: 22,
    marginBottom: 30,
    textAlign: 'center'
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
  }
})