import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
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
    const { flashcards } = this.props.screenProps
    this.state = {
      currentIndex: 0,
      progress: ((1 / flashcards.length) * 100)
    }
    this.prev = this.prev.bind(this)
    this.next = this.next.bind(this)
    this.markCorrect = this.markCorrect.bind(this)
    this.markIncorrect = this.markIncorrect.bind(this)
    this.showScore = this.showScore.bind(this)
  }

  prev() {
    const { currentIndex, progress } = this.state
    const { flashcards } = this.props.screenProps
    this.setState({ 
      currentIndex: currentIndex === 0 ? 0 : currentIndex - 1,
      progress: currentIndex === 0 ? ((1 / flashcards.length) * 100) : (progress - ((1 / flashcards.length) * 100))
    })
  }

  next() {
    const { currentIndex, progress } = this.state
    const { flashcards } = this.props.screenProps
    this.setState({ 
      currentIndex: currentIndex < flashcards.length - 1 ? currentIndex + 1 : flashcards.length - 1,
      progress: currentIndex < flashcards.length - 1 ? (progress + ((1 / flashcards.length) * 100)) : 100
    })
  }

  markCorrect(card) {
    this.props.screenProps.correct(card)
  }

  markIncorrect(card) {
    this.props.screenProps.incorrect(card)
  }

  showScore() {
    this.props.navigation.navigate('Summary')
  }

  render() {
    const { currentIndex, progress } = this.state
    const { flashcards } = this.props.screenProps
    const card = flashcards[currentIndex]
    const barWidth = Dimensions.get('screen').width - 90
    const progressCustomStyles = {
      backgroundColor: '#1b1b1b',
      borderColor: '#1b1b1b'
    }
    if (flashcards.length === 0) 
    return <View style={styles.messageContainer}>
             <Text style={styles.messageText}>You do not have any flashcards to practice</Text>
           </View>
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
            <Text style={styles.text}>{card.question}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => this.card.flip()}>
            <Text style={styles.text}>{card.answer}</Text>
          </TouchableOpacity>
        </CardFlip>
        <MaterialIcons style={styles.iconLeft} name="chevron-left" onPress={this.prev} />
        <MaterialIcons style={styles.iconRight} name="chevron-right" onPress={this.next} />
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={() => this.markCorrect(card)}>
            <Text style={styles.buttonText}>Got it!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.markIncorrect(card)}>
            <Text style={styles.buttonText}>Mark as incorrect</Text>
          </TouchableOpacity>
          {currentIndex === flashcards.length - 1 && 
          <TouchableOpacity style={styles.button} onPress={this.showScore}>
            <Text style={styles.buttonText}>Score report</Text>
          </TouchableOpacity>}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  messageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00e5ff'
  },
  messageText: {
    fontWeight: '300',
    fontSize: 18
  },
  container: {
    flex: 1,
    backgroundColor: '#00e5ff',
    flexDirection: 'column',
    alignItems: 'center'
  },
  progressText: {
    fontSize: 16,
    marginTop: 65
  },
  bar: {
    marginTop: 40
  },
  cardContainer: {
    width: 300,
    height: 250,
    marginTop: 50
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
    top: Dimensions.get('screen').height * 0.3,
    left: -15
  },
  iconRight: {
    fontSize: 50,
    padding: 20,
    position: 'absolute',
    top: Dimensions.get('screen').height * 0.3,
    right: -15
  },
  buttons: {
    marginTop: 30
  },
  button: {
    borderRadius: 25,
    backgroundColor: '#1b1b1b',
    margin: 10,
    padding: 12
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
    color: '#fff'
  }
})