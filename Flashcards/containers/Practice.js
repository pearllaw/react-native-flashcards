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
      currentIndex: currentIndex === 0 ? 0 : currentIndex - 1,
      progress: currentIndex === 0 ? 0 : Math.floor((currentIndex - 1) / (flashcards.length - 1) *100) 
    })
  }

  next() {
    const { currentIndex } = this.state
    const { flashcards } = this.props.screenProps
    this.setState({ 
      currentIndex: currentIndex < flashcards.length - 1 ? currentIndex + 1 : flashcards.length - 1,
      progress: currentIndex < flashcards.length - 1 ? Math.floor((currentIndex + 1) / (flashcards.length - 1) *100) : 100
    })
  }

  render() {
    const { currentIndex, progress } = this.state
    const { flashcards } = this.props.screenProps
    const barWidth = Dimensions.get('screen').width - 90
    const progressCustomStyles = {
      backgroundColor: '#484848',
      borderColor: '#484848'
    }
    return (
      <View style={styles.container}>
        <Text style={styles.progressText}>Reviewing {currentIndex + 1} out of {flashcards.length} flashcards</Text>
        <View style={styles.bar}>
          <ProgressBarAnimated {...progressCustomStyles} 
            width={barWidth} 
            value={progress} />
        </View>
        <CardFlip style={styles.cardContainer} ref={(card) => this.card = card}>
          <TouchableOpacity style={styles.card} onPress={() => this.card.flip()}>
            <Text style={styles.text}>{flashcards[currentIndex].question}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => this.card.flip()}>
            <Text style={styles.text}>{flashcards[currentIndex].answer}</Text>
          </TouchableOpacity>
        </CardFlip>
        <Octicons style={styles.iconLeft} name="chevron-left" onPress={this.prev} />
        <Octicons style={styles.iconRight} name="chevron-right" onPress={this.next} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00e5ff',
    flexDirection: 'column',
    alignItems: 'center'
  },
  progressText: {
    fontSize: 16,
    marginTop: 90
  },
  bar: {
    marginTop: 40
  },
  cardContainer: {
    width: 300,
    height: 250,
    marginTop: 60
  },
  card: {
    width: 300,
    height: 250,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
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
    left: 0
  },
  iconRight: {
    fontSize: 50,
    padding: 20,
    position: 'absolute',
    top: 300,
    right: 0
  }
})