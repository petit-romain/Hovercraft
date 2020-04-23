// External libs
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { connect } from 'react-redux'
import i18next from 'i18next'

// Views
import NavigationHeader from '../Views/Common/NavigationHeader'
import NavigationTabBar from '../Views/Common/NavigationTabBar'
import GamePadScreen from '../Views/Inventory/GamePadScreen'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

/**
 * La tab navigation principale
 */
const MainTabNavigatorScreen = () => {
  // Gets the icon and title for a route
  const getRouteOptions = ({ name: routeName }) => {
    switch (routeName) {
      case 'GamePad':
        return {
          tabBarIcon: 'plus-outline',
          title: i18next.t('GamePadScreen:title')
        }
    }
  }

  const createStack = (name, component, options) => {
    return () => (
      <Stack.Navigator
        screenOptions={{
          header: (props) => <NavigationHeader {...props} />,
          showDropdownMenu: true
        }}
      >
        <Stack.Screen
          name={name}
          component={component}
          options={options}
        />
      </Stack.Navigator>
    )
  }

  return (
    <Tab.Navigator
      tabBar={(props) => <NavigationTabBar {...props} />}
      screenOptions={({ route }) => getRouteOptions(route)}
      tabBarOptions={{
        showIcon: true,
        showLabel: false
      }}
    >
      <Tab.Screen
        name='GamePad'
        component={createStack(
          'GamePad',
          GamePadScreen,
          {
            title: i18next.t('GamePadScreen:title')
          }
        )}
      />
    </Tab.Navigator>
  )
}

/**
 * La tab navigation d'après authentification
 */
const AfterAuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <NavigationHeader {...props} />
      }}
    >
      <Stack.Screen
        name='MainTabNavigator'
        component={MainTabNavigatorScreen}
        options={{
          header: () => null
        }}
      />
    </Stack.Navigator>
  )
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AfterAuthNavigator)
