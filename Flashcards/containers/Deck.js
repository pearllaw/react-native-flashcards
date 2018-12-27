import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

function Card() {
  return (
    <View style={styles.card}>
      <View style={styles.icons}>
        <MaterialIcons name="delete" size={18} style={{ padding: 5 }} />
        <Entypo name="edit" size={18} style={{ padding: 5 }} />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>Question</Text>
        <Text style={styles.cardText}>This is a sample question</Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>Answer</Text>
        <Text style={styles.cardText}>This is a sample answer</Text>
      </View>
    </View>
  )
}

export default class FlashcardDeck extends Component {
  render() {
    return (
      <ScrollView>
        <Card />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    marginTop: 30,
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'transparent',
    padding: 15,
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