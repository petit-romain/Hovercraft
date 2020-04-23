// External libs
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { connect } from 'react-redux'

// Navigators
import BeforeAuthNavigator from './BeforeAuthNavigator'
import AfterAuthNavigator from './AfterAuthNavigator'

const Stack = createStackNavigator()

/**
 * La stack d'authentification
 */
const AuthStack = ({ firstRun }) => (
  <Stack.Navigator headerMode='none'>
    {firstRun && (
      <Stack.Screen
        name='BeforeAuth'
        component={BeforeAuthNavigator}
      />
    )}

    {!firstRun && (
      <Stack.Screen
        name='AfterAuth'
        component={AfterAuthNavigator}
      />
    )}
  </Stack.Navigator>
)

const mapStateToProps = (state) => {
  return {
    firstRun: state.startup.firstRun
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthStack)
