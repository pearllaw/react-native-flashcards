import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import CardFlip from 'react-native-card-flip'
import Octicons from '@expo/vector-icons/Octicons'

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
      currentIndex: 0
    }
    this.prev = this.prev.bind(this)
    this.next = this.next.bind(this)
  }

  prev() {
    const { currentIndex } = this.state
    this.setState({ currentIndex: currentIndex > 0 ? currentIndex - 1 : 0 })
  }

  next() {
    const { currentIndex } = this.state
    const { flashcards } = this.props.screenProps
    this.setState({ currentIndex: currentIndex < flashcards.length - 1 ? currentIndex + 1 : 0 })
  }

  render() {
    const { currentIndex } = this.state
    const { flashcards } = this.props.screenProps
    return (
      <View style={styles.container}>
        <Octicons style={styles.iconLeft} name="chevron-left" onPress={this.prev} />
        <CardFlip styles={styles.cardContainer} ref={(card) => this.card = card}>
          <TouchableOpacity style={styles.card} onPress={() => this.card.flip()}>
            <Text style={styles.text}>{flashcards[currentIndex].question}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => this.card.flip()}>
            <Text style={styles.text}>{flashcards[currentIndex].answer}</Text>
          </TouchableOpacity>
        </CardFlip>
        <Octicons style={styles.iconRight} name="chevron-right" onPress={this.next} />
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
    width: '70%',
    height: 300
  },
  card: {
    marginRight: 'auto',
    marginLeft: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    top: 200,
    width: '70%',
    height: 300,
    borderRadius: 10,
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 20,
    fontWeight: '500'
  },
  iconLeft: {
    fontSize: 50,
    padding: 20,
    position: 'absolute',
    top: 300,
  },
  iconRight: {
    fontSize: 50,
    padding: 20,
    position: 'absolute',
    left: 350,
    top: 300
  }
})