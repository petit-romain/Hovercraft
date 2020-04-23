// External libs
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Views
import LoginScreen from '../Views/Login/LoginScreen'

const Stack = createStackNavigator()

/**
 * La stack d'avant authentification
 */
const BeforeAuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='Login'
      component={LoginScreen}
      options={{
        headerShown: false
      }}
    />
  </Stack.Navigator>
)

export default BeforeAuthNavigator
