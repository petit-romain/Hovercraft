// External libs
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistReducer } from 'redux-persist'
import thunkMiddleware from 'redux-thunk'

// Sagas
import rootSaga from '../Sagas/'

// Config
import Config from '../Config/DebugConfig'
import ReduxPersist from '../Config/ReduxPersist'

// Services
import Rehydration from '../Services/Rehydration'

/**
 * Init redux
 * @return {*}
 */
export default () => {
  let finalReducers = reducers
  // If rehydration is on use persistReducer otherwise default combineReducers
  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig
    finalReducers = persistReducer(persistConfig, reducers)
  }

  let { store, sagasManager, sagaMiddleware } = configureStore(finalReducers, rootSaga)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers
      store.replaceReducer(nextRootReducer)

      const newYieldedSagas = require('../Sagas').default
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas)
      })
    })
  }

  return store
}

/**
 * La liste des reducers de l'application
 */
const reducers = combineReducers({
  startup: require('./StartupRedux').reducer,
  auth: require('../Resources/AuthResource').rootReducer,
  tag: require('./TagRedux').reducer,
  tagList: require('./TagListRedux').reducer
})

/**
 * Permet de configurer le store et de gérer les différents middlewares
 * @param rootReducer
 * @param rootSaga
 * @return {{store: *, sagasManager: *, sagaMiddleware: *}}
 */
const configureStore = (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- Saga Middleware ------------- */

  const sagaMonitor = Config.useReactotron ? console.tron.createSagaMonitor() : null
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
  middleware.push(sagaMiddleware)

  /* ------------- Thunk Middleware ------------- */
  middleware.push(thunkMiddleware)

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  // si Reactotron est activé (__DEV__), nous allons créer le store via Reactotron
  const createAppropriateStore = Config.useReactotron ? console.tron.createStore : createStore
  const store = createAppropriateStore(rootReducer, compose(...enhancers))

  // réhydratation du store via redux-persist
  if (ReduxPersist.active) {
    Rehydration.updateReducers(store)
  }

  // démarrage de la saga "root"
  let sagasManager = sagaMiddleware.run(rootSaga)

  return {
    store,
    sagasManager,
    sagaMiddleware
  }
}
