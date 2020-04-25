import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './screens/HomeScreen.js'
import PostScreen from './screens/PostScreen.js'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Post: PostScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Blogs'
    }
  }
)

export const App = createAppContainer(navigator)
