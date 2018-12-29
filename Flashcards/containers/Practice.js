import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native'
import Octicons from '@expo/vector-icons/Octicons'
import CardFlip from 'react-native-card-flip'
import ProgressBarAnimated from 'react-native-progress-bar-animated'

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
      progress: 0 
    }
    this.prev = this.prev.bind(this)
    this.next = this.next.bind(this)
  }

  prev() {
    const { currentIndex } = this.state
    const { flashcards } = this.props.screenProps
    this.setState({ 
      currentIndex: currentIndex > 0 ? currentIndex - 1 : 0,
      progress: currentIndex >= 0 ? Math.floor((currentIndex - 1 / flashcards.length)*100) : 0
    })
  }

  next() {
    const { currentIndex } = this.state
    const { flashcards } = this.props.screenProps
    this.setState({ 
      currentIndex: currentIndex < flashcards.length - 1 ? currentIndex + 1 : 0,
      progress: currentIndex < flashcards.length - 1 ? Math.floor((currentIndex + 1 / flashcards.length)*100) : 100
    })
  }

  render() {
    const { currentIndex, progress } = this.state
    const { flashcards } = this.props.screenProps
    const barWidth = Dimensions.get('screen').width - 80
    const progressCustomStyles = {
      backgroundColor: 'green',
      borderColor: 'none'
    }
    return (
      <View style={styles.container}>
        <ProgressBarAnimated {...progressCustomStyles} 
          width={barWidth} 
          value={progress} />
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