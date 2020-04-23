// External libs
import { AppState } from 'react-native'
import { call, put, take, select, all, delay } from 'redux-saga/effects'
import { eventChannel, END } from 'redux-saga'
import SplashScreen from 'react-native-splash-screen'
import NetInfo from '@react-native-community/netinfo'

// Redux
import StartupActions from '../Redux/StartupRedux'

/**
 * Démarrage de l'application
 */
export function * startup () {
  // on récupère le profil
  // const profile = yield select((state) => state.auth.item)

  // est-ce qu'il y a un profil ?
  // if (profile !== null) {
  //   yield call(setSession)
  // }

  // fin du démarrage
  yield call(startupEnd)

  yield all([
    // on lance la surveillance de l'état de l'application
    call(watchAppState),
    // on lance la surveillance de l'état de connexion
    call(watchAppConnectivity)
  ])
}

/**
 * Permet de surveiller la connexion et recharger l'application si on passe en du mode hors ligne vers le mode en ligne
 */
function * watchAppConnectivity () {
  // récupération de la valeur initiale
  const initialConnectionInfo = yield call(NetInfo.fetch)
  const isOffline = ['none', 'unknown'].indexOf(initialConnectionInfo.type) !== -1
  yield put(StartupActions.connectivityChange(isOffline))

  // création de "l'observateur"
  const connectivityWatcher = yield call(createConnectivityWatcher)

  while (true) {
    let isOffline = yield take(connectivityWatcher)
    yield put(StartupActions.connectivityChange(isOffline))
  }
}

/**
 * Permet de créer un surveillant de la connexion
 */
function createConnectivityWatcher () {
  return eventChannel(emitter => {
    const unsubscribe = NetInfo.addEventListener(state => {
      const isOffline = ['none', 'unknown'].indexOf(state.type) !== -1
      emitter(isOffline)
    })

    return () => {
      unsubscribe()
    }
  })
}

/**
 * Permet de surveiller l'état de l'application (foreground / background / inactive)
 */
function * watchAppState () {
  const asChannel = yield call(createAppStateChannel)

  while (true) {
    const currentAppState = yield take(asChannel)
    const oldState = yield select((state) => state.startup.appState)
    yield put(StartupActions.appStateChange(currentAppState))

    if (currentAppState === 'active' && oldState === 'background') {
      // fin du (re)démarrage
      yield call(startupEnd)

      // on appelle les méthodes `appResuming` des autres sagas
      yield all([
        // call(appResumingNotification)
      ])
    }
  }
}

/**
 * Permet de créer une channel saga pour écouter les changements d'état de l'application
 * see https://redux-saga.js.org/docs/advanced/Channels.html
 * @return {*}
 */
function createAppStateChannel () {
  return eventChannel(emitter => {
    AppState.addEventListener('change', (currentAppState) => {
      emitter(currentAppState)
    })

    return () => {
      AppState.removeEventListener('change', () => {
        emitter(END)
      })
    }
  })
}

/**
 * Fin du démarrage
 */
function * startupEnd () {
  // fin du démarrage (permet de garder la date du dernier démarrage)
  yield put(StartupActions.startupEnd())

  // on cache le splashscreen
  yield delay(500)
  yield call(SplashScreen.hide)
}
