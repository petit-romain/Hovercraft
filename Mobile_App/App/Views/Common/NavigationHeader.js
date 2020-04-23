// External libs
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { useNavigationState } from '@react-navigation/native'
import { connect } from 'react-redux'
import { TopNavigation, TopNavigationAction, Icon, OverflowMenu, useStyleSheet } from '@ui-kitten/components'
import { get } from 'lodash'
import { withTranslation } from 'react-i18next'

// I18n
import './I18n/NavigationHeaderI18n'

// Redux
import StartupActions from '../../Redux/StartupRedux'

// Styles
import styles from './Styles/NavigationHeaderStyles'

const NavigationHeader = ({ t, scene, navigation, firstRun, fakeLogout }) => {
  const index = useNavigationState(state => state.index)
  const themedStyles = useStyleSheet(styles)

  const [ menuVisible, setMenuVisible ] = useState(false)

  // les items du menu "more"
  const moreMenuItems = [
    { title: t('logout') }
  ]

  // quand on clique sur l'icône "more"
  const toggleMenu = () => {
    setMenuVisible(!menuVisible)
  }

  return (
    <SafeAreaView style={themedStyles.safeArea}>
      <TopNavigation
        style={themedStyles.topNavigation}
        titleStyle={themedStyles.topNavigationTitle}
        title={get(scene, 'descriptor.options.title', '')}
        alignment='center'
        leftControl={index > 0 &&
          <TopNavigationAction
            icon={(style) => (
              <Icon
                {...style}
                fill='white'
                name='arrow-back'
              />
            )}
            onPress={() => navigation.canGoBack() && navigation.goBack()}
            activeOpacity={0.2}
          />
        }
        rightControls={!firstRun && get(scene, 'descriptor.options.showDropdownMenu')
          ? ([
            <OverflowMenu
              data={moreMenuItems}
              visible={menuVisible}
              onBackdropPress={toggleMenu}
              onSelect={(index) => {
                switch (index) {
                  case 0:
                    fakeLogout()
                    break

                  default:
                    break
                }

                toggleMenu()
              }}
            >
              <TopNavigationAction
                icon={(style) => (
                  <Icon
                    {...style}
                    fill='white'
                    name='more-vertical-outline'
                  />
                )}
                onPress={() => toggleMenu()}
                activeOpacity={0.2}
              />
            </OverflowMenu>
          ])
          : get(scene, 'descriptor.options.headerRight', () => [])()
        }
      />
    </SafeAreaView>
  )
}

const mapStateToProps = (state) => {
  return {
    firstRun: state.startup.firstRun
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fakeLogout: () => dispatch(StartupActions.setFirstRun(true))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withTranslation('NavigationHeader')(NavigationHeader)
)
