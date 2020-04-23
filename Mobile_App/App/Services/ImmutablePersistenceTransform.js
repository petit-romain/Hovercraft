import R from 'ramda'
import Immutable from 'seamless-immutable'
import { initialState } from 'redux-rest-resource'

// is this object already Immutable?
const isImmutable = R.has('asMutable')

// change this Immutable object into a JS object
const convertToJs = (state) => state.asMutable({ deep: true })

// optionally convert this object into a JS object if it is Immutable
const fromImmutable = R.when(isImmutable, convertToJs)

// convert this JS object into an Immutable object
const toImmutable = (raw) => Immutable(raw)

/**
 * Permet de résoudre les pb liés à redux-persist si jamais il recharge des états incohérents dans les reducers.
 * Ex: un crash pendant un appel serveur. En revenant dans l'app le booléen est resté à `true` donc le loader est infini ...
 * @param raw
 */
const resetResourceReducers = (raw) => {
  const state = { ...raw }
  const regex = new RegExp(/(is|did)[A-Z]{1}/g)
  const properties = R.keys(state)

  properties.forEach((property) => {
    const test = property.match(regex) !== null

    if (test) {
      state[property] = initialState[property] || false
    }
  })

  return state
}

// the transform interface that redux-persist is expecting
export default {
  out: (state) => {
    // on restaure les valeurs initiales de redux-rest-resource au lancement et on rend le state immutable
    // console.log({ retrieving: state })
    return toImmutable(resetResourceReducers(state))
  },
  in: (raw) => {
    // console.log({ storing: raw })
    return fromImmutable(raw)
  }
}
