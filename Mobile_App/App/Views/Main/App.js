// External libs
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { mapping, light as lightTheme } from '@eva-design/eva'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import appTheme from '../../Assets/Themes/custom-theme.json'

// Config
import '../../Config'
import DebugConfig from '../../Config/DebugConfig'

// Redux
import createStore from '../../Redux'

// Resources
import configureResources from '../../Resources'

// Views
import RootContainer from './RootContainer'

/**
 * Création du store
 * La création du store doit se faire ici pour que reactotron puisse le récupérer
 * @type {*}
 */
const store = createStore()

/**
 * Le thème de l'application (via UI Kitten)
 */
const theme = { ...lightTheme, ...appTheme }

/**
 * Le point d'entrée de l'application. L'index.js appelle ce composant en premier.
 *
 * C'est ici qu'est créé le store Redux et fourni au composant Provider qui "wrappe" le RootContainer.
 *
 * On sépare ainsi pour que le Hot Reloading de React Native fonctionne mieux.
 */
class App extends Component {
  componentDidMount () {
    // configuration de redux-rest-resources
    configureResources()
  }

  render () {
    return (
      <Provider store={store}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider mapping={mapping} theme={theme}>
          <RootContainer />
        </ApplicationProvider>
      </Provider>
    )
  }
}

/**
 * Ajoute la fonctionnalité d'overlay de Reactotron (onglet React Native).
 *
 * Permet de superposer une image sur le simulateur pour vérifier les alignements par rapport au design par exemple.
 */
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App
