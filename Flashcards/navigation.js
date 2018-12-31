import React from 'react'
import AddCard from './containers/addCard'
import EditCard from './containers/editCard'
import Deck from './containers/Deck'
import Practice from './containers/Practice'
import ScoreReport from './containers/scoreReport'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

const CreateHeader = createStackNavigator({
  Create: AddCard
})

const DeckHeader = createStackNavigator({
  Deck: Deck,
  Edit: EditCard  
})

const PracticeHeader = createStackNavigator({
  Practice: Practice,
  Summary: ScoreReport
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

