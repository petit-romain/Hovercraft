// External libs
import React from 'react'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import { Text } from '@ui-kitten/components'

// Views
import Screen from '../Common/Screen'

// I18n
import './I18n/GamePadScreenI18n'

const GamePadScreen = ({ t }) => {
  return (
    <Screen enableScroll={false}>
      <Text>
        Gamepad Screen
      </Text>
    </Screen>
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

export default connect(mapStateToProps, mapDispatchToProps)(
  withTranslation('GamePadScreen')(GamePadScreen)
)
