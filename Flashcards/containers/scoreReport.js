import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class ScoreReport extends Component {
  static navigationOptions = {
    title: 'Summary',
    headerStyle: {
      backgroundColor: '#6effff'
    }
  }

  render() {
    const { correctCards, incorrectCards } = this.props.screenProps
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Score Report</Text>
        <Text>{Math.floor((correctCards.length) / (correctCards.length + incorrectCards.length))} %</Text>
        <Text>Correct: {correctCards.length}</Text>
        <Text>Incorrect: {incorrectCards.length} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00e5ff',
  },
  title: {
    fontSize: 20
  }
})