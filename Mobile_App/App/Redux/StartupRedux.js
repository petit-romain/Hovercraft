// External libs
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startup: null,
  setFirstRun: ['firstRun'],
  startupEnd: null,
  appStateChange: ['state'],
  connectivityChange: ['offline']
})

export const StartupTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  firstRun: true,
  lastRun: null,
  appState: null,
  offline: false
})

/* ------------- Reducers ------------- */

// première utilisation de l'application
export const setFirstRun = (state, action) => {
  return state.merge({ firstRun: action.firstRun })
}

// La fin du démarrage
export const startupEnd = (state, action) => {
  return state.merge({ lastRun: new Date().getTime() })
}

// quand l'état de l'application change
export const appStateChange = (state, action) => {
  if (action.state === 'background') {
    return state.merge({ lastBackgroundDate: new Date().getTime(), appState: action.state })
  } else {
    return state.merge({ appState: action.state })
  }
}

// quand la connexion change
export const connectivityChange = (state, action) => {
  return state.merge({ offline: action.offline })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_FIRST_RUN]: setFirstRun,
  [Types.STARTUP_END]: startupEnd,
  [Types.APP_STATE_CHANGE]: appStateChange,
  [Types.CONNECTIVITY_CHANGE]: connectivityChange
})
