// External libs
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import WifiManager from 'react-native-wifi-reborn'

// View
import Screen from '../Common/Screen'

// I18n
import './I18n/LoginScreenI18n'

const LoginScreen = () => {
  useEffect(() => {
    WifiManager.loadWifiList(
      wifiList => {
        console.tron.log({ wifiList: JSON.parse(wifiList) })
      },
      error => console.tron.error({ error })
    )
  })

  return (
    <Screen>
      Login Screen
    </Screen>
  )
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withTranslation('LoginScreen')(LoginScreen)
)
