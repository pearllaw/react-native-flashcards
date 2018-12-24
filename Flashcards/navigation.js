import { createBottomTabNavigator } from 'react-navigation'
import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

class Create extends Component {
  render() {
    return (
      <View style={styles.tabs}>
        <Text>Create</Text>
      </View>
    )
  }
}

class Deck extends Component {
  render() {
    return (
      <View style={styles.tabs}>
        <Text>Deck</Text>
      </View>
    )
  }
}

class Practice extends Component {
  render() {
    return (
      <View style={styles.tabs}>
        <Text>Practice</Text>
      </View>
    )
  }
}
  
const NavTabs = createBottomTabNavigator({
    Create: {
      screen: Create,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <SimpleLineIcons name="plus" size={20} style={{ padding: 10 }} color={tintColor} />,
        tabBarOptions: { activeTintColor: 'blue'}
      }
    },
    Deck: {
      screen: Deck,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <MaterialCommunityIcons name="cards-outline" size={24} style={{ padding: 10 }} color={tintColor} />,
        tabBarOptions: { activeTintColor: 'blue' }
      }
    },
    Practice: {
      screen: Practice,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <SimpleLineIcons name="list" size={20} style={{ padding: 10 }} color={tintColor} />,
        tabBarOptions: { activeTintColor: 'blue' }
      }
    }
})

export default NavTabs

const styles = StyleSheet.create({
  tabs: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})