// External libs
import { takeLatest, all } from 'redux-saga/effects'

// Types
import { StartupTypes } from '../Redux/StartupRedux'

// Sagas
import { startup } from './StartupSagas'

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // saga liée au démarrage
    takeLatest(StartupTypes.STARTUP, startup)
  ])
}
