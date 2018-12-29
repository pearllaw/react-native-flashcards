import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

function Card({ question, answer, id, editCard, deleteCard }) {
  return (
    <View style={styles.card}>
      <View style={styles.icons}>
        <MaterialIcons id={id} name="delete" size={18} style={{ padding: 5 }} onPress={() => deleteCard(id)} />
        <Entypo id={id} name="edit" size={18} style={{ padding: 5 }} onPress={() => editCard(id)} />
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
    this.editCard = this.editCard.bind(this)
    this.deleteCard = this.deleteCard.bind(this)
  }

  editCard(id) {
    const selectedCard = this.props.screenProps.flashcards.filter(card => card.id === id)
    this.props.screenProps.editingCard(selectedCard)
    this.props.navigation.navigate('Edit')
  }

  deleteCard(id) {
    this.props.screenProps.deleteCard(id)
  }

  render() {
    if (this.props.screenProps.flashcards.length === 0) 
    return <View style={styles.messageContainer}>
             <Text style={styles.text}>You do not have any flashcards</Text>
           </View>
    return (
      <ScrollView style={styles.container}>
        {this.props.screenProps.flashcards.map(card => {
        return <Card key={card.id}
          question={card.question} 
          answer={card.answer} 
          id={card.id}
          editCard={this.editCard}
          deleteCard={this.deleteCard} />
        })}
      </ScrollView>
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
  text: {
    fontWeight: '300',
    fontSize: 18
  },
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