import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'

function Card({ question, answer }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>Question</Text>
        <Text style={styles.cardText}>{question}</Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>Answer</Text>
        <Text style={styles.cardText}>{answer}</Text>
      </View>
    </View>
  )
}

export default class IncorrectFlashcard extends Component {
  static navigationOptions = {
    title: 'Review',
    headerStyle: {
      backgroundColor: '#6effff'
    }
  }
  render() {
    const { incorrectCards } = this.props.screenProps
    return (
      <ScrollView style={styles.container}>
        {incorrectCards.map(card => (
          <Card key={card.id} question={card.question} answer={card.answer} />
        ))}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00e5ff'
  },
  card: {
    marginTop: 20,
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'transparent',
    padding: 5,
    width: '80%',
    backgroundColor: '#fff'
  },
  cardContent: {
    padding: 7,
    alignItems: 'center'
  },
  cardTitle: {
    fontWeight: '500'
  },
  cardText: {
    padding: 10
  },
})