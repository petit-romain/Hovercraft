// External libs
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { connect } from 'react-redux'

// Navigators
import AuthNavigator from './AuthNavigator'

const Stack = createStackNavigator()

class Index extends React.Component {
  render () {
    return (
      <NavigationContainer>
        <Stack.Navigator
          mode='modal'
          headerMode='None'
        >
          {/* La stack d'authentification */}
          <Stack.Screen
            name='Auth'
            component={AuthNavigator}
          />

          {/* Le reste des écrans qui vont s'afficher en mode "modal" */}
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
