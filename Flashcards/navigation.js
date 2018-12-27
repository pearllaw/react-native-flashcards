import React, { Component } from 'react'
import AddCard from './containers/addCard'
import FlashcardDeck from './containers/Deck'
import { StyleSheet, View, Text } from 'react-native'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

class Create extends Component {
  static navigationOptions = {
    title: 'New Flashcard',
    headerStyle: {
      backgroundColor: '#6effff'
    }
  }
  render() {
    return (
      <View style={styles.tabs}>
        <AddCard />
      </View>
    )
  }
}

class Deck extends Component {
  static navigationOptions = {
    title: 'Deck',
    headerStyle: {
      backgroundColor: '#6effff'
    }
  }
  render() {
    return (
      <View style={styles.tabs}>
        <FlashcardDeck />
      </View>
    )
  }
}

class Practice extends Component {
  static navigationOptions = {
    title: 'Practice',
    headerStyle: {
      backgroundColor: '#6effff'
    }
  }
  render() {
    return (
      <View style={styles.tabs}>
        <Text>Practice</Text>
      </View>
    )
  }
}

const CreateHeader = createStackNavigator({
  Create: { screen: Create }
})

const DeckHeader = createStackNavigator({
  Deck: { screen: Deck }
})

const PracticeHeader = createStackNavigator({
  Practice: { screen: Practice }
})

const NavigationStack = createBottomTabNavigator({
  Create: {
    screen: CreateHeader,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <SimpleLineIcons name="plus" size={20} style={{ padding: 10 }} color={tintColor} />,
      tabBarOptions: { activeTintColor: '#38A1F3'}
    }
  },
  Deck: {
    screen: DeckHeader,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <MaterialCommunityIcons name="cards-outline" size={24} style={{ padding: 10 }} color={tintColor} />,
      tabBarOptions: { activeTintColor: '#38A1F3' }
    }
  },
  Practice: {
    screen: PracticeHeader,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <SimpleLineIcons name="list" size={20} style={{ padding: 10 }} color={tintColor} />,
      tabBarOptions: { activeTintColor: '#38A1F3' }
    }
  }
})

export default NavigationStack

const styles = StyleSheet.create({
  tabs: {
    flex: 1,
    backgroundColor: '#00e5ff'
  }
})