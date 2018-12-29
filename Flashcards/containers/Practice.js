import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import CardFlip from 'react-native-card-flip'

export default class Practice extends Component {
  static navigationOptions = {
    title: 'Practice',
    headerStyle: {
      backgroundColor: '#6effff'
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
      flashcards: []
    }
  }

  componentDidMount() {
    this.setState({ flashcards: this.props.screenProps.flashcards })
  }

  render() {
    const { flashcards } = this.state
    return (
      <View style={styles.container}>
        {flashcards.map((card, index) => (
        <CardFlip key={index} styles={styles.cardContainer} ref={(card) => this.card = card}>
          <TouchableOpacity style={styles.card} onPress={() => this.card.flip()}>
            <Text style={styles.text}>{card.question}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => this.card.flip()}>
            <Text style={styles.text}>{card.answer}</Text>
          </TouchableOpacity>
        </CardFlip>
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00e5ff'
  },
  cardContainer: {
    width: '80%',
    height: 300
  },
  card: {
    marginRight: 'auto',
    marginLeft: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    top: 200,
    width: '80%',
    height: 300,
    borderRadius: 10,
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 20,
    fontWeight: '500'
  }
})