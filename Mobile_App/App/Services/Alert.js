/**
 * Service temporaire qui vient surcharger l'API `Alert` pour prévenir le conflit entre le composant `Modal` et ce dernier.
 * Ce conflit arrive notamment lors de l'utilisation du `Spinner` puis de l'affichage d'une alert d'échec.
 *
 * see https://github.com/facebook/react-native/issues/10471
 */

import { Alert, InteractionManager } from 'react-native'

export default {
  alert: (title, message, buttons, options) => {
    InteractionManager.runAfterInteractions(() => {
      setTimeout(() => {
        Alert.alert(title, message, buttons, options)
      }, 50)
    })
  }
}
