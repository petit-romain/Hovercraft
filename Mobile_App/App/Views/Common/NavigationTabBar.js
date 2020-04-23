// External libs
import React from 'react'
import { SafeAreaView } from 'react-native'
import {
  BottomNavigation,
  BottomNavigationTab,
  useStyleSheet,
  Icon
} from '@ui-kitten/components'
import { withTranslation } from 'react-i18next'
import { map, get } from 'lodash'

// I18n
import './I18n/NavigationTabBarI18n'

// Styles
import styles from './Styles/NavigationTabBarStyles'

const NavigationTabBar = ({ t, state, descriptors, navigation, showIcon, showLabel }) => {
  const themedStyles = useStyleSheet(styles)

  const onSelect = (index) => {
    navigation.navigate(state.routeNames[index])
  }

  return (
    <SafeAreaView style={themedStyles.safeArea}>
      <BottomNavigation
        style={themedStyles.bottomNavigation}
        selectedIndex={state.index}
        onSelect={onSelect}
      >
        {map(get(state, 'routes'), (route, index) => {
          const options = get(descriptors, `${route.key}.options`)

          return (
            <BottomNavigationTab
              key={index}
              title={showLabel && options.title}
              icon={(style) => showIcon && (
                <Icon {...style} name={options.tabBarIcon} />
              )}
            />
          )
        })}
      </BottomNavigation>
    </SafeAreaView>
  )
}

export default withTranslation('BottomNavigation')(NavigationTabBar)
