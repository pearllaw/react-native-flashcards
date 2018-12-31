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
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Score Report</Text>
        <Text>Correct:</Text>
        <Text>Incorrect:</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00e5ff'
  },
  title: {
    fontSize: 20
  }
})