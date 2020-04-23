// External libs
import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { Layout } from '@ui-kitten/components'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// Styles
import styles from './Styles/ScreenStyles'

export default ({ children, style, enableScroll = true }) => {
  const ContainerComponent = enableScroll ? KeyboardAwareScrollView : View

  return (
    <Layout
      style={[
        styles.container,
        style
      ]}
      level='3'
    >
      <SafeAreaView style={styles.safeArea}>
        <ContainerComponent
          style={styles.scroller}
          contentContainerStyle={styles.scrollerContent}
          enableOnAndroid
        >
          {children}
        </ContainerComponent>
      </SafeAreaView>
    </Layout>
  )
}
