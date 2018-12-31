import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

export default class ScoreReport extends Component {
  static navigationOptions = {
    title: 'Summary',
    headerStyle: {
      backgroundColor: '#6effff'
    }
  }

  render() {
    const { correctCards, incorrectCards, flashcards } = this.props.screenProps
    const percentage = Math.floor((correctCards.length / (flashcards.length) * 100))
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Score Report</Text>
        <Text style={styles.percent}>{percentage} %</Text>
        <View>
          <Text style={styles.text}>Correct: {correctCards.length} | Incorrect: {incorrectCards.length}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Review Incorrect Flashcards</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#00e5ff',
  },
  title: {
    fontSize: 22
  },
  percent: {
    fontSize: 60
  },
  text: {
    fontSize: 15,
    padding: 5,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#1b1b1b',
    borderRadius: 25,
    padding: 12,
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center'
  }
})