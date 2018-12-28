import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, Text, AsyncStorage } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

function Card({ question, answer }) {
  return (
    <View style={styles.card}>
      <View style={styles.icons}>
        <MaterialIcons name="delete" size={18} style={{ padding: 5 }} />
        <Entypo name="edit" size={18} style={{ padding: 5 }} />
      </View>
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

export default class Deck extends Component {
  static navigationOptions = {
    title: 'Deck',
    headerStyle: {
      backgroundColor: '#6effff'
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      deck: []
    }
  }

  componentDidMount() {
    const deck = this.props.navigation.state.params.deck
    AsyncStorage.setItem('deck', JSON.stringify(deck))
    this.setState({ deck })
  }
  
  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.deck.map(card => {
          return <Card question={card.question} answer={card.answer} id={card.id} key={card.id} />
        })}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
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
  icons: {
    flexDirection: 'row-reverse'
  }
})